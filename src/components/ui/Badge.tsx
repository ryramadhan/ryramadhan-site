import * as React from 'react'
import { cn } from '../../lib/cn'

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-[var(--border)]',
        'bg-[rgba(245,245,245,0.03)] px-3 py-1 text-xs font-medium',
        'text-[var(--muted)] transition-colors duration-200',
        'hover:border-[var(--border-strong)] hover:text-[var(--text)]',
        className,
      )}
      {...props}
    />
  )
}

