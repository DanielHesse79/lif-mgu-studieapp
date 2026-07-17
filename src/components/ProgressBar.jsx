/**
 * Liten horisontell progressbar. `color` är ett Tailwind-färgnamn (t.ex. "m1").
 */
const FILL = {
  m1: 'bg-m1',
  m2: 'bg-m2',
  m3: 'bg-m3',
  accent: 'bg-accent',
}

export default function ProgressBar({ pct = 0, color = 'accent', className = '' }) {
  return (
    <div className={`h-2 w-full overflow-hidden rounded-full bg-surface-2 ${className}`}>
      <div
        className={`h-full rounded-full transition-[width] duration-500 ${FILL[color] || FILL.accent}`}
        style={{ width: `${Math.max(0, Math.min(100, pct))}%` }}
      />
    </div>
  )
}
