import * as React from 'react'
import { cn } from '../../lib/cn'

type Variant = 'primary' | 'ghost'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
}

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium',
        'transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-0',
        variant === 'primary' && [
          'bg-[rgba(245,245,245,0.08)] text-[var(--text)]',
          'border border-[var(--border)]',
          'hover:bg-[rgba(245,245,245,0.11)] hover:border-[var(--border-strong)]',
        ],
        variant === 'ghost' && [
          'bg-transparent text-[var(--muted)]',
          'hover:text-[var(--text)]',
        ],
        className,
      )}
      {...props}
    />
  )
}

