'use client'

import { motion, useAnimationControls, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

type Props = {
  children: React.ReactNode
  delay?: number
  /** 첫 마운트 시 바로 재생 (첫 화면 히어로 등) */
  onMount?: boolean
}

export default function FadeIn({ children, delay = 0, onMount = false }: Props) {
  const controls = useAnimationControls()
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { amount: 0.2, once: true })

  useEffect(() => {
    // SSR과 동일한 마크업으로 시작한 뒤, 클라이언트에서만 'hidden → visible'
    // 한 프레임 뒤에 시작하면 깜빡임 방지됨
    const r = requestAnimationFrame(async () => {
      await controls.set('hidden')
      controls.start('visible')
    })
    return () => cancelAnimationFrame(r)
    // onMount가 true일 때만 마운트 트리거
  }, [controls, onMount])

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [inView, controls])

  return (
    <motion.div
      ref={ref}
      initial={false} // SSR 안전
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 16, filter: 'blur(2px)' },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }
        }
      }}
      // 시각적으로도 첫 프레임 감추기 (SSR과 동일하므로 mismatch 없음)
      className="will-change-transform"
      style={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}
