import test from 'node:test'
import assert from 'node:assert/strict'
import handler from '../api/claude.js'

function responseMock() {
  return {
    statusCode: 200,
    headers: {},
    body: null,
    setHeader(name, value) {
      this.headers[name] = value
    },
    status(code) {
      this.statusCode = code
      return this
    },
    json(body) {
      this.body = body
      return this
    },
  }
}

test('AI-endpointen avvisar för stora request bodies före API-anrop', async () => {
  const res = responseMock()
  await handler(
    {
      method: 'POST',
      headers: {},
      body: { task: 'learn', payload: { moduleTitle: 'x'.repeat(51_000) } },
      socket: { remoteAddress: 'test-large' },
    },
    res
  )
  assert.equal(res.statusCode, 413)
})

test('AI-endpointen validerar obligatoriska fält', async () => {
  const previousKey = process.env.ANTHROPIC_API_KEY
  process.env.ANTHROPIC_API_KEY = 'sk-ant-test-key'
  try {
    const res = responseMock()
    await handler(
      {
        method: 'POST',
        headers: {},
        body: {
          task: 'learn',
          payload: { moduleTitle: '', topic: 'Farmakologi', lesson: 'ADME' },
        },
        socket: { remoteAddress: 'test-validation' },
      },
      res
    )
    assert.equal(res.statusCode, 400)
    assert.match(res.body.error, /moduleTitle/)
  } finally {
    if (previousKey == null) delete process.env.ANTHROPIC_API_KEY
    else process.env.ANTHROPIC_API_KEY = previousKey
  }
})
