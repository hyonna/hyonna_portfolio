'use client'

import { Mail, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { colors } from '@/lib/theme'

export default function FloatingActions({ email = 'yha0118@gmail.com' }: { email?: string }) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-3">
      {/* 이메일 보내기 */}
      <motion.a
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        href={`mailto:${email}`}
        aria-label="Send Email"
        title="Send Email"
        className="grid place-items-center h-12 w-12 rounded-full border border-white/10
                   bg-white/10 backdrop-blur hover:bg-white/20
                   shadow-[0_8px_24px_rgba(255,77,154,0.15)]"
        style={{ color: colors.text }}
      >
        <Mail size={18} />
      </motion.a>

      {/* TOP 버튼 (항상 표시) */}
      <motion.button
        type="button"
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        onClick={scrollTop}
        aria-label="Back to top"
        title="Back to top"
        className="grid place-items-center h-12 w-12 rounded-full border border-white/10
                   bg-white/10 backdrop-blur hover:bg-white/20
                   shadow-[0_8px_24px_rgba(255,77,154,0.15)]"
        style={{ color: colors.text }}
      >
        <ArrowUp size={18} />
      </motion.button>
    </div>
  )
}
