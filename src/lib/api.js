/**
 * Klient mot vår serverless-proxy (/api/claude).
 * Webbläsaren ser aldrig API-nyckeln – den ligger bara på servern.
 */

export class ApiError extends Error {
  constructor(message, status) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

async function callClaude(task, payload) {
  let res
  try {
    res = await fetch('/api/claude', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task, payload }),
    })
  } catch (err) {
    throw new ApiError(
      'Kunde inte nå servern. Kör du appen med "npm run dev" och har en .env.local?',
      0
    )
  }

  let data
  try {
    data = await res.json()
  } catch {
    throw new ApiError('Servern svarade med ogiltigt format.', res.status)
  }

  if (!res.ok) {
    throw new ApiError(data?.error || `Serverfel (${res.status}).`, res.status)
  }
  return data
}

/** Generera en lärtext för en lektion. */
export async function generateLesson({ moduleTitle, topic, lesson, level = 'grund' }) {
  const data = await callClaude('learn', { moduleTitle, topic, lesson, level })
  return {
    content: data.result,
    meta: {
      source: 'ai',
      model: data.model || null,
      generatedAt: new Date().toISOString(),
    },
  }
}

/** Skriv om en lärtext enklare ("simplify") eller mer fördjupat ("deepen"). */
export async function adjustLesson({ moduleTitle, topic, lesson, direction, current }) {
  const data = await callClaude('learn-adjust', {
    moduleTitle,
    topic,
    lesson,
    direction,
    current,
  })
  return {
    content: data.result,
    meta: {
      source: 'ai',
      model: data.model || null,
      generatedAt: new Date().toISOString(),
    },
  }
}
