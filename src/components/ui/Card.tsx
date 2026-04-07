import * as React from 'react'
import { cn } from '../../lib/cn'

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-[var(--radius)] border border-[var(--border)] bg-[rgba(245,245,245,0.02)]',
        className,
      )}
      {...props}
    />
  )
}

