import test from 'node:test'
import assert from 'node:assert/strict'
import {
  adjustLevel,
  applyAnswer,
  selectNextQuestion,
  shuffleOptions,
} from '../src/lib/practice.js'

test('applyAnswer flyttar rätt svar uppåt och fel svar tillbaka till box 1', () => {
  const afterCorrect = applyAnswer({ box: 2, seen: 3, correct: 2, wrong: 1 }, true)
  assert.deepEqual(afterCorrect, { box: 3, seen: 4, correct: 3, wrong: 1 })

  const afterWrong = applyAnswer(afterCorrect, false)
  assert.deepEqual(afterWrong, { box: 1, seen: 5, correct: 3, wrong: 2 })
})

test('adjustLevel höjer och sänker nivån efter två svar i följd', () => {
  let state = { levelIndex: 0, correctStreak: 0, wrongStreak: 0 }
  state = adjustLevel(state, true)
  assert.equal(state.levelIndex, 0)
  state = adjustLevel(state, true)
  assert.equal(state.levelIndex, 1)

  state = adjustLevel(state, false)
  assert.equal(state.levelIndex, 1)
  state = adjustLevel(state, false)
  assert.equal(state.levelIndex, 0)
})

test('selectNextQuestion respekterar exkluderade frågor', () => {
  const questions = [
    { id: 'q1', difficulty: 'grund' },
    { id: 'q2', difficulty: 'grund' },
  ]
  const selected = selectNextQuestion(questions, {}, { excludeIds: new Set(['q1']) })
  assert.equal(selected.id, 'q2')
  assert.equal(selectNextQuestion(questions, {}, { excludeIds: new Set(['q1', 'q2']) }), null)
})

test('shuffleOptions bevarar vilket svar som är korrekt', () => {
  const question = { options: ['fel 1', 'rätt', 'fel 2', 'fel 3'], answer: 1 }
  for (let i = 0; i < 20; i++) {
    const shuffled = shuffleOptions(question)
    assert.equal(shuffled.options[shuffled.answer], 'rätt')
    assert.deepEqual([...shuffled.options].sort(), [...question.options].sort())
  }
})
