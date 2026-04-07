import { FadeIn } from '../components/motion/FadeIn'
import profileImage from '../assets/hero.png'
import { useI18n } from '../i18n/I18nProvider'

export function Hero() {
  const { t } = useI18n()
  const portfolio = t.portfolio

  return (
    <section id="home" className="flex min-h-[calc(100dvh-80px)] items-center py-14 sm:py-18">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-7">
        <FadeIn>
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <div className="overflow-hidden rounded-sm border border-white/10 bg-neutral-900/40">
                <img
                  src={profileImage}
                  alt={portfolio.name}
                  className="aspect-[4/5] w-full object-cover grayscale contrast-[1.05]"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-center text-[10px] uppercase tracking-[0.2em] text-neutral-600 md:text-left">
                Portrait — monochrome
              </p>
            </div>

            <div className="flex flex-col justify-center md:col-span-7">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted-2)]">
                {portfolio.name}
              </p>
              <div className="mt-3 h-px w-10 bg-[var(--border-strong)]" />
              <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[var(--text)] sm:text-4xl md:text-5xl">
                {portfolio.role}
              </h1>

              <div className="mt-5 max-w-2xl space-y-4">
                <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
                  {portfolio.tagline1}
                </p>
                <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
                  {portfolio.tagline2}
                </p>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a href="#projects" className="rounded-xl border border-[var(--border)] bg-[rgba(245,245,245,0.06)] px-4 py-2 text-sm font-medium text-[var(--text)] transition-colors duration-200 hover:bg-[rgba(245,245,245,0.10)] hover:border-[var(--border-strong)]">
                  {t.hero.ctaPrimary}
                </a>
                <a href="#contact" className="text-sm font-medium text-[var(--muted)] underline decoration-[rgba(245,245,245,0.20)] underline-offset-4 transition-colors hover:text-[var(--text)]">
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

