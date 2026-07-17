import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useApp } from '../../context/AppContext.jsx'
import { getModule, getTopic } from '../../data/modules'
import { getQuestions } from '../../data/questions/index.js'
import { shuffleOptions } from '../../lib/practice'

const TEXT = { m1: 'text-m1', m2: 'text-m2', m3: 'text-m3' }
const TEST_SIZE = 20

function fmtTime(ms) {
  const s = Math.floor(ms / 1000)
  const m = Math.floor(s / 60)
  return `${m}:${String(s % 60).padStart(2, '0')}`
}

function shuffled(items) {
  const a = [...items]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function buildTest(questions, n) {
  const byTopic = new Map()
  for (const q of questions) {
    const group = byTopic.get(q.topic) || []
    group.push(q)
    byTopic.set(q.topic, group)
  }

  // Ta minst en fråga per ämnesområde när provstorleken tillåter det.
  const selected = []
  for (const group of shuffled([...byTopic.values()])) {
    if (selected.length >= n) break
    selected.push(shuffled(group)[0])
  }

  const selectedIds = new Set(selected.map((q) => q.id))
  const remaining = shuffled(questions.filter((q) => !selectedIds.has(q.id)))
  selected.push(...remaining.slice(0, Math.max(0, n - selected.length)))

  return shuffled(selected).map((q) => {
    const sh = shuffleOptions(q)
    return { q, options: sh.options, answer: sh.answer }
  })
}

export default function Test() {
  const { moduleId } = useParams()
  const mod = getModule(moduleId)
  const { recordTestResult, getTestHistory } = useApp()

  const questions = useMemo(() => getQuestions(moduleId), [moduleId])
  const size = Math.min(TEST_SIZE, questions.length)

  const [phase, setPhase] = useState('intro') // 'intro' | 'running' | 'done'
  const [items, setItems] = useState([]) // [{ q, options, answer }]
  const [answers, setAnswers] = useState([]) // index | null
  const [idx, setIdx] = useState(0)
  const [elapsed, setElapsed] = useState(0)
  const [result, setResult] = useState(null)
  const startRef = useRef(0)

  // Tidtagning medan övningsprovet pågår.
  useEffect(() => {
    if (phase !== 'running') return
    const tick = () => setElapsed(Date.now() - startRef.current)
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [phase])

  if (!mod) return <Navigate to="/" replace />

  if (questions.length === 0) {
    return (
      <div className="animate-fade-in">
        <Link to={`/modul/${moduleId}`} className="text-sm text-slate-400 hover:text-white">
          ‹ Tillbaka till {mod.title}
        </Link>
        <div className="card mt-4 p-8 text-center">
          <h1 className="text-xl font-extrabold text-white">Frågebank saknas</h1>
          <p className="mt-2 text-sm text-slate-400">Den här modulens frågor är inte byggda ännu.</p>
        </div>
      </div>
    )
  }

  function startTest() {
    setItems(buildTest(questions, size))
    setAnswers(Array(size).fill(null))
    setIdx(0)
    setResult(null)
    startRef.current = Date.now()
    setElapsed(0)
    setPhase('running')
  }

  function selectOption(optIdx) {
    setAnswers((prev) => {
      const next = [...prev]
      next[idx] = optIdx
      return next
    })
  }

  function submit() {
    const timeMs = Date.now() - startRef.current
    let correct = 0
    const perTopic = {}
    const wrong = []
    items.forEach((item, i) => {
      const picked = answers[i]
      const isCorrect = picked === item.answer
      if (isCorrect) correct++
      const t = item.q.topic
      if (!perTopic[t]) perTopic[t] = { seen: 0, correct: 0 }
      perTopic[t].seen++
      if (isCorrect) perTopic[t].correct++
      if (!isCorrect) {
        wrong.push({
          q: item.q.q,
          your: picked != null ? item.options[picked] : '(inget svar)',
          correct: item.options[item.answer],
        })
      }
    })
    const res = {
      date: new Date().toISOString(),
      correct,
      total: items.length,
      timeMs,
      perTopic,
      wrong,
    }
    recordTestResult(moduleId, res)
    setResult(res)
    setPhase('done')
  }

  // ---------- INTRO ----------
  if (phase === 'intro') {
    const history = getTestHistory(moduleId)
    const last = history[history.length - 1]
    return (
      <div className="animate-fade-in">
        <Link to={`/modul/${mod.id}`} className="mb-4 inline-block text-sm text-slate-400 hover:text-white">
          ‹ {mod.title}
        </Link>
        <div className="card p-6 text-center sm:p-8">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-surface-2 text-3xl">
            🎯
          </div>
          <h1 className="mt-4 text-xl font-extrabold text-white">Övningsprov</h1>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
            {size} ämnesbalanserade frågor från {mod.title}. Inga förklaringar under provet och ingen
            anpassning. Tiden mäts, men provet har ingen officiell tidsgräns eller godkändgräns.
          </p>
          <p className="mx-auto mt-3 max-w-md text-xs text-amber-300/80">
            Detta är ett fristående övningsprov och efterliknar inte LIF:s officiella tentamen.
          </p>
          {last && (
            <p className="mt-4 text-xs text-slate-500">
              Senaste resultat: {Math.round((last.correct / last.total) * 100)}% ({last.correct}/
              {last.total}) på {fmtTime(last.timeMs)}
            </p>
          )}
          <button onClick={startTest} className="btn-primary mt-6">
            Starta övningsprov
          </button>
        </div>
      </div>
    )
  }

  // ---------- DONE ----------
  if (phase === 'done' && result) {
    const pct = Math.round((result.correct / result.total) * 100)
    const tone = pct >= 80 ? 'text-emerald-400' : pct >= 60 ? 'text-amber-400' : 'text-rose-400'
    const verdict =
      pct >= 80 ? 'Stark nivå' : pct >= 60 ? 'På god väg' : 'Behöver mer övning'
    const topics = Object.entries(result.perTopic)
      .map(([tid, ts]) => ({
        tid,
        title: getTopic(moduleId, tid)?.title || tid,
        ...ts,
        pct: Math.round((ts.correct / ts.seen) * 100),
      }))
      .sort((a, b) => a.pct - b.pct)

    return (
      <div className="animate-fade-in">
        <Link to={`/modul/${mod.id}`} className="mb-4 inline-block text-sm text-slate-400 hover:text-white">
          ‹ {mod.title}
        </Link>

        <div className="card p-6 text-center sm:p-8">
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Resultat</div>
          <div className={`mt-2 text-5xl font-extrabold ${tone}`}>{pct}%</div>
          <p className="mt-1 text-sm text-slate-300">
            {result.correct} av {result.total} rätt · {verdict}
          </p>
          <p className="mt-1 text-xs text-slate-500">Tid: {fmtTime(result.timeMs)}</p>
        </div>

        {/* Svaghetsprofil */}
        <section className="card mt-4 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Svaghetsprofil
          </h2>
          <p className="mt-1 text-xs text-slate-500">Träffsäkerhet per ämnesområde i detta prov.</p>
          <div className="mt-3 space-y-2.5">
            {topics.map((t) => (
              <div key={t.tid} className="flex items-center gap-3 text-sm">
                <span className="w-40 shrink-0 truncate text-slate-300">{t.title}</span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-2">
                  <div
                    className={`h-full rounded-full ${t.pct >= 80 ? 'bg-emerald-500' : t.pct >= 60 ? 'bg-amber-500' : 'bg-rose-500'}`}
                    style={{ width: `${t.pct}%` }}
                  />
                </div>
                <span className="w-14 shrink-0 text-right text-xs tabular-nums text-slate-400">
                  {t.correct}/{t.seen}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Genomgång av fel */}
        {result.wrong.length > 0 && (
          <section className="card mt-4 p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Att repetera ({result.wrong.length})
            </h2>
            <ul className="mt-3 space-y-3">
              {result.wrong.map((w, i) => (
                <li key={i} className="border-l-2 border-rose-500/40 pl-3">
                  <div className="text-sm font-medium text-slate-200">{w.q}</div>
                  <div className="mt-1 text-xs text-rose-300/80">Ditt svar: {w.your}</div>
                  <div className="text-xs text-emerald-300/90">Rätt svar: {w.correct}</div>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <button onClick={startTest} className="btn-primary">
            Gör ett nytt övningsprov
          </button>
          <Link to={`/modul/${mod.id}`} className="btn-ghost">
            Tillbaka till modulen
          </Link>
        </div>
      </div>
    )
  }

  // ---------- RUNNING ----------
  const item = items[idx]
  const picked = answers[idx]
  const answeredCount = answers.filter((a) => a != null).length
  const isLast = idx === items.length - 1

  return (
    <div className="animate-fade-in">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="text-sm text-slate-400">
          Fråga {idx + 1}/{items.length}
        </span>
        <div className="flex items-center gap-2 text-xs">
          <span className="rounded-full border border-border bg-surface-2 px-2.5 py-1 font-mono tabular-nums text-slate-300">
            ⏱ {fmtTime(elapsed)}
          </span>
          <span className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-slate-300">
            {answeredCount}/{items.length} besvarade
          </span>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-4 h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
        <div
          className={`h-full rounded-full transition-[width] duration-300 ${mod.color === 'm1' ? 'bg-m1' : mod.color === 'm2' ? 'bg-m2' : 'bg-m3'}`}
          style={{ width: `${((idx + 1) / items.length) * 100}%` }}
        />
      </div>

      <div className="card p-5 sm:p-6">
        <h1 className="text-lg font-bold leading-snug text-white sm:text-xl">{item.q.q}</h1>
        <div className="mt-5 space-y-2.5">
          {item.options.map((opt, i) => {
            const selected = picked === i
            return (
              <button
                key={i}
                onClick={() => selectOption(i)}
                className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition ${
                  selected
                    ? `border-accent bg-accent/15 text-white`
                    : 'border-border bg-surface-2 text-slate-200 hover:border-accent/50 hover:text-white'
                }`}
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md border border-current/30 text-xs font-bold opacity-80">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1">{opt}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <button
          onClick={() => setIdx((i) => Math.max(0, i - 1))}
          disabled={idx === 0}
          className="btn-ghost"
        >
          ‹ Föregående
        </button>
        {isLast ? (
          <button onClick={submit} className="btn-primary">
            Lämna in
          </button>
        ) : (
          <button onClick={() => setIdx((i) => Math.min(items.length - 1, i + 1))} className="btn-primary">
            Nästa ›
          </button>
        )}
      </div>

      {isLast && answeredCount < items.length && (
        <p className="mt-3 text-center text-xs text-amber-400/80">
          {items.length - answeredCount} fråga(or) obesvarade – de räknas som fel om du lämnar in nu.
        </p>
      )}
    </div>
  )
}
