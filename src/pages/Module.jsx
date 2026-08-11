import { Link, useParams, Navigate } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { getModule } from '../data/modules'
import { hasQuestions } from '../data/questions/index.js'
import ProgressBar from '../components/ProgressBar.jsx'
import ModuleGlyph from '../components/ModuleGlyph.jsx'
import Icon from '../components/Icon.jsx'

const TEXT = { m1: 'text-m1', m2: 'text-m2', m3: 'text-m3' }
const GLYPH_RING = { m1: 'ring-m1/25', m2: 'ring-m2/25', m3: 'ring-m3/25' }

const MODES = [
  {
    key: 'lar',
    title: 'Lär dig',
    desc: 'Korta lärtexter på MGU-nivå med nyckelbegrepp. Be om förenkling eller fördjupning.',
    icon: 'book',
    ready: true,
  },
  {
    key: 'ova',
    title: 'Öva',
    desc: 'Flervalsfrågor som blir svårare ju bättre du svarar. Felaktiga frågor prioriteras vid repetition.',
    icon: 'pencil',
    ready: false,
  },
  {
    key: 'testa',
    title: 'Övningsprov',
    desc: '20 ämnesbalanserade frågor utan hjälpmedel, med tidtagning och resultat per ämne.',
    icon: 'target',
    ready: false,
  },
]

export default function ModulePage() {
  const { moduleId } = useParams()
  const mod = getModule(moduleId)
  const { moduleCoverage, topicCoverage } = useApp()

  if (!mod) return <Navigate to="/" replace />
  const cov = moduleCoverage(mod.id)

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Rubrik */}
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface bg-hero-glow p-6">
        <div className="flex items-start gap-4">
          <span
            className={`grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-surface-2 ring-1 ${GLYPH_RING[mod.color]}`}
          >
            <ModuleGlyph moduleId={mod.id} className="h-11 w-11" />
          </span>
          <div className="min-w-0">
            <div className={`text-xs font-semibold uppercase tracking-wide ${TEXT[mod.color]}`}>
              Modul {mod.number}
            </div>
            <h1 className="mt-0.5 text-2xl font-extrabold tracking-tight text-white">{mod.title}</h1>
            <p className="mt-1 text-sm text-slate-400">{mod.subtitle}</p>
          </div>
        </div>
        <div className="mt-5 flex items-center gap-3">
          <ProgressBar pct={cov.pct} color={mod.color} />
          <span className="shrink-0 text-sm font-semibold text-slate-300">
            {cov.pct}%{' '}
            <span className="text-slate-500">
              ({cov.read}/{cov.total})
            </span>
          </span>
        </div>
      </div>

      {/* Lägen */}
      <section className="grid grid-cols-1 gap-3">
        {MODES.map((m) => {
          const ready = m.key === 'ova' || m.key === 'testa' ? hasQuestions(mod.id) : m.ready
          return ready ? (
            <Link
              key={m.key}
              to={`/modul/${mod.id}/${m.key}`}
              className="card card-interactive group flex items-center gap-4 p-5"
            >
              <span
                className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-surface-2 ring-1 ring-border ${TEXT[mod.color]}`}
              >
                <Icon name={m.icon} className="h-6 w-6" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="font-bold text-white">{m.title}</div>
                <p className="mt-0.5 text-sm text-slate-400">{m.desc}</p>
              </div>
              <Icon
                name="chevronRight"
                className="h-5 w-5 shrink-0 text-slate-600 transition group-hover:translate-x-0.5 group-hover:text-slate-400"
              />
            </Link>
          ) : (
            <div key={m.key} className="card flex items-center gap-4 p-5 opacity-60" aria-disabled="true">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-surface-2 text-slate-500 ring-1 ring-border">
                <Icon name={m.icon} className="h-6 w-6" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white">{m.title}</span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                    <Icon name="lock" className="h-2.5 w-2.5" />
                    Snart
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-slate-400">{m.desc}</p>
              </div>
            </div>
          )
        })}
      </section>

      {/* Ämnesområden */}
      <section className="card p-5">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Ämnesområden
        </h2>
        <div className="mt-3 space-y-2">
          {mod.topics.map((topic) => {
            const tc = topicCoverage(mod.id, topic.id)
            return (
              <Link
                key={topic.id}
                to={`/modul/${mod.id}/lar?amne=${topic.id}`}
                className="group flex items-center gap-3 rounded-xl border border-border bg-surface-2 px-3 py-3 transition hover:border-accent/50 hover:bg-surface-3"
              >
                <span className={`h-9 w-1 shrink-0 rounded-full ${TEXT[mod.color]} bg-current`} />
                <div className="min-w-0 flex-1">
                  <div className="truncate font-medium text-slate-200">{topic.title}</div>
                  <div className="text-[11px] text-slate-500">{topic.blurb}</div>
                </div>
                <div className="w-24 shrink-0">
                  <ProgressBar pct={tc.pct} color={mod.color} className="!h-1.5" />
                </div>
                <span className="w-12 shrink-0 text-right text-xs tabular-nums text-slate-500">
                  {tc.read}/{tc.total}
                </span>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
