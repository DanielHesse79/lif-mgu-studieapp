import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Local API plugin.
 *
 * On Vercel, files in /api run as serverless functions automatically.
 * Locally we don't want to require the Vercel CLI, so this plugin mounts the
 * exact same handler (api/claude.js) as dev-server middleware. The Anthropic
 * API key is read from .env.local into process.env (server-side only — never
 * exposed to the browser because it has no VITE_ prefix).
 */
function localApiPlugin(env) {
  return {
    name: 'local-api',
    configureServer(server) {
      if (env.ANTHROPIC_API_KEY) {
        process.env.ANTHROPIC_API_KEY = env.ANTHROPIC_API_KEY
      }
      server.middlewares.use('/api/claude', async (req, res) => {
        // Adapt the Node res to the small Vercel-like interface our handler uses.
        res.status = (code) => {
          res.statusCode = code
          return res
        }
        res.json = (obj) => {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(obj))
        }

        if (req.method !== 'POST') {
          res.status(405).json({ error: 'Method Not Allowed' })
          return
        }

        let raw = ''
        for await (const chunk of req) {
          raw += chunk
          if (Buffer.byteLength(raw, 'utf8') > 50_000) {
            res.status(413).json({ error: 'Request body är för stor.' })
            return
          }
        }
        try {
          req.body = raw ? JSON.parse(raw) : {}
        } catch {
          res.status(400).json({ error: 'Ogiltig JSON i request body.' })
          return
        }

        try {
          const { default: handler } = await import('./api/claude.js')
          await handler(req, res)
        } catch (err) {
          console.error('[local-api] handler error:', err)
          if (!res.writableEnded) {
            res.status(500).json({ error: String(err?.message || err) })
          }
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  // Load all env vars (including non-VITE_ ones) for the local API middleware.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), localApiPlugin(env)],
    server: {
      port: 5173,
    },
  }
})
