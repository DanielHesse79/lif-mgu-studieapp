import { Link, useLocation } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'

function StreakBadge() {
  const { streakDisplay } = useApp()
  const active = streakDisplay > 0
  return (
    <div
      title={active ? `${streakDisplay} dagar i rad` : 'Ingen aktiv streak – plugga idag!'}
      className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-semibold ${
        active
          ? 'border-orange-500/40 bg-orange-500/10 text-orange-300'
          : 'border-border bg-surface-2 text-slate-400'
      }`}
    >
      <span className={active ? '' : 'grayscale opacity-60'}>🔥</span>
      <span>{streakDisplay}</span>
    </div>
  )
}

export default function Layout({ children }) {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-border bg-bg/85 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent/15 text-lg ring-1 ring-accent/30">
              🧬
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-sm font-extrabold tracking-tight text-white">LIF MGU</span>
              <span className="text-[11px] text-slate-400">Studieapp för informatörer</span>
            </span>
          </Link>
          <div className="flex items-center gap-2">
            {!isHome && (
              <Link to="/" className="btn-ghost px-3 py-1.5 text-xs">
                Översikt
              </Link>
            )}
            <StreakBadge />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 pb-24 pt-6">{children}</main>
    </div>
  )
}
