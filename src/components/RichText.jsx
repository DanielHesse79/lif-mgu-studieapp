/**
 * Minimal markdown-renderare utan beroenden.
 * Stödjer:
 *   - **fetstil**  -> highlightat nyckelbegrepp
 *   - stycken      -> separeras av tomrad
 *   - "- " rader   -> punktlista
 *
 * Bygger riktiga React-noder (inget dangerouslySetInnerHTML).
 */

function renderInline(text, keyPrefix) {
  const nodes = []
  const regex = /\*\*(.+?)\*\*/g
  let lastIndex = 0
  let match
  let i = 0
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index))
    nodes.push(
      <strong
        key={`${keyPrefix}-b${i++}`}
        className="font-semibold text-white bg-accent/15 rounded px-1 ring-1 ring-accent/30"
      >
        {match[1]}
      </strong>
    )
    lastIndex = regex.lastIndex
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex))
  return nodes
}

export default function RichText({ text = '' }) {
  const blocks = text.trim().split(/\n{2,}/)

  return (
    <>
      {blocks.map((block, bi) => {
        const lines = block.split('\n').map((l) => l.trim())
        const listLines = lines.filter((l) => l.startsWith('- '))
        const isList = listLines.length > 0 && listLines.length === lines.filter(Boolean).length

        if (isList) {
          return (
            <ul key={bi} className="my-3 space-y-1.5 pl-1">
              {listLines.map((line, li) => (
                <li key={li} className="flex gap-2 text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-soft" />
                  <span>{renderInline(line.slice(2), `${bi}-${li}`)}</span>
                </li>
              ))}
            </ul>
          )
        }

        return (
          <p key={bi} className="my-3 leading-relaxed text-slate-300">
            {renderInline(block, `${bi}`)}
          </p>
        )
      })}
    </>
  )
}
