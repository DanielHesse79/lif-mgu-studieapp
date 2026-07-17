/**
 * Samlar frågebankerna per modul. Alla tre moduler är utbyggda (50 frågor styck).
 */
import { M1_QUESTIONS } from './m1.js'
import { M1_QUESTIONS_EXTRA } from './m1-extra.js'
import { M2_QUESTIONS } from './m2.js'
import { M2_QUESTIONS_EXTRA } from './m2-extra.js'
import { M3_QUESTIONS } from './m3.js'
import { M3_QUESTIONS_EXTRA } from './m3-extra.js'

export const QUESTION_BANKS = {
  m1: [...M1_QUESTIONS, ...M1_QUESTIONS_EXTRA],
  m2: [...M2_QUESTIONS, ...M2_QUESTIONS_EXTRA],
  m3: [...M3_QUESTIONS, ...M3_QUESTIONS_EXTRA],
}

export function getQuestions(moduleId) {
  return QUESTION_BANKS[moduleId] || []
}

export function getQuestionsByTopic(moduleId, topicId) {
  return getQuestions(moduleId).filter((q) => q.topic === topicId)
}

export function hasQuestions(moduleId) {
  return getQuestions(moduleId).length > 0
}

/** Räkna frågor per svårighetsnivå (för UI/överblick). */
export function difficultyBreakdown(moduleId) {
  const out = { grund: 0, intermediar: 0, avancerad: 0 }
  for (const q of getQuestions(moduleId)) {
    if (out[q.difficulty] != null) out[q.difficulty]++
  }
  return out
}
