/**
 * Enhetlig ikonuppsättning som inline-SVG (streckbaserad, ärver currentColor).
 * Ersätter emoji för ett mer sammanhållet uttryck. Använd:
 *   <Icon name="book" className="h-5 w-5 text-m1" />
 */

const PATHS = {
  // Lägen
  book: (
    <>
      <path d="M12 6.5C10.5 5.3 8.5 4.7 4.5 4.7v12.6c4 0 6 .6 7.5 1.8 1.5-1.2 3.5-1.8 7.5-1.8V4.7c-4 0-6 .6-7.5 1.8Z" />
      <path d="M12 6.5v12.6" />
    </>
  ),
  pencil: (
    <>
      <path d="M4 20h4L18.5 9.5a2.12 2.12 0 0 0-3-3L5 17v3Z" />
      <path d="M14.5 5.5l3 3" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  // System
  flame: (
    <path d="M12 3c.6 3-1.8 4.2-2.8 5.8C8 10.5 8 12 8 12s-1.4-.6-1.8-2c-1 1.3-1.7 3-1.7 4.6A5.5 5.5 0 0 0 16 17c1.4-2.3 1-5-.7-7.2C13.8 8 12.7 6.3 12 3Z" />
  ),
  check: <path d="M4.5 12.5l5 5 10-11" />,
  chevronRight: <path d="M9 6l6 6-6 6" />,
  arrowRight: (
    <>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </>
  ),
  arrowLeft: (
    <>
      <path d="M20 12H5" />
      <path d="M11 18l-6-6 6-6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 11a8 8 0 0 0-14-4.5L4 8" />
      <path d="M4 4v4h4" />
      <path d="M4 13a8 8 0 0 0 14 4.5L20 16" />
      <path d="M20 20v-4h-4" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V10" />
      <path d="M10 20V4" />
      <path d="M16 20v-8" />
      <path d="M4 20h16" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5Z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6L12 4Z" />
      <path d="M18.5 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.5.4.5.8.5 1.6h6c0-.8 0-1.2.5-1.6A6 6 0 0 0 12 3Z" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12" />
      <path d="M6 18L18 6" />
    </>
  ),
  x: (
    <>
      <path d="M6 6l12 12" />
      <path d="M6 18L18 6" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
}

export default function Icon({ name, className = 'h-5 w-5', strokeWidth = 1.75, ...rest }) {
  const path = PATHS[name]
  if (!path) return null
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {path}
    </svg>
  )
}
