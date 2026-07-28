import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { BookOpen, Home, ChevronRight, Sun, Moon } from 'lucide-react'
import { useState, useEffect } from 'react'

export function AppLayout() {
  const navigate = useNavigate()
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className="min-h-screen flex flex-col bg-surface-50 dark:bg-surface-950 text-surface-900 dark:text-surface-50 transition-colors duration-200">
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-primary-700 dark:bg-primary-900 shadow-md border-b border-primary-800 transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white hover:text-primary-100 transition-colors"
            aria-label="Ir para página inicial"
          >
            <div className="w-8 h-8 rounded-lg bg-primary-800 flex items-center justify-center shadow-inner">
              <BookOpen size={16} className="text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">FonoLab</span>
          </button>

          <nav className="ml-4 hidden sm:flex items-center gap-1" aria-label="Navegação principal">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all
                 ${isActive 
                   ? 'bg-primary-800 text-white shadow-sm' 
                   : 'bg-primary-600/60 text-primary-200 hover:bg-primary-600 hover:text-white'}`
              }
            >
              <Home size={14} />
              Início
            </NavLink>
          </nav>

          <div className="ml-auto flex items-center gap-4">
            <span className="text-xs text-primary-200 hidden md:block">
              Plataforma de Aprendizagem em Fonoaudiologia
            </span>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-primary-100 hover:bg-primary-800 hover:text-white transition-colors"
              aria-label="Alternar modo claro/escuro"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Main ───────────────────────────────────────────────────────────── */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
        <Outlet />
      </main>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="border-t border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-900 transition-colors duration-200 py-6">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between text-xs text-surface-400 dark:text-surface-500">
          <span>FonoLab v1.0 — Uso educacional</span>
          <span className="flex items-center gap-1">
            Conteúdo autoral <ChevronRight size={12} /> Fonoaudiologia
          </span>
        </div>
      </footer>
    </div>
  )
}

