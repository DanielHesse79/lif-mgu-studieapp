import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { load, save, todayStr, daysBetween } from '../lib/storage'
import { MODULES, lessonCount, lessonKey } from '../data/modules'
import { applyAnswer } from '../lib/practice'

const EMPTY_PRACTICE = { stats: {}, topicStats: {}, answered: 0, correct: 0, level: 0 }

const AppContext = createContext(null)

const DEFAULT_STATE = {
  version: 2,
  learnRead: {}, // lessonKey -> { readAt: ISO-sträng }
  practice: {}, // moduleId -> stats (byggs ut i Öva-läget)
  test: {}, // moduleId -> [resultat] (byggs ut i Testa-läget)
  streak: { current: 0, longest: 0, lastActiveDate: null },
}

function loadState() {
  const saved = load('state', {})
  return {
    ...DEFAULT_STATE,
    ...saved,
    version: DEFAULT_STATE.version,
    learnRead: saved.learnRead && typeof saved.learnRead === 'object' ? saved.learnRead : {},
    practice: saved.practice && typeof saved.practice === 'object' ? saved.practice : {},
    test: saved.test && typeof saved.test === 'object' ? saved.test : {},
    streak: {
      ...DEFAULT_STATE.streak,
      ...(saved.streak && typeof saved.streak === 'object' ? saved.streak : {}),
    },
  }
}

export function AppProvider({ children }) {
  const [state, setState] = useState(loadState)
  // Genererat lärinnehåll cachas separat (kan bli stort).
  const [learnCache, setLearnCache] = useState(() => load('learn-cache', {}))

  useEffect(() => {
    save('state', state)
  }, [state])
  useEffect(() => {
    save('learn-cache', learnCache)
  }, [learnCache])

  /** Registrera dagens aktivitet och uppdatera streak. */
  const recordActivity = useCallback(() => {
    setState((prev) => {
      const today = todayStr()
      const last = prev.streak.lastActiveDate
      if (last === today) return prev // redan registrerad idag

      let current
      if (last && daysBetween(last, today) === 1) {
        current = prev.streak.current + 1 // i går -> obruten kedja
      } else {
        current = 1 // första dagen eller bruten kedja
      }
      return {
        ...prev,
        streak: {
          current,
          longest: Math.max(prev.streak.longest, current),
          lastActiveDate: today,
        },
      }
    })
  }, [])

  const markLessonRead = useCallback(
    (key) => {
      setState((prev) => {
        if (prev.learnRead[key]) return prev
        return {
          ...prev,
          learnRead: { ...prev.learnRead, [key]: { readAt: new Date().toISOString() } },
        }
      })
      recordActivity()
    },
    [recordActivity]
  )

  const isLessonRead = useCallback((key) => Boolean(state.learnRead[key]), [state.learnRead])

  /** Täckning för en hel modul: lästa lektioner / totalt. */
  const moduleCoverage = useCallback(
    (moduleId) => {
      const mod = MODULES.find((m) => m.id === moduleId)
      if (!mod) return { read: 0, total: 0, pct: 0 }
      const total = lessonCount(moduleId)
      let read = 0
      for (const topic of mod.topics) {
        for (const lesson of topic.lessons) {
          if (state.learnRead[lessonKey(moduleId, topic.id, lesson.id)]) read++
        }
      }
      return { read, total, pct: total ? Math.round((read / total) * 100) : 0 }
    },
    [state.learnRead]
  )

  /** Täckning för ett enskilt ämnesområde. */
  const topicCoverage = useCallback(
    (moduleId, topicId) => {
      const mod = MODULES.find((m) => m.id === moduleId)
      const topic = mod?.topics.find((t) => t.id === topicId)
      if (!topic) return { read: 0, total: 0, pct: 0 }
      const total = topic.lessons.length
      let read = 0
      for (const lesson of topic.lessons) {
        if (state.learnRead[lessonKey(moduleId, topicId, lesson.id)]) read++
      }
      return { read, total, pct: total ? Math.round((read / total) * 100) : 0 }
    },
    [state.learnRead]
  )

  // --- Öva-läget ---
  const recordAnswer = useCallback(
    (moduleId, { questionId, topicId, isCorrect, levelIndex }) => {
      setState((prev) => {
        const mp = prev.practice[moduleId] || EMPTY_PRACTICE
        const stat = applyAnswer(mp.stats[questionId], isCorrect)
        const ts = mp.topicStats[topicId] || { seen: 0, correct: 0 }
        return {
          ...prev,
          practice: {
            ...prev.practice,
            [moduleId]: {
              ...mp,
              stats: { ...mp.stats, [questionId]: stat },
              topicStats: {
                ...mp.topicStats,
                [topicId]: {
                  seen: ts.seen + 1,
                  correct: ts.correct + (isCorrect ? 1 : 0),
                },
              },
              answered: mp.answered + 1,
              correct: mp.correct + (isCorrect ? 1 : 0),
              level: levelIndex != null ? levelIndex : mp.level,
            },
          },
        }
      })
      recordActivity()
    },
    [recordActivity]
  )

  const getModulePractice = useCallback(
    (moduleId) => state.practice[moduleId] || EMPTY_PRACTICE,
    [state.practice]
  )

  /** Träffsäkerhet per ämnesområde (för svaghetsprofilen). pct är null om inget svarats. */
  const topicAccuracy = useCallback(
    (moduleId, topicId) => {
      const ts = state.practice[moduleId]?.topicStats?.[topicId]
      if (!ts || ts.seen === 0) return { seen: 0, correct: 0, pct: null }
      return { seen: ts.seen, correct: ts.correct, pct: Math.round((ts.correct / ts.seen) * 100) }
    },
    [state.practice]
  )

  // --- Övningsprov ---
  /** Spara ett övningsprovsresultat separat från Öva-lägets statistik. */
  const recordTestResult = useCallback(
    (moduleId, result) => {
      setState((prev) => {
        const history = prev.test[moduleId] || []
        return {
          ...prev,
          test: { ...prev.test, [moduleId]: [...history, result] },
        }
      })
      recordActivity()
    },
    [recordActivity]
  )

  const getTestHistory = useCallback(
    (moduleId) => state.test[moduleId] || [],
    [state.test]
  )

  // --- Lärcache ---
  const getCachedLesson = useCallback((key) => learnCache[key] || null, [learnCache])
  const setCachedLesson = useCallback((key, content, level, meta = {}) => {
    setLearnCache((prev) => ({
      ...prev,
      [key]: {
        content,
        level,
        source: meta.source || 'ai',
        model: meta.model || null,
        generatedAt: meta.generatedAt || new Date().toISOString(),
      },
    }))
  }, [])

  // Streak som ska visas: 0 om kedjan är bruten (missad dag).
  const streakDisplay = useMemo(() => {
    const last = state.streak.lastActiveDate
    if (!last) return 0
    const gap = daysBetween(last, todayStr())
    return gap <= 1 ? state.streak.current : 0
  }, [state.streak])

  const resetProgress = useCallback(() => {
    setState({ ...DEFAULT_STATE })
    setLearnCache({})
  }, [])

  const value = {
    state,
    streakDisplay,
    longestStreak: state.streak.longest,
    recordActivity,
    markLessonRead,
    isLessonRead,
    moduleCoverage,
    topicCoverage,
    recordAnswer,
    getModulePractice,
    topicAccuracy,
    recordTestResult,
    getTestHistory,
    getCachedLesson,
    setCachedLesson,
    resetProgress,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp måste användas inom AppProvider')
  return ctx
}
