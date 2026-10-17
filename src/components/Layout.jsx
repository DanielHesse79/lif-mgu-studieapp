import { Link, useLocation } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import BrandMark from './BrandMark.jsx'
import Icon from './Icon.jsx'

function StreakBadge() {
  const { streakDisplay } = useApp()
  const active = streakDisplay > 0
  return (
    <div
      title={active ? `${streakDisplay} dagar i rad` : 'Ingen aktiv streak – plugga idag!'}
      className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-semibold transition ${
        active
          ? 'border-orange-500/40 bg-orange-500/10 text-orange-300 shadow-[0_0_18px_-6px_rgba(249,115,22,0.6)]'
          : 'border-border bg-surface-2 text-slate-500'
      }`}
    >
      <Icon name="flame" className={`h-4 w-4 ${active ? 'text-orange-400' : 'text-slate-600'}`} />
      <span>{streakDisplay}</span>
    </div>
  )
}

export default function Layout({ children }) {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className="min-h-screen">
      <header
        className="sticky top-0 z-20 border-b border-border/70 bg-bg/80 backdrop-blur-xl"
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3">
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent/25 to-accent/5 text-accent-soft ring-1 ring-accent/30 transition group-hover:ring-accent/50">
              <BrandMark className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-sm font-extrabold tracking-tight text-white">LIF MGU</span>
              <span className="text-[11px] text-slate-400">Studieapp för informatörer</span>
            </span>
          </Link>
          <div className="flex items-center gap-2">
            {!isHome && (
              <Link to="/" className="btn-ghost gap-1.5 px-3 py-1.5 text-xs">
                <Icon name="layers" className="h-3.5 w-3.5" />
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
