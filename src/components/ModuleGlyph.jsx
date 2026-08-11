/**
 * Dekorativ, enkel linjeillustration per modul – ger varje modul en visuell
 * identitet utan att ta över. Tonas i modulens färg.
 *   m1 Grundvetenskap → cell (membran, kärna, organeller)
 *   m2 Farmakologi     → kapsel + molekylprickar
 *   m3 Sjukdomslära    → hjärta med pulslinje
 */

const COLOR = { m1: 'text-m1', m2: 'text-m2', m3: 'text-m3' }

function Cell() {
  return (
    <>
      <circle cx="32" cy="32" r="22" fill="currentColor" fillOpacity="0.08" />
      <circle cx="32" cy="32" r="22" />
      <circle cx="37" cy="28" r="8.5" fill="currentColor" fillOpacity="0.12" />
      <circle cx="37" cy="28" r="8.5" />
      <circle cx="38" cy="27" r="2" fill="currentColor" stroke="none" />
      <circle cx="22" cy="40" r="3.2" />
      <path d="M18 24c3-1 6 1 6 4" />
      <circle cx="27" cy="20" r="1.6" fill="currentColor" stroke="none" />
    </>
  )
}

function Capsule() {
  return (
    <>
      <g transform="rotate(38 32 32)">
        <rect x="21" y="8" width="22" height="48" rx="11" fill="currentColor" fillOpacity="0.08" />
        <rect x="21" y="8" width="22" height="48" rx="11" />
        <path d="M21 32h22" />
      </g>
      <circle cx="12" cy="16" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="53" cy="49" r="2.4" fill="currentColor" stroke="none" />
      <path d="M50 12l3 3M53 12l-3 3" />
    </>
  )
}

function HeartPulse() {
  return (
    <>
      <path
        d="M32 52C13 39 13 22 24.5 20c5-1 7.5 3.5 7.5 5 0-1.5 2.5-6 7.5-5C51 22 51 39 32 52Z"
        fill="currentColor"
        fillOpacity="0.09"
      />
      <path d="M32 52C13 39 13 22 24.5 20c5-1 7.5 3.5 7.5 5 0-1.5 2.5-6 7.5-5C51 22 51 39 32 52Z" />
      <path d="M14 33h8l3-7 4 14 3-7h14" strokeWidth="2" />
    </>
  )
}

const SHAPES = { m1: Cell, m2: Capsule, m3: HeartPulse }

export default function ModuleGlyph({ moduleId, className = 'h-16 w-16', strokeWidth = 1.6 }) {
  const Shape = SHAPES[moduleId]
  if (!Shape) return null
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${COLOR[moduleId]} ${className}`}
      aria-hidden="true"
    >
      <Shape />
    </svg>
  )
}
