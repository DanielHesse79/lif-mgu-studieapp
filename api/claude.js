import Anthropic from '@anthropic-ai/sdk'
import tls from 'node:tls'
import { Agent } from 'undici'
import { TASKS } from './_lib/prompts.js'

const MODEL = process.env.CLAUDE_MODEL || 'claude-sonnet-4-6'
const MAX_REQUEST_BYTES = 50_000
const MAX_CONTEXT_BYTES = 30_000
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 10
const rateLimit = new Map()

function clientIp(req) {
  const forwarded = req.headers?.['x-forwarded-for']
  if (typeof forwarded === 'string') return forwarded.split(',')[0].trim()
  return req.headers?.['x-real-ip'] || req.socket?.remoteAddress || 'unknown'
}

function takeRateLimit(req) {
  const now = Date.now()
  if (rateLimit.size > 1000) {
    for (const [key, value] of rateLimit) {
      if (now >= value.resetAt) rateLimit.delete(key)
    }
    while (rateLimit.size > 1000) rateLimit.delete(rateLimit.keys().next().value)
  }
  const ip = clientIp(req)
  const current = rateLimit.get(ip)
  if (!current || now >= current.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return null
  }
  if (current.count >= RATE_LIMIT_MAX) {
    return Math.max(1, Math.ceil((current.resetAt - now) / 1000))
  }
  current.count += 1
  return null
}

function requiredText(value, field, maxLength = 200) {
  if (typeof value !== 'string' || !value.trim()) {
    throw new Error(`${field} måste vara en icke-tom text.`)
  }
  if (value.length > maxLength) throw new Error(`${field} är för långt.`)
  return value.trim()
}

function validatePayload(task, payload) {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    throw new Error('payload måste vara ett objekt.')
  }

  const common = {
    moduleTitle: requiredText(payload.moduleTitle, 'moduleTitle'),
    topic: requiredText(payload.topic, 'topic'),
    lesson: requiredText(payload.lesson, 'lesson'),
  }

  if (task === 'learn') {
    const level = payload.level || 'grund'
    if (!['grund', 'fordjupning'].includes(level)) throw new Error('Ogiltig nivå.')
    return { ...common, level }
  }

  if (task === 'learn-adjust') {
    if (!['simplify', 'deepen'].includes(payload.direction)) {
      throw new Error('Ogiltig riktning.')
    }
    if (!payload.current || typeof payload.current !== 'object' || Array.isArray(payload.current)) {
      throw new Error('current måste vara ett lektionsobjekt.')
    }
    const currentBytes = Buffer.byteLength(JSON.stringify(payload.current), 'utf8')
    if (currentBytes > MAX_CONTEXT_BYTES) throw new Error('Lektionstexten är för stor.')
    return { ...common, direction: payload.direction, current: payload.current }
  }

  throw new Error('Okänd task.')
}

/**
 * HTTPS-dispatcher som litar på OPERATIVSYSTEMETS certifikatlager utöver Nodes
 * inbyggda lista.
 *
 * Behövs i nät med en TLS-inspektionsproxy (vanligt i företagsnät, t.ex.
 * Netskope/Zscaler) där HTTPS signeras om av ett företags-rot-CA. Det CA:t
 * finns i Windows/macOS/Linux-lagret men inte i Nodes egen lista, så fetch-anropet
 * annars kan falla med UNABLE_TO_VERIFY_LEAF_SIGNATURE ("Connection error").
 * Harmlöst på Vercel – systemlagret där innehåller standardrötterna.
 */
let dispatcherComputed = false
let cachedDispatcher
function getTlsDispatcher() {
  if (dispatcherComputed) return cachedDispatcher
  dispatcherComputed = true
  try {
    const ca = [...tls.rootCertificates, ...tls.getCACertificates('system')]
    cachedDispatcher = new Agent({ connect: { ca } })
  } catch {
    cachedDispatcher = undefined // äldre Node utan getCACertificates: använd SDK:ns standard
  }
  return cachedDispatcher
}

/**
 * Serverless-proxy mot Claude.
 *
 * Klienten skickar { task, payload }. Servern bygger systemprompt + verktygsschema
 * (se _lib/prompts.js), anropar Claude med tvingad tool-use och returnerar det
 * validerade strukturerade resultatet. API-nyckeln läses från process.env och
 * lämnar aldrig servern.
 *
 * Fungerar både som Vercel-funktion och via Vite-middleware lokalt (se vite.config.js).
 */
export default async function handler(req, res) {
  res.setHeader?.('Cache-Control', 'no-store')
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const contentLength = Number(req.headers?.['content-length'] || 0)
  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
    return res.status(413).json({ error: 'Request body är för stor.' })
  }

  let requestBytes = 0
  try {
    requestBytes = Buffer.byteLength(JSON.stringify(req.body || {}), 'utf8')
  } catch {
    return res.status(400).json({ error: 'Request body kunde inte läsas.' })
  }
  if (requestBytes > MAX_REQUEST_BYTES) {
    return res.status(413).json({ error: 'Request body är för stor.' })
  }

  const retryAfter = takeRateLimit(req)
  if (retryAfter != null) {
    res.setHeader?.('Retry-After', String(retryAfter))
    return res.status(429).json({ error: 'För många AI-anrop. Försök igen om en minut.' })
  }

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return res.status(500).json({
      error:
        'ANTHROPIC_API_KEY saknas. Lägg in den i .env.local (lokalt) eller i Vercels Environment Variables.',
    })
  }
  if (!apiKey.startsWith('sk-ant-')) {
    return res.status(500).json({
      error:
        'ANTHROPIC_API_KEY ser ut som en platshållare. Byt ut värdet i .env.local mot din riktiga nyckel (börjar med "sk-ant-") och starta om dev-servern.',
    })
  }

  const { task, payload } = req.body || {}
  const buildTask = TASKS[task]
  if (!buildTask) {
    return res.status(400).json({ error: `Okänd task: "${task}".` })
  }

  let spec
  try {
    spec = buildTask(validatePayload(task, payload))
  } catch (err) {
    return res.status(400).json({ error: `Kunde inte bygga prompten: ${err.message}` })
  }

  const dispatcher = getTlsDispatcher()
  const client = new Anthropic({
    apiKey,
    timeout: 45_000,
    maxRetries: 1,
    ...(dispatcher ? { fetchOptions: { dispatcher } } : {}),
  })

  try {
    const response = await client.messages.create({
      model: MODEL,
      max_tokens: spec.maxTokens ?? 2000,
      temperature: spec.temperature ?? 0.4,
      system: spec.system,
      tools: [
        {
          name: spec.toolName,
          description: 'Returnera resultatet strikt enligt detta schema.',
          input_schema: spec.tool,
        },
      ],
      tool_choice: { type: 'tool', name: spec.toolName },
      messages: [{ role: 'user', content: spec.userText }],
    })

    const toolUse = response.content.find((block) => block.type === 'tool_use')
    if (!toolUse) {
      return res.status(502).json({ error: 'Claude returnerade inget strukturerat resultat.' })
    }

    return res.status(200).json({
      result: toolUse.input,
      usage: response.usage,
      model: MODEL,
    })
  } catch (err) {
    const status = err?.status || 500
    const message = err?.error?.error?.message || err?.message || 'Okänt fel mot Claude API.'
    const causeCode = err?.cause?.code
    console.error('[api/claude] error:', status, message, causeCode ? `(cause: ${causeCode})` : '')
    if (status === 429) {
      return res.status(429).json({ error: 'AI-tjänsten är tillfälligt belastad. Försök igen senare.' })
    }
    if (status === 401 || status === 403) {
      return res.status(500).json({ error: 'AI-tjänsten är inte korrekt konfigurerad.' })
    }
    return res.status(502).json({ error: 'AI-tjänsten kunde inte slutföra anropet.' })
  }
}
