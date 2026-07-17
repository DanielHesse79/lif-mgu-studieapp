import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useApp } from '../../context/AppContext.jsx'
import { getModule, getTopic } from '../../data/modules'
import { getQuestions } from '../../data/questions/index.js'
import {
  selectNextQuestion,
  shuffleOptions,
  adjustLevel,
  DIFFICULTY_ORDER,
  DIFFICULTY_LABEL,
} from '../../lib/practice'

const TEXT = { m1: 'text-m1', m2: 'text-m2', m3: 'text-m3' }

const DIFF_BADGE = {
  grund: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
  intermediar: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
  avancerad: 'border-rose-500/30 bg-rose-500/10 text-rose-300',
}

export default function Practice() {
  const { moduleId } = useParams()
  const mod = getModule(moduleId)
  const { recordAnswer, getModulePractice } = useApp()

  const questions = useMemo(() => getQuestions(moduleId), [moduleId])
  const roundSize = Math.min(10, questions.length)

  const [session, setSession] = useState(null) // { q, options, answer }
  const [picked, setPicked] = useState(null)
  const [levelState, setLevelState] = useState(() => ({
    levelIndex: getModulePractice(moduleId).level || 0,
    correctStreak: 0,
    wrongStreak: 0,
  }))
  const [questionNo, setQuestionNo] = useState(0) // 1..roundSize, vilken fråga i passet
  const [roundCorrect, setRoundCorrect] = useState(0)
  const [roundNo, setRoundNo] = useState(1)
  const [roundDone, setRoundDone] = useState(false)

  const seenSessionRef = useRef(new Set()) // alla frågor sedda detta pass-session
  const roundIdsRef = useRef([]) // frågor i pågående pass (undvik upprepning i passet)

  function loadNext(levelIndex) {
    const mp = getModulePractice(moduleId)
    const lastId = roundIdsRef.current[roundIdsRef.current.length - 1]
    // 1) Prioritera frågor som inte setts denna session.
    let q = selectNextQuestion(questions, mp.stats, {
      levelIndex,
      excludeIds: seenSessionRef.current,
      lastQuestionId: lastId,
    })
    // 2) Alla sedda -> repetitionsläge: tillåt sedda men ej dem i pågående pass
    //    (lågboxade/felsvarade får högst vikt = återkommer oftast).
    if (!q) {
      q = selectNextQuestion(questions, mp.stats, {
        levelIndex,
        excludeIds: new Set(roundIdsRef.current),
        lastQuestionId: lastId,
      })
    }
    // 3) Sista utväg (mycket liten bank): undvik bara senaste frågan.
    if (!q) {
      q = selectNextQuestion(questions, mp.stats, { levelIndex, lastQuestionId: lastId })
    }
    if (!q) {
      setSession(null)
      return
    }
    seenSessionRef.current.add(q.id)
    roundIdsRef.current.push(q.id)
    const shuffled = shuffleOptions(q)
    setSession({ q, options: shuffled.options, answer: shuffled.answer })
    setPicked(null)
    setQuestionNo(roundIdsRef.current.length)
  }

  // Första passet (idempotent: tål StrictModes dubbla mount-körning i dev).
  useEffect(() => {
    if (questions.length > 0) {
      seenSessionRef.current = new Set()
      roundIdsRef.current = []
      loadNext(levelState.levelIndex)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduleId])

  if (!mod) return <Navigate to="/" replace />

  // Inga frågor i banken ännu (Modul 2/3).
  if (questions.length === 0) {
    return (
      <div className="animate-fade-in">
        <Link to={`/modul/${moduleId}`} className="text-sm text-slate-400 hover:text-white">
          ‹ Tillbaka till {mod.title}
        </Link>
        <div className="card mt-4 p-8 text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-surface-2 text-3xl">
            ✏️
          </div>
          <h1 className="mt-4 text-xl font-extrabold text-white">Frågebank på väg</h1>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
            Frågorna för {mod.title} byggs härnäst. Modul 1 är fullt utbyggd – testa Öva där så länge.
          </p>
          <Link to="/modul/m1/ova" className="btn-primary mt-6">
            Öva Modul 1
          </Link>
        </div>
      </div>
    )
  }

  function startNewRound() {
    roundIdsRef.current = []
    setRoundCorrect(0)
    setRoundNo((n) => n + 1)
    setRoundDone(false)
    setQuestionNo(0)
    loadNext(levelState.levelIndex)
  }

  function handlePick(i) {
    if (picked !== null || !session) return
    setPicked(i)
    const isCorrect = i === session.answer
    const next = adjustLevel(levelState, isCorrect)
    setLevelState(next)
    if (isCorrect) setRoundCorrect((c) => c + 1)
    recordAnswer(moduleId, {
      questionId: session.q.id,
      topicId: session.q.topic,
      isCorrect,
      levelIndex: next.levelIndex,
    })
  }

  function handleNext() {
    if (questionNo >= roundSize) {
      setRoundDone(true)
    } else {
      loadNext(levelState.levelIndex)
    }
  }

  const answered = picked !== null
  const isCorrect = answered && picked === session?.answer
  const currentLevel = DIFFICULTY_LABEL[DIFFICULTY_ORDER[levelState.levelIndex]]
  const topic = session ? getTopic(moduleId, session.q.topic) : null
  const seenCount = seenSessionRef.current.size
  const lastInRound = questionNo >= roundSize

  // ---- Resultat efter avslutat pass ----
  if (roundDone) {
    const pct = roundSize > 0 ? Math.round((roundCorrect / roundSize) * 100) : 0
    const allSeen = seenCount >= questions.length
    return (
      <div className="animate-fade-in">
        <Link to={`/modul/${mod.id}`} className="mb-4 inline-block text-sm text-slate-400 hover:text-white">
          ‹ {mod.title}
        </Link>
        <div className="card p-6 text-center sm:p-8">
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Pass {roundNo} klart
          </div>
          <div className={`mt-2 text-5xl font-extrabold ${pct >= 70 ? 'text-emerald-400' : pct >= 40 ? 'text-amber-400' : 'text-rose-400'}`}>
            {pct}%
          </div>
          <p className="mt-1 text-sm text-slate-300">
            {roundCorrect} av {roundSize} rätt
          </p>
          <div className="mx-auto mt-5 max-w-xs space-y-1.5 text-sm text-slate-400">
            <div className="flex justify-between">
              <span>Nuvarande nivå</span>
              <span className={TEXT[mod.color]}>{currentLevel}</span>
            </div>
            <div className="flex justify-between">
              <span>Frågor sedda</span>
              <span>
                {Math.min(seenCount, questions.length)} av {questions.length}
              </span>
            </div>
          </div>
          {allSeen && (
            <p className="mx-auto mt-4 max-w-sm text-xs text-slate-500">
              Du har sett alla frågor i banken minst en gång. Nu återkommer de du svarat fel på oftare.
            </p>
          )}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button onClick={startNewRound} className="btn-primary">
              Nästa pass →
            </button>
            <Link to={`/modul/${mod.id}`} className="btn-ghost">
              Avsluta
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="animate-fade-in">
      {/* Topprad */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <Link to={`/modul/${mod.id}`} className="text-sm text-slate-400 hover:text-white">
          ‹ {mod.title}
        </Link>
        <div className="flex items-center gap-2 text-xs">
          <span className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-slate-300">
            Nivå: <span className={TEXT[mod.color]}>{currentLevel}</span>
          </span>
          <span className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-slate-300">
            Fråga {questionNo}/{roundSize}
          </span>
        </div>
      </div>

      {/* Passprogress */}
      <div className="mb-4 h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-300"
          style={{ width: `${(questionNo / roundSize) * 100}%` }}
        />
      </div>

      {session && (
        <div className="card p-5 sm:p-6">
          {/* Fråge-metadata */}
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${DIFF_BADGE[session.q.difficulty]}`}
            >
              {DIFFICULTY_LABEL[session.q.difficulty]}
            </span>
            {topic && (
              <span className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-[11px] text-slate-400">
                {topic.title}
              </span>
            )}
          </div>

          <h1 className="text-lg font-bold leading-snug text-white sm:text-xl">{session.q.q}</h1>

          {/* Alternativ */}
          <div className="mt-5 space-y-2.5">
            {session.options.map((opt, i) => {
              let cls =
                'border-border bg-surface-2 text-slate-200 hover:border-accent/50 hover:text-white'
              if (answered) {
                if (i === session.answer) {
                  cls = 'border-emerald-500/50 bg-emerald-500/10 text-emerald-100'
                } else if (i === picked) {
                  cls = 'border-rose-500/50 bg-rose-500/10 text-rose-100'
                } else {
                  cls = 'border-border bg-surface-2 text-slate-500'
                }
              }
              return (
                <button
                  key={i}
                  onClick={() => handlePick(i)}
                  disabled={answered}
                  className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition disabled:cursor-default ${cls}`}
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md border border-current/30 text-xs font-bold opacity-80">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="flex-1">{opt}</span>
                  {answered && i === session.answer && <span>✓</span>}
                  {answered && i === picked && i !== session.answer && <span>✕</span>}
                </button>
              )
            })}
          </div>

          {/* Förklaring efter svar */}
          {answered && (
            <div
              className={`mt-5 rounded-xl border p-4 ${
                isCorrect
                  ? 'border-emerald-500/30 bg-emerald-500/5'
                  : 'border-rose-500/30 bg-rose-500/5'
              }`}
            >
              <div className={`text-sm font-bold ${isCorrect ? 'text-emerald-300' : 'text-rose-300'}`}>
                {isCorrect ? 'Rätt!' : 'Inte riktigt'}
              </div>
              <p className="mt-1 text-sm text-slate-300">{session.q.explanation}</p>
            </div>
          )}

          {/* Nästa / resultat */}
          {answered && (
            <div className="mt-5 flex justify-end">
              <button onClick={handleNext} className="btn-primary">
                {lastInRound ? 'Se resultat →' : 'Nästa fråga →'}
              </button>
            </div>
          )}
        </div>
      )}

      <p className="mt-4 text-center text-xs text-slate-500">
        Ett pass är {roundSize} frågor. Svårigheten anpassas, och frågor du svarar fel på återkommer i
        senare pass.
      </p>
    </div>
  )
}
