import { Section } from '../components/layout/Section'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { FadeIn } from '../components/motion/FadeIn'
import { cn } from '../lib/cn'
import { useI18n } from '../i18n/I18nProvider'

export function Projects() {
  const { t } = useI18n()
  const portfolio = t.portfolio

  return (
    <Section
      id="projects"
      eyebrow={t.projects.eyebrow}
      title={t.projects.title}
      description={t.projects.description}
    >
      <div className="grid gap-4 sm:gap-5">
        {portfolio.projects.map((p) => (
          <FadeIn key={p.title}>
            <Card
              className={cn(
                'p-5 sm:p-6',
                'transition duration-200',
                'hover:scale-[1.02] hover:border-[var(--border-strong)]',
              )}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-semibold tracking-[-0.02em] text-[var(--text)] sm:text-lg">
                      {p.title}
                    </h3>
                    {p.period && (
                      <span className="text-xs text-[var(--muted-2)]">
                        · {p.period}
                      </span>
                    )}
                  </div>
                  {p.organization && (
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {p.organization}
                    </p>
                  )}
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                    {p.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <Badge key={t} className="hover:text-[var(--muted)]">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>

                {p.links?.length ? (
                  <div className="flex shrink-0 flex-wrap gap-2">
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        className={cn(
                          'rounded-xl border border-[var(--border)] px-3 py-2 text-sm font-medium',
                          'text-[var(--muted)] bg-[rgba(245,245,245,0.03)]',
                          'transition-colors duration-200 hover:text-[var(--text)] hover:border-[var(--border-strong)]',
                        )}
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>

              {p.highlights?.length ? (
                <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-[0.45em] h-1 w-1 shrink-0 rounded-full bg-[rgba(245,245,245,0.35)]" />
                      <span className="leading-7">{h}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}

