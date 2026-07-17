import { MODULES } from './src/data/modules.js'
import { getStaticLesson } from './src/data/lessons/index.js'
import { getQuestions } from './src/data/questions/index.js'
import { FACT_CHECK_SOURCES } from './src/data/questions/fact-check-sources.js'

const problems = []
const warnings = []
let lessonOk = 0
let lessonMissing = 0
const perModule = {}
const DIFFICULTIES = new Set(['grund', 'intermediar', 'avancerad'])
const allQuestionIds = new Set()

// Absolutord i ett FELAKTIGT alternativ är en klassisk gratispoäng: provvana
// läsare sållar bort dem utan ämneskunskap. Endast "alltid"/"aldrig" räknas –
// "bara", "enbart", "ingen" och "inget" är vanlig svenska och gav förr mest brus.
const ABSOLUTE_CUE = /\b(alltid|aldrig)\b/i

function wordCount(text) {
  return String(text || '')
    .replace(/\*\*/g, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length
}

for (const m of MODULES) {
  perModule[m.id] = { lessons: 0, questions: 0, topics: {}, lessonWords: [] }
  for (const t of m.topics) {
    perModule[m.id].topics[t.id] = t.lessons.length
    perModule[m.id].lessons += t.lessons.length
    const seenIds = new Set()
    for (const l of t.lessons) {
      if (seenIds.has(l.id)) problems.push(`DUBBELT LEKTIONS-ID ${m.id}/${t.id}/${l.id}`)
      seenIds.add(l.id)

      const c = getStaticLesson(m.id, t.id, l.id)
      if (!c) {
        lessonMissing++
        problems.push(`SAKNAD LEKTIONSTEXT ${m.id}/${t.id}/${l.id}`)
        continue
      }
      lessonOk++
      if (!c.title || !c.intro || !Array.isArray(c.sections) || c.sections.length === 0)
        problems.push(`FEL FORM ${m.id}/${t.id}/${l.id}`)
      if (c.title !== l.title) problems.push(`TITEL SKILJER ${m.id}/${t.id}/${l.id}: "${c.title}" != "${l.title}"`)
      if (!Array.isArray(c.keyTerms) || c.keyTerms.length === 0)
        problems.push(`INGA KEYTERMS ${m.id}/${t.id}/${l.id}`)
      if (!Array.isArray(c.takeaways) || c.takeaways.length === 0)
        problems.push(`INGA TAKEAWAYS ${m.id}/${t.id}/${l.id}`)
      if (!c.sections.some((s) => /\*\*.+?\*\*/.test(s.body)))
        problems.push(`INGEN FETSTIL ${m.id}/${t.id}/${l.id}`)
      const words = wordCount([c.intro, ...c.sections.map((s) => s.body)].join(' '))
      perModule[m.id].lessonWords.push(words)
      if (words < 80) warnings.push(`MYCKET KORT LEKTION ${m.id}/${t.id}/${l.id}: ${words} ord`)
    }
  }

  const questions = getQuestions(m.id)
  perModule[m.id].questions = questions.length
  const questionIds = new Set()
  const questionTexts = new Set()
  const topicIds = new Set(m.topics.map((t) => t.id))
  let cueCount = 0
  const cueIds = []
  for (const q of questions) {
    if (!q.id || questionIds.has(q.id)) problems.push(`DUBBELT/SAKNAT FRÅGE-ID ${m.id}/${q.id}`)
    questionIds.add(q.id)
    allQuestionIds.add(q.id)
    const normalized = String(q.q || '').toLowerCase().replace(/\s+/g, ' ').trim()
    if (!normalized || questionTexts.has(normalized)) problems.push(`DUBBEL/SAKNAD FRÅGETEXT ${m.id}/${q.id}`)
    questionTexts.add(normalized)
    if (!topicIds.has(q.topic)) problems.push(`OKÄNT ÄMNE ${m.id}/${q.id}: ${q.topic}`)
    if (!DIFFICULTIES.has(q.difficulty)) problems.push(`OGILTIG SVÅRIGHET ${m.id}/${q.id}`)
    if (!Array.isArray(q.options) || q.options.length < 2) problems.push(`FEL SVARSALTERNATIV ${m.id}/${q.id}`)
    if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= (q.options?.length || 0))
      problems.push(`OGILTIGT FACIT ${m.id}/${q.id}`)
    if (Array.isArray(q.options) && new Set(q.options).size !== q.options.length)
      problems.push(`DUBBLA SVARSALTERNATIV ${m.id}/${q.id}`)
    if (!q.explanation) problems.push(`SAKNAD FÖRKLARING ${m.id}/${q.id}`)
    // Står absolutordet även i RÄTT svar är tricket neutraliserat – flagga inte.
    const cueInCorrect = ABSOLUTE_CUE.test(q.options?.[q.answer] ?? '')
    if (
      !cueInCorrect &&
      q.options?.some((option, index) => index !== q.answer && ABSOLUTE_CUE.test(option))
    ) {
      cueCount++
      cueIds.push(q.id)
    }
  }
  if (cueCount > 0) {
    const shown = cueIds.slice(0, 8).join(', ')
    warnings.push(
      `LEDANDE DISTRAKTORER ${m.id}: ${cueCount}/${questions.length} frågor har "alltid"/"aldrig" i ett felaktigt alternativ (${shown}${cueIds.length > 8 ? ', …' : ''})`
    )
  }
}

for (const [questionId, review] of Object.entries(FACT_CHECK_SOURCES)) {
  if (!allQuestionIds.has(questionId)) problems.push(`FAKTAGRANSKNING SAKNAR FRÅGA ${questionId}`)
  if (!/^\d{4}-\d{2}-\d{2}$/.test(review.reviewedAt || ''))
    problems.push(`OGILTIGT GRANSKNINGSDATUM ${questionId}`)
  if (!Array.isArray(review.sources) || review.sources.length === 0)
    problems.push(`SAKNAD FAKTAKÄLLA ${questionId}`)
  for (const source of review.sources || []) {
    try {
      const url = new URL(source)
      if (url.protocol !== 'https:') problems.push(`OSÄKER FAKTAKÄLLA ${questionId}: ${source}`)
    } catch {
      problems.push(`OGILTIG FAKTAKÄLLA ${questionId}: ${source}`)
    }
  }
}

console.log('=== Lektioner ===')
console.log('OK:', lessonOk, '| Saknade:', lessonMissing)
for (const [mid, r] of Object.entries(perModule)) {
  const avgWords = r.lessonWords.length
    ? Math.round(r.lessonWords.reduce((sum, n) => sum + n, 0) / r.lessonWords.length)
    : 0
  console.log(`${mid}: ${r.lessons} lektioner, ${r.questions} frågor, ${avgWords} ord/lektion  ${JSON.stringify(r.topics)}`)
}
console.log(
  'Totalt lektioner:',
  Object.values(perModule).reduce((s, r) => s + r.lessons, 0),
  '| Totalt frågor:',
  Object.values(perModule).reduce((s, r) => s + r.questions, 0)
)
console.log('Antal problem:', problems.length)
problems.slice(0, 60).forEach((p) => console.log('  -', p))
console.log('Antal varningar:', warnings.length)
warnings.slice(0, 60).forEach((warning) => console.log('  -', warning))
console.log('Faktagranskade frågor med källor:', Object.keys(FACT_CHECK_SOURCES).length)

if (problems.length > 0) process.exitCode = 1
