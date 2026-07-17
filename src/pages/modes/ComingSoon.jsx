import { Link, useParams } from 'react-router-dom'
import { getModule } from '../../data/modules'

export default function ComingSoon({ mode, description }) {
  const { moduleId } = useParams()
  const mod = getModule(moduleId)

  return (
    <div className="animate-fade-in">
      <Link to={`/modul/${moduleId}`} className="text-sm text-slate-400 hover:text-white">
        ‹ Tillbaka till {mod ? mod.title : 'modulen'}
      </Link>

      <div className="card mt-4 p-8 text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-surface-2 text-3xl">
          🚧
        </div>
        <h1 className="mt-4 text-xl font-extrabold text-white">{mode} – kommer snart</h1>
        <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">{description}</p>
        <p className="mx-auto mt-4 max-w-md text-xs text-slate-500">
          Vi bygger appen steg för steg. Just nu är <strong className="text-slate-300">Lär dig</strong>{' '}
          färdigt – nästa steg är frågebank och övningsläge.
        </p>
        <Link to={`/modul/${moduleId}/lar`} className="btn-primary mt-6">
          Gå till Lär dig
        </Link>
      </div>
    </div>
  )
}
