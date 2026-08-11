/**
 * Appens logotyp-emblem: en stiliserad atom – vetenskapligt, tydligt även litet.
 * Ärver currentColor.
 */
export default function BrandMark({ className = 'h-6 w-6' }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="32" cy="32" rx="27" ry="11" />
      <ellipse cx="32" cy="32" rx="27" ry="11" transform="rotate(60 32 32)" />
      <ellipse cx="32" cy="32" rx="27" ry="11" transform="rotate(120 32 32)" />
      <circle cx="32" cy="32" r="5" fill="currentColor" stroke="none" />
    </svg>
  )
}
