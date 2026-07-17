/**
 * Samlar de statiska lärtexterna (förbyggda i appen, ingen API/kostnad).
 * Alla tre moduler är utbyggda. Saknas en statisk text faller Lär dig tillbaka
 * på API-generering (om nyckel finns).
 *
 * Grundlektionerna ligger per ämnesområde i m{1,2,3}/<amne>.js och
 * fördjupningslektionerna i m{1,2,3}-extra.js. Nycklarna måste matcha
 * lektions-id:n i modules.js.
 */
import { ANATOMI } from './m1/anatomi.js'
import { CELLBIOLOGI } from './m1/cellbiologi.js'
import { GENETIK } from './m1/genetik.js'
import { FYSIOLOGI } from './m1/fysiologi.js'
import { IMMUNOLOGI } from './m1/immunologi.js'

import { FARMAKOKINETIK } from './m2/farmakokinetik.js'
import { FARMAKODYNAMIK } from './m2/farmakodynamik.js'
import { LAKEMEDELSGRUPPER } from './m2/lakemedelsgrupper.js'
import { SAKERHET } from './m2/sakerhet.js'

import { INTERNMEDICIN } from './m3/internmedicin.js'
import { ONKOLOGI } from './m3/onkologi.js'
import { NEUROLOGI } from './m3/neurologi.js'
import { PSYKIATRI } from './m3/psykiatri.js'
import { INFEKTION } from './m3/infektion.js'

import { M1_LESSONS_EXTRA } from './m1-extra.js'
import { M2_LESSONS_EXTRA } from './m2-extra.js'
import { M3_LESSONS_EXTRA } from './m3-extra.js'

const STATIC_LESSONS = {
  m1: {
    anatomi: ANATOMI,
    cellbiologi: CELLBIOLOGI,
    genetik: GENETIK,
    fysiologi: FYSIOLOGI,
    immunologi: IMMUNOLOGI,
  },
  m2: {
    farmakokinetik: FARMAKOKINETIK,
    farmakodynamik: FARMAKODYNAMIK,
    lakemedelsgrupper: LAKEMEDELSGRUPPER,
    sakerhet: SAKERHET,
  },
  m3: {
    internmedicin: INTERNMEDICIN,
    onkologi: ONKOLOGI,
    neurologi: NEUROLOGI,
    psykiatri: PSYKIATRI,
    infektion: INFEKTION,
  },
}

// Slå ihop fördjupningslektionerna med grundlektionerna, per ämnesområde.
const EXTRA = { m1: M1_LESSONS_EXTRA, m2: M2_LESSONS_EXTRA, m3: M3_LESSONS_EXTRA }
for (const [moduleId, topics] of Object.entries(EXTRA)) {
  for (const [topicId, lessons] of Object.entries(topics || {})) {
    STATIC_LESSONS[moduleId][topicId] = {
      ...(STATIC_LESSONS[moduleId][topicId] || {}),
      ...lessons,
    }
  }
}

/** Hämta en förbyggd lärtext, eller null om den inte finns. */
export function getStaticLesson(moduleId, topicId, lessonId) {
  return STATIC_LESSONS[moduleId]?.[topicId]?.[lessonId] || null
}

/** Antal förbyggda lärtexter i en modul (för översikt). */
export function staticLessonCount(moduleId) {
  const mod = STATIC_LESSONS[moduleId]
  if (!mod) return 0
  return Object.values(mod).reduce((sum, topic) => sum + Object.keys(topic).length, 0)
}
