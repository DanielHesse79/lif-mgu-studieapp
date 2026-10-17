import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

/**
 * PWA: gör appen installerbar ("Lägg till på hemskärmen") och läsbar offline.
 * Allt innehåll (lektioner, frågor) ligger i JS-bundlen, så när service workern
 * har cachat bygget fungerar plugg och övning utan nät. /api/claude (AI-delen)
 * cachas aldrig och kräver nät.
 */
const pwa = VitePWA({
  registerType: 'autoUpdate',
  injectRegister: 'auto',
  includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
  manifest: {
    name: 'LIF MGU – Studieapp',
    short_name: 'LIF MGU',
    description: 'Studieapp för LIF-auktorisation (läkemedelsinformatör) på MGU-nivå',
    lang: 'sv',
    start_url: './',
    scope: './',
    display: 'standalone',
    background_color: '#080b12',
    theme_color: '#080b12',
    icons: [
      { src: 'pwa-192.png', sizes: '192x192', type: 'image/png' },
      { src: 'pwa-512.png', sizes: '512x512', type: 'image/png' },
      { src: 'pwa-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  },
  workbox: {
    globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
    navigateFallback: 'index.html',
    navigateFallbackDenylist: [/^\/api\//],
    cleanupOutdatedCaches: true,
    runtimeCaching: [
      {
        // Google Fonts: CSS + typsnittsfiler, så Inter finns även offline.
        urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts',
          expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 },
          cacheableResponse: { statuses: [0, 200] },
        },
      },
    ],
  },
})

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
    // Relativa asset-sökvägar så bygget fungerar på GitHub Pages (underkatalog
    // som /repo/) likaväl som på Vercel/rot.
    base: './',
    plugins: [react(), localApiPlugin(env), pwa],
    server: {
      port: 5173,
    },
  }
})
