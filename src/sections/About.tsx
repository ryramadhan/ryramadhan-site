import { Section } from '../components/layout/Section'
import { FadeIn } from '../components/motion/FadeIn'
import { useI18n } from '../i18n/I18nProvider'

export function About() {
  const { t } = useI18n()
  const portfolio = t.portfolio

  return (
    <Section id="about" eyebrow={t.about.eyebrow} title={t.about.title}>
      <FadeIn>
        <div className="space-y-8">
          <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
            {portfolio.about}
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {t.about.cards.map((c) => (
              <div
                key={c.title}
                className="rounded-[var(--radius)] border border-[var(--border)] bg-[rgba(245,245,245,0.02)] p-4"
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted-2)]">
                  {c.title}
                </p>
                <p className="mt-2 text-sm text-[var(--muted)] leading-7">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </Section>
  )
}

