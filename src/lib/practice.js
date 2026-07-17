/**
 * Logik för Öva-läget: adaptiv svårighet + viktad repetition.
 *
 * Rena funktioner (inga sidoeffekter) så de är lätta att resonera om och testa.
 * Persistent per-fråga-statistik (Leitner-box) lagras i AppContext/localStorage.
 */

export const DIFFICULTY_ORDER = ['grund', 'intermediar', 'avancerad']

export const DIFFICULTY_LABEL = {
  grund: 'Grundläggande',
  intermediar: 'Intermediär',
  avancerad: 'Avancerad',
}

// --- Per-fråga-statistik (viktad repetition) ---

export function newStat() {
  return { box: 1, seen: 0, correct: 0, wrong: 0 }
}

/**
 * Uppdatera en frågas statistik efter ett svar.
 * Rätt svar flyttar upp en box (max 5, ses mer sällan).
 * Fel svar nollställer till box 1 (ses ofta tills den sitter).
 */
export function applyAnswer(stat, isCorrect) {
  const s = stat || newStat()
  return {
    box: isCorrect ? Math.min(s.box + 1, 5) : 1,
    seen: s.seen + 1,
    correct: s.correct + (isCorrect ? 1 : 0),
    wrong: s.wrong + (isCorrect ? 0 : 1),
  }
}

// Lägre box = mer "skyldig" att repeteras = högre vikt. Osedd fråga väger tungt.
const BOX_WEIGHT = { 0: 6, 1: 6, 2: 4, 3: 2.5, 4: 1.5, 5: 1 }
// Vikt beroende på avstånd från aktuell svårighetsnivå.
const DISTANCE_WEIGHT = [1, 0.4, 0.12]

/**
 * Välj nästa fråga viktat efter repetitionsbox och hur nära frågans
 * svårighet ligger den aktuella nivån.
 *
 * excludeIds (Set) utesluter frågor helt – används för att slippa upprepningar
 * inom ett pass och för att prioritera osedda frågor. Returnerar null om alla
 * frågor är uteslutna (anroparen får då avgöra vad som händer).
 */
export function selectNextQuestion(questions, stats, { levelIndex = 0, excludeIds, lastQuestionId } = {}) {
  if (!questions || questions.length === 0) return null
  const exclude = excludeIds || EMPTY_SET
  const pool = questions.filter((q) => !exclude.has(q.id))
  if (pool.length === 0) return null

  const scored = pool.map((q) => {
    const stat = stats?.[q.id]
    const box = stat ? stat.box : 0
    const boxW = BOX_WEIGHT[box] ?? 1
    const qLevel = DIFFICULTY_ORDER.indexOf(q.difficulty)
    const dist = Math.abs(qLevel - levelIndex)
    const distW = DISTANCE_WEIGHT[dist] ?? 0.05
    let weight = boxW * distW
    if (q.id === lastQuestionId) weight *= 0.001 // undvik direkt repris
    return { q, weight }
  })

  const total = scored.reduce((sum, s) => sum + s.weight, 0)
  if (total <= 0) return pool[Math.floor(Math.random() * pool.length)]

  let r = Math.random() * total
  for (const s of scored) {
    r -= s.weight
    if (r <= 0) return s.q
  }
  return scored[scored.length - 1].q
}

const EMPTY_SET = new Set()

// --- Adaptiv svårighet ---

const ESCALATE_AFTER = 2 // rätt i rad innan nivån höjs
const DEESCALATE_AFTER = 2 // fel i rad innan nivån sänks

/**
 * Justera svårighetsnivå utifrån svit av rätt/fel.
 * Returnerar nytt { levelIndex, correctStreak, wrongStreak }.
 */
export function adjustLevel(state, isCorrect) {
  let { levelIndex, correctStreak, wrongStreak } = state
  if (isCorrect) {
    correctStreak += 1
    wrongStreak = 0
    if (correctStreak >= ESCALATE_AFTER && levelIndex < DIFFICULTY_ORDER.length - 1) {
      levelIndex += 1
      correctStreak = 0
    }
  } else {
    wrongStreak += 1
    correctStreak = 0
    if (wrongStreak >= DEESCALATE_AFTER && levelIndex > 0) {
      levelIndex -= 1
      wrongStreak = 0
    }
  }
  return { levelIndex, correctStreak, wrongStreak }
}

// --- Presentation ---

/**
 * Blanda svarsalternativen så att rätt svar inte hamnar på samma plats varje
 * gång. Returnerar { options: string[], answer: number }.
 */
export function shuffleOptions(question) {
  const tagged = question.options.map((text, i) => ({ text, correct: i === question.answer }))
  for (let i = tagged.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[tagged[i], tagged[j]] = [tagged[j], tagged[i]]
  }
  return {
    options: tagged.map((t) => t.text),
    answer: tagged.findIndex((t) => t.correct),
  }
}
