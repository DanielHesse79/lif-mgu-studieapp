import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams, useSearchParams } from 'react-router-dom'
import { useApp } from '../../context/AppContext.jsx'
import { getModule, lessonKey } from '../../data/modules'
import { generateLesson, adjustLesson } from '../../lib/api'
import { getStaticLesson } from '../../data/lessons/index.js'
import RichText from '../../components/RichText.jsx'
import Icon from '../../components/Icon.jsx'

const LEVEL_LABEL = {
  grund: 'Grundnivå',
  enklare: 'Förenklad',
  fordjupad: 'Fördjupad',
}

const TEXT = { m1: 'text-m1', m2: 'text-m2', m3: 'text-m3' }

/** Platt, ordnad lista av alla lektioner i modulen (för prev/next och navigering). */
function flattenLessons(mod) {
  const out = []
  for (const topic of mod.topics) {
    for (const lesson of topic.lessons) {
      out.push({ topic, lesson })
    }
  }
  return out
}

function LessonNav({ mod, current, onPick, isLessonRead, onClose }) {
  return (
    <nav className="space-y-4">
      {mod.topics.map((topic) => (
        <div key={topic.id}>
          <div className="px-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
            {topic.title}
          </div>
          <ul className="mt-1.5 space-y-1">
            {topic.lessons.map((lesson) => {
              const active = current.topicId === topic.id && current.lessonId === lesson.id
              const read = isLessonRead(lessonKey(mod.id, topic.id, lesson.id))
              return (
                <li key={lesson.id}>
                  <button
                    onClick={() => {
                      onPick(topic.id, lesson.id)
                      onClose?.()
                    }}
                    className={`flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm transition ${
                      active
                        ? 'bg-accent/15 text-white ring-1 ring-accent/40'
                        : 'text-slate-400 hover:bg-surface-2 hover:text-slate-200'
                    }`}
                  >
                    <span
                      className={`grid h-4 w-4 shrink-0 place-items-center rounded-full text-[10px] ${
                        read ? 'bg-emerald-500/20 text-emerald-400' : 'bg-surface-2 text-transparent'
                      }`}
                    >
                      ✓
                    </span>
                    <span className="leading-snug">{lesson.title}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </nav>
  )
}

function LoadingSkeleton() {
  return (
    <div className="space-y-3">
      <div className="skeleton h-7 w-2/3" />
      <div className="skeleton h-4 w-full" />
      <div className="skeleton h-4 w-11/12" />
      <div className="skeleton h-4 w-4/5" />
      <div className="skeleton mt-6 h-5 w-1/3" />
      <div className="skeleton h-4 w-full" />
      <div className="skeleton h-4 w-10/12" />
      <div className="skeleton h-4 w-9/12" />
    </div>
  )
}

export default function Learn() {
  const { moduleId } = useParams()
  const [searchParams] = useSearchParams()
  const mod = getModule(moduleId)
  const {
    isLessonRead,
    markLessonRead,
    getCachedLesson,
    setCachedLesson,
    topicCoverage,
  } = useApp()

  const flat = useMemo(() => (mod ? flattenLessons(mod) : []), [mod])

  // Startval: ?amne=<topicId> -> första lektionen i det ämnet, annars första lektionen.
  const initial = useMemo(() => {
    if (!mod) return null
    const amne = searchParams.get('amne')
    const topic = amne ? mod.topics.find((t) => t.id === amne) : mod.topics[0]
    const t = topic || mod.topics[0]
    return { topicId: t.id, lessonId: t.lessons[0].id }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduleId])

  const [current, setCurrent] = useState(initial)
  const [content, setContent] = useState(null)
  const [contentMeta, setContentMeta] = useState({ source: 'static', model: null })
  const [level, setLevel] = useState('grund')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [adjusting, setAdjusting] = useState(null) // 'simplify' | 'deepen' | null
  const [adjustError, setAdjustError] = useState(null)
  const [navOpen, setNavOpen] = useState(false)
  const reqRef = useRef(0)

  const topic = mod?.topics.find((t) => t.id === current?.topicId)
  const lesson = topic?.lessons.find((l) => l.id === current?.lessonId)
  const key = mod && current ? lessonKey(mod.id, current.topicId, current.lessonId) : null

  // Ladda från cache eller generera när lektionen byts.
  useEffect(() => {
    if (!mod || !current || !lesson || !topic) return
    const myReq = ++reqRef.current
    setError(null)
    setAdjustError(null)

    // 1) Användarens egen (ev. anpassade) version vinner.
    const cached = getCachedLesson(key)
    if (cached) {
      setContent(cached.content)
      setContentMeta({ source: cached.source || 'ai', model: cached.model || null })
      setLevel(cached.level || 'grund')
      setLoading(false)
      return
    }

    // 2) Förbyggd statisk lärtext – direkt, gratis, ingen API.
    const staticContent = getStaticLesson(mod.id, current.topicId, current.lessonId)
    if (staticContent) {
      setContent(staticContent)
      setContentMeta({ source: 'static', model: null })
      setLevel('grund')
      setLoading(false)
      return
    }

    // 3) Sista utväg: generera via API (kräver nyckel + krediter).
    setContent(null)
    setLoading(true)
    generateLesson({
      moduleTitle: mod.title,
      topic: topic.title,
      lesson: lesson.title,
      level: 'grund',
    })
      .then(({ content: result, meta }) => {
        if (myReq !== reqRef.current) return
        setContent(result)
        setContentMeta(meta)
        setLevel('grund')
        setLoading(false)
        setCachedLesson(key, result, 'grund', meta)
      })
      .catch((err) => {
        if (myReq !== reqRef.current) return
        setError(err.message)
        setLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  if (!mod || !current) return <Navigate to="/" replace />

  const flatIndex = flat.findIndex(
    (f) => f.topic.id === current.topicId && f.lesson.id === current.lessonId
  )
  const prev = flatIndex > 0 ? flat[flatIndex - 1] : null
  const next = flatIndex < flat.length - 1 ? flat[flatIndex + 1] : null

  function pick(topicId, lessonId) {
    setCurrent({ topicId, lessonId })
  }

  function retry() {
    // Tvinga omgenerering genom att låtsas att cachen är tom.
    setError(null)
    setLoading(true)
    const myReq = ++reqRef.current
    generateLesson({
      moduleTitle: mod.title,
      topic: topic.title,
      lesson: lesson.title,
      level: 'grund',
    })
      .then(({ content: result, meta }) => {
        if (myReq !== reqRef.current) return
        setContent(result)
        setContentMeta(meta)
        setLevel('grund')
        setLoading(false)
        setCachedLesson(key, result, 'grund', meta)
      })
      .catch((err) => {
        if (myReq !== reqRef.current) return
        setError(err.message)
        setLoading(false)
      })
  }

  async function handleAdjust(direction) {
    if (!content || adjusting) return
    setAdjusting(direction)
    setAdjustError(null)
    try {
      const { content: result, meta } = await adjustLesson({
        moduleTitle: mod.title,
        topic: topic.title,
        lesson: lesson.title,
        direction,
        current: content,
      })
      const newLevel = direction === 'simplify' ? 'enklare' : 'fordjupad'
      setContent(result)
      setContentMeta(meta)
      setLevel(newLevel)
      setCachedLesson(key, result, newLevel, meta)
    } catch (err) {
      setAdjustError(err.message)
    } finally {
      setAdjusting(null)
    }
  }

  const cov = topicCoverage(mod.id, current.topicId)

  return (
    <div className="animate-fade-in">
      {/* Topprad */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <Link to={`/modul/${mod.id}`} className="text-sm text-slate-400 hover:text-white">
          ‹ {mod.title}
        </Link>
        <button onClick={() => setNavOpen((v) => !v)} className="btn-ghost gap-1.5 px-3 py-1.5 text-xs lg:hidden">
          <Icon name={navOpen ? 'close' : 'menu'} className="h-3.5 w-3.5" />
          {navOpen ? 'Stäng' : 'Lektioner'}
        </button>
      </div>

      <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-7">
        {/* Sidonavigering (desktop) */}
        <aside className="hidden lg:block">
          <div className="sticky top-20">
            <LessonNav
              mod={mod}
              current={current}
              onPick={pick}
              isLessonRead={isLessonRead}
            />
          </div>
        </aside>

        {/* Sidonavigering (mobil, hopfällbar) */}
        {navOpen && (
          <div className="mb-5 card p-4 lg:hidden">
            <LessonNav
              mod={mod}
              current={current}
              onPick={pick}
              isLessonRead={isLessonRead}
              onClose={() => setNavOpen(false)}
            />
          </div>
        )}

        {/* Innehåll */}
        <article className="min-w-0">
          <header className="mb-5">
            <div className={`text-xs font-semibold uppercase tracking-wide ${TEXT[mod.color]}`}>
              {topic.title} · {cov.read}/{cov.total} lästa
            </div>
            <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-white">
              {lesson.title}
            </h1>
            {content && !loading && (
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-[11px] font-medium text-slate-400">
                  {LEVEL_LABEL[level] || 'Grundnivå'}
                </span>
                {isLessonRead(key) && (
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
                    Läst ✓
                  </span>
                )}
                {contentMeta.source === 'ai' && (
                  <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-[11px] font-medium text-amber-300">
                    AI-genererad · ej medicinskt granskad
                  </span>
                )}
              </div>
            )}
            {content && !loading && (
              <p className="mt-2 text-xs text-slate-500">
                {contentMeta.source === 'ai'
                  ? 'Använd texten som studiehjälp och kontrollera medicinska uppgifter mot aktuella MGU-läsanvisningar.'
                  : 'Fristående studieöversikt – kontrollera innehållet mot aktuella MGU-läsanvisningar och kurslitteratur.'}
              </p>
            )}
          </header>

          {loading && <LoadingSkeleton />}

          {error && !loading && (
            <div className="card border-rose-500/30 bg-rose-500/5 p-5">
              <div className="font-semibold text-rose-300">Kunde inte generera lärtexten</div>
              <p className="mt-1 text-sm text-slate-400">{error}</p>
              <button onClick={retry} className="btn-primary mt-4">
                Försök igen
              </button>
            </div>
          )}

          {content && !loading && (
            <>
              {content.intro && (
                <p className="mb-5 border-l-2 border-accent/50 pl-4 text-base leading-relaxed text-slate-300">
                  {content.intro}
                </p>
              )}

              {content.sections?.map((section, i) => (
                <section key={i} className="mb-6">
                  <h2 className="mb-1 text-lg font-bold text-white">{section.heading}</h2>
                  <div className="text-[15px]">
                    <RichText text={section.body} />
                  </div>
                </section>
              ))}

              {/* Nyckelbegrepp */}
              {content.keyTerms?.length > 0 && (
                <section className="card mb-6 p-5">
                  <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
                    <Icon name="sparkles" className={`h-4 w-4 ${TEXT[mod.color]}`} />
                    Nyckelbegrepp
                  </h2>
                  <dl className="mt-3 space-y-3">
                    {content.keyTerms.map((kt, i) => (
                      <div key={i}>
                        <dt className="font-semibold text-white">{kt.term}</dt>
                        <dd className="text-sm text-slate-400">{kt.definition}</dd>
                      </div>
                    ))}
                  </dl>
                </section>
              )}

              {/* Takeaways */}
              {content.takeaways?.length > 0 && (
                <section className="card mb-6 border-accent/30 bg-accent/5 p-5">
                  <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent-soft">
                    <Icon name="bulb" className="h-4 w-4" />
                    Att minnas
                  </h2>
                  <ul className="mt-3 space-y-2">
                    {content.takeaways.map((t, i) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-200">
                        <span className="text-accent-soft">▸</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <section className="card mb-6 flex flex-wrap items-center justify-between gap-3 p-4">
                <div>
                  <div className="text-sm font-semibold text-white">
                    {isLessonRead(key) ? 'Lektionen är markerad som läst' : 'Klar med lektionen?'}
                  </div>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Progress uppdateras först när du själv markerar lektionen.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => markLessonRead(key)}
                  disabled={isLessonRead(key)}
                  className={isLessonRead(key) ? 'btn-ghost' : 'btn-primary'}
                >
                  {isLessonRead(key) ? 'Markerad ✓' : 'Markera som läst'}
                </button>
              </section>

              {/* Justera nivå (AI – valfritt, kräver API-krediter) */}
              <section className="mb-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="mr-1 text-sm text-slate-500">Anpassa med AI:</span>
                  <button
                    onClick={() => handleAdjust('simplify')}
                    disabled={Boolean(adjusting)}
                    className="btn-ghost"
                  >
                    {adjusting === 'simplify' ? 'Förenklar…' : 'Förenkla'}
                  </button>
                  <button
                    onClick={() => handleAdjust('deepen')}
                    disabled={Boolean(adjusting)}
                    className="btn-ghost"
                  >
                    {adjusting === 'deepen' ? 'Fördjupar…' : 'Fördjupa'}
                  </button>
                </div>
                {adjustError && (
                  <p className="mt-2 text-xs text-amber-400/80">
                    Kunde inte anpassa just nu (kräver API-krediter). Grundtexten ovan fungerar utan
                    API.
                  </p>
                )}
              </section>
            </>
          )}

          {/* Prev/Next */}
          <nav className="mt-8 flex items-center justify-between gap-3 border-t border-border pt-5">
            {prev ? (
              <button
                onClick={() => pick(prev.topic.id, prev.lesson.id)}
                className="btn-ghost max-w-[48%] flex-col !items-start"
              >
                <span className="text-[10px] uppercase tracking-wide text-slate-500">Föregående</span>
                <span className="truncate text-xs">{prev.lesson.title}</span>
              </button>
            ) : (
              <span />
            )}
            {next ? (
              <button
                onClick={() => pick(next.topic.id, next.lesson.id)}
                className="btn-primary max-w-[48%] flex-col !items-end"
              >
                <span className="text-[10px] uppercase tracking-wide text-white/70">Nästa</span>
                <span className="truncate text-xs">{next.lesson.title}</span>
              </button>
            ) : (
              <span />
            )}
          </nav>
        </article>
      </div>
    </div>
  )
}
