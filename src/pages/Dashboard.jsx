import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { MODULES } from '../data/modules'
import ProgressBar from '../components/ProgressBar.jsx'

const RING = {
  m1: 'ring-m1/30',
  m2: 'ring-m2/30',
  m3: 'ring-m3/30',
}
const TEXT = {
  m1: 'text-m1',
  m2: 'text-m2',
  m3: 'text-m3',
}

function ModuleCard({ mod }) {
  const { moduleCoverage, topicCoverage } = useApp()
  const cov = moduleCoverage(mod.id)

  return (
    <Link
      to={`/modul/${mod.id}`}
      className={`card block p-5 transition hover:border-accent/50 ring-1 ${RING[mod.color]}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className={`text-xs font-semibold uppercase tracking-wide ${TEXT[mod.color]}`}>
            Modul {mod.number}
          </div>
          <h3 className="mt-0.5 text-lg font-bold text-white">{mod.title}</h3>
          <p className="mt-0.5 text-sm text-slate-400">{mod.subtitle}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-extrabold text-white">{cov.pct}%</div>
          <div className="text-[11px] text-slate-500">
            {cov.read}/{cov.total} lektioner
          </div>
        </div>
      </div>

      <ProgressBar pct={cov.pct} color={mod.color} className="mt-4" />

      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {mod.topics.map((topic) => {
          const tc = topicCoverage(mod.id, topic.id)
          return (
            <div key={topic.id} className="flex items-center gap-2 text-xs">
              <span className="w-28 shrink-0 truncate text-slate-400">{topic.title}</span>
              <ProgressBar pct={tc.pct} color={mod.color} className="!h-1.5" />
              <span className="w-9 shrink-0 text-right tabular-nums text-slate-500">{tc.pct}%</span>
            </div>
          )
        })}
      </div>
    </Link>
  )
}

export default function Dashboard() {
  const { moduleCoverage, topicCoverage, topicAccuracy, streakDisplay, longestStreak } = useApp()

  const totals = MODULES.reduce(
    (acc, m) => {
      const c = moduleCoverage(m.id)
      acc.read += c.read
      acc.total += c.total
      return acc
    },
    { read: 0, total: 0 }
  )
  const overallPct = totals.total ? Math.round((totals.read / totals.total) * 100) : 0

  // Tidig svaghetsprofil: ämnesområden med lägst täckning (uppdateras med
  // quizresultat (Öva). Övade ämnen rankas på låg träffsäkerhet och hamnar
  // alltid före oövade, som rankas på låg lästäckning.
  const focusAreas = MODULES.flatMap((m) =>
    m.topics.map((t) => {
      const cov = topicCoverage(m.id, t.id)
      const acc = topicAccuracy(m.id, t.id)
      const score = acc.pct != null ? 100 - acc.pct + 100 : 100 - cov.pct
      return { module: m, topic: t, cov, acc, score }
    })
  )
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)

  return (
    <div className="space-y-6 animate-fade-in">
      <section>
        <h1 className="text-2xl font-extrabold tracking-tight text-white">Din studieöversikt</h1>
        <p className="mt-1 text-sm text-slate-400">
          Förbered dig för LIF-auktorisationen, modul för modul.
        </p>
        <p className="mt-2 max-w-2xl text-xs leading-relaxed text-slate-500">
          Fristående studiehjälp, inte officiellt material från Lif eller Läkemedelsakademin.
          Använd aktuella MGU-läsanvisningar och kurslitteratur som huvudkälla.
        </p>
      </section>

      {/* Totalprogress + streak */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="card p-5 sm:col-span-2">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Total täckning
              </div>
              <div className="mt-1 text-3xl font-extrabold text-white">{overallPct}%</div>
            </div>
            <div className="text-right text-sm text-slate-400">
              {totals.read} av {totals.total} lektioner lästa
            </div>
          </div>
          <ProgressBar pct={overallPct} color="accent" className="mt-4" />
        </div>

        <div className="card flex flex-col justify-center p-5">
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Streak</div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-orange-300">{streakDisplay}</span>
            <span className="text-sm text-slate-400">
              {streakDisplay === 1 ? 'dag' : 'dagar'} 🔥
            </span>
          </div>
          <div className="mt-1 text-[11px] text-slate-500">Rekord: {longestStreak} dagar</div>
        </div>
      </section>

      {/* Moduler */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Moduler</h2>
        {MODULES.map((mod) => (
          <ModuleCard key={mod.id} mod={mod} />
        ))}
      </section>

      {/* Fokusförslag / svaghetsprofil */}
      <section className="card p-5">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Fokusförslag
        </h2>
        <p className="mt-1 text-xs text-slate-500">
          Områden att fokusera på: där du svarat sämst i Öva, annars där du läst minst.
        </p>
        <div className="mt-3 space-y-2">
          {focusAreas.map(({ module, topic, cov, acc }) => (
            <Link
              key={`${module.id}-${topic.id}`}
              to={`/modul/${module.id}/lar?amne=${topic.id}`}
              className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface-2 px-3 py-2.5 text-sm transition hover:border-accent/50"
            >
              <div className="min-w-0">
                <div className="truncate font-medium text-slate-200">{topic.title}</div>
                <div className="text-[11px] text-slate-500">
                  Modul {module.number} · {module.title}
                </div>
              </div>
              <span className="shrink-0 text-right text-xs font-semibold tabular-nums text-slate-400">
                {acc.pct != null ? (
                  <>
                    {acc.pct}% rätt
                    <span className="block text-[10px] font-normal text-slate-500">
                      {acc.seen} svar
                    </span>
                  </>
                ) : (
                  <>
                    {cov.pct}% läst
                    <span className="block text-[10px] font-normal text-slate-500">ej övat</span>
                  </>
                )}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
