import { Component } from 'react'

/**
 * Fångar renderingsfel så att appen visar ett läsbart, återställbart meddelande
 * i stället för en vit skärm. Knappen rensar appens localStorage-state (en vanlig
 * orsak till krascher är inkompatibel sparad data) och laddar om.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary]', error, info)
  }

  handleReset = () => {
    try {
      Object.keys(localStorage)
        .filter((k) => k.startsWith('lif-mgu:'))
        .forEach((k) => localStorage.removeItem(k))
    } catch {
      /* ignorera */
    }
    window.location.href = '/'
  }

  render() {
    if (!this.state.error) return this.props.children

    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-surface-2 text-3xl">
          ⚠️
        </div>
        <h1 className="mt-4 text-xl font-extrabold text-white">Något gick fel</h1>
        <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
          Ett oväntat fel inträffade i appen. Du kan ladda om sidan. Om felet återkommer kan du
          nollställa appens sparade data nedan.
        </p>
        <pre className="mx-auto mt-4 max-w-md overflow-auto rounded-xl border border-border bg-surface p-3 text-left text-xs text-rose-300">
          {String(this.state.error?.message || this.state.error)}
        </pre>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={() => window.location.reload()} className="btn-ghost">
            Ladda om
          </button>
          <button onClick={this.handleReset} className="btn-primary">
            Nollställ data och starta om
          </button>
        </div>
      </div>
    )
  }
}
