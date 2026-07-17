/**
 * Tunt lager ovanpå localStorage med namespace, JSON och felhantering.
 * All persistens i appen går genom dessa funktioner.
 */

const PREFIX = 'lif-mgu:'

export function load(key, fallback) {
  try {
    const raw = localStorage.getItem(PREFIX + key)
    if (raw == null) return fallback
    return JSON.parse(raw)
  } catch (err) {
    console.warn(`[storage] kunde inte läsa "${key}":`, err)
    return fallback
  }
}

export function save(key, value) {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value))
    return true
  } catch (err) {
    console.warn(`[storage] kunde inte spara "${key}":`, err)
    return false
  }
}

export function remove(key) {
  try {
    localStorage.removeItem(PREFIX + key)
  } catch (err) {
    console.warn(`[storage] kunde inte ta bort "${key}":`, err)
  }
}

// --- Datumhjälp för streak ---

/** YYYY-MM-DD i användarens lokala tidszon. */
export function todayStr(date = new Date()) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

/** Antal hela kalenderdagar mellan två YYYY-MM-DD-strängar. */
export function daysBetween(a, b) {
  const da = new Date(a + 'T00:00:00')
  const db = new Date(b + 'T00:00:00')
  return Math.round((db - da) / 86400000)
}
