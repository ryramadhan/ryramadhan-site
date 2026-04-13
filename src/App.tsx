import './App.css'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'
import { useI18n } from './i18n/I18nProvider'

function App() {
  const { t } = useI18n()

  return (
    <div className="min-h-dvh">
      <Navbar />
      <main>
        <Hero />
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-7">
          <div className="h-px w-full bg-[var(--border)]" />
        </div>
        <About />
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-7">
          <div className="h-px w-full bg-[var(--border)]" />
        </div>
        <Projects />
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-7">
          <div className="h-px w-full bg-[var(--border)]" />
        </div>
        <Contact />
      </main>

      <footer className="py-10">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-7">
          <p className="text-xs text-[var(--muted-2)]">
            © {new Date().getFullYear()} {t.portfolio.name}. {t.footer.builtWith}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
