import * as React from 'react'
import { Section } from '../components/layout/Section'
import { Button } from '../components/ui/Button'
import { FadeIn } from '../components/motion/FadeIn'
import { useI18n } from '../i18n/I18nProvider'

export function Contact() {
  const [status, setStatus] = React.useState<'idle' | 'sent'>('idle')
  const { t } = useI18n()
  const portfolio = t.portfolio

  return (
    <Section
      id="contact"
      eyebrow={t.contact.eyebrow}
      title={t.contact.title}
      description={t.contact.description}
    >
      <FadeIn>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[rgba(245,245,245,0.02)] p-5">
            <p className="text-sm font-medium text-[var(--text)]">{t.contact.emailTitle}</p>
            <a
              className="mt-2 inline-block text-sm text-[var(--muted)] underline decoration-[rgba(245,245,245,0.20)] underline-offset-4 transition-colors hover:text-[var(--text)]"
              href={`mailto:${portfolio.email}`}
            >
              {portfolio.email}
            </a>

            <div className="mt-5 space-y-2">
              {portfolio.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-disabled={'disabled' in s ? s.disabled : undefined}
                  className="block text-sm text-[var(--muted)] transition-colors hover:text-[var(--text)]"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <form
            className="rounded-[var(--radius)] border border-[var(--border)] bg-[rgba(245,245,245,0.02)] p-5"
            onSubmit={(e) => {
              e.preventDefault()
              setStatus('sent')
            }}
          >
            <label className="block">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted-2)]">
                {t.contact.messageLabel}
              </span>
              <textarea
                required
                rows={5}
                placeholder={t.contact.messagePlaceholder}
                className="mt-3 w-full resize-none rounded-xl border border-[var(--border)] bg-[rgba(15,15,15,0.4)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[rgba(245,245,245,0.35)] outline-none transition-colors focus:border-[var(--border-strong)]"
              />
            </label>

            <div className="mt-4 flex items-center justify-between gap-3">
              <p className="text-xs text-[var(--muted-2)]">
                {status === 'sent' ? t.contact.helperSent : t.contact.helperIdle}
              </p>
              <Button type="submit">{status === 'sent' ? t.contact.sendSent : t.contact.sendIdle}</Button>
            </div>
          </form>
        </div>
      </FadeIn>
    </Section>
  )
}

