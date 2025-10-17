import * as React from 'react'
import { clsx } from 'clsx'

type Variant = 'default' | 'ghost'

export function Button({
  className,
  variant = 'default',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const base = 'inline-flex items-center justify-center rounded-full px-4 py-2 text-sm transition'
  const styles = variant === 'default' ? 'bg-[var(--pink,#ff4d9a)] text-black hover:opacity-90' : 'hover:bg-white/5'
  return <button className={clsx(base, styles, className)} {...props} />
}
