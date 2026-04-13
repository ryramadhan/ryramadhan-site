import * as React from 'react'
import { cn } from '../../lib/cn'
import { useI18n } from '../../i18n/I18nProvider'

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const { locale, setLocale, t } = useI18n()

  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href')
    if (!href?.startsWith('#')) return
    const el = document.querySelector(href)
    if (!(el instanceof HTMLElement)) return
    e.preventDefault()
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-transparent',
        scrolled && 'border-[var(--border)]',
      )}
    >
      <div
        className={cn(
          'bg-[rgba(15,15,15,0.55)] backdrop-blur-md',
          'supports-[backdrop-filter]:bg-[rgba(15,15,15,0.42)]',
        )}
      >
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-4 sm:px-7">
          <a
            href="#home"
            className="text-sm font-semibold tracking-[-0.02em] text-[var(--text)]"
            onClick={onNavClick}
          >
            ryr
            <span className="text-[var(--muted-2)]">.dev</span>
          </a>

          <nav className="hidden items-center gap-6 sm:flex">
            {[
              { label: t.nav.home, href: '#home' },
              { label: t.nav.about, href: '#about' },
              { label: t.nav.projects, href: '#projects' },
              { label: t.nav.contact, href: '#contact' },
            ].map((it) => (
              <a
                key={it.href}
                href={it.href}
                className={cn('group relative text-sm text-[var(--muted)]')}
                onClick={onNavClick}
              >
                <span className="relative">
                  {it.label}
                  <span
                    className={cn(
                      'pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0',
                      'bg-[rgba(245,245,245,0.35)] transition-transform duration-200',
                      'group-hover:scale-x-100',
                    )}
                  />
                </span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label={t.nav.langLabel}
              className={cn(
                'hidden sm:inline-flex items-center rounded-xl border border-[var(--border)] px-2 py-2 text-xs font-medium',
                'text-[var(--muted)] bg-[rgba(245,245,245,0.03)]',
                'transition-colors duration-200 hover:text-[var(--text)] hover:border-[var(--border-strong)]',
              )}
              onClick={() => setLocale(locale === 'en' ? 'id' : 'en')}
            >
              {locale === 'en' ? t.nav.langEn : t.nav.langId}
            </button>
            <a
              href="#contact"
              className={cn(
                'rounded-xl border border-[var(--border)] px-3 py-2 text-sm font-medium',
                'text-[var(--text)] bg-[rgba(245,245,245,0.06)]',
                'transition-colors duration-200 hover:bg-[rgba(245,245,245,0.10)] hover:border-[var(--border-strong)]',
              )}
              onClick={onNavClick}
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

