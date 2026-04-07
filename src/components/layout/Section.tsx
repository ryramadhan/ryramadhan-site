import * as React from 'react'
import { cn } from '../../lib/cn'

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string
  eyebrow?: string
  title: string
  description?: string
  children?: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-28 py-14 sm:py-18">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-7">
        <div className="grid gap-7 sm:gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            {eyebrow ? (
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted-2)]">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[var(--text)] sm:text-3xl">
              {title}
            </h2>
            {description ? (
              <p className="mt-3 max-w-prose text-sm leading-7 text-[var(--muted)]">
                {description}
              </p>
            ) : null}
          </div>
          <div className={cn('md:col-span-8', !children && 'hidden')}>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

