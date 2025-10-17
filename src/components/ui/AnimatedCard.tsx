'use client'

import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'

export default function AnimatedCard({ className = '', children, ...rest }: any) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.995 }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
    >
      <Card
        className={`bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] hover:shadow-[0_12px_40px_rgba(255,77,154,0.15)] rounded-2xl ${className}`}
        {...rest}
      >
        {children}
      </Card>
    </motion.div>
  )
}
