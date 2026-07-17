import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'

const Dashboard = lazy(() => import('./pages/Dashboard.jsx'))
const ModulePage = lazy(() => import('./pages/Module.jsx'))
const Learn = lazy(() => import('./pages/modes/Learn.jsx'))
const Practice = lazy(() => import('./pages/modes/Practice.jsx'))
const Test = lazy(() => import('./pages/modes/Test.jsx'))

function PageFallback() {
  return (
    <div className="card p-6" role="status" aria-live="polite">
      <div className="skeleton h-6 w-2/3" />
      <div className="skeleton mt-4 h-4 w-full" />
      <div className="skeleton mt-2 h-4 w-5/6" />
      <span className="sr-only">Laddar sidan…</span>
    </div>
  )
}

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/modul/:moduleId" element={<ModulePage />} />
          <Route path="/modul/:moduleId/lar" element={<Learn />} />
          <Route path="/modul/:moduleId/ova" element={<Practice />} />
          <Route path="/modul/:moduleId/testa" element={<Test />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}
