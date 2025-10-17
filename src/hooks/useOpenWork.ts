'use client'

import { useState } from 'react'
import type { Work } from '@/types/work'

export function useOpenWork() {
  const [open, setOpen] = useState<Work | null>(null)
  return { open, setOpen }
}
