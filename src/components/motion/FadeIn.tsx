import * as React from 'react'
import { motion, type MotionProps } from 'framer-motion'
import { cn } from '../../lib/cn'

export function FadeIn({
  className,
  children,
  ...props
}: MotionProps & { className?: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

