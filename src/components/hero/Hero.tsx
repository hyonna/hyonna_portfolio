'use client'

import { motion, useAnimationControls, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { colors } from '@/lib/theme'
import { ABOUT } from '@/data/about'
import FadeIn from '@/components/ui/FadeIn'
import { heroParent } from '@/lib/motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const reduce = useReducedMotion()
  const underline = useAnimationControls()
  const { scrollYProgress } = useScroll()

  // 스크롤에 따른 애니메이션 값들
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-0"
      style={{
        paddingTop: 'calc(env(safe-area-inset-top, 0px) + 4rem)',
        paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 4rem)'
      }}
    >
      {/* 배경 그라데이션 */}
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
        <motion.div
          className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[48rem] rounded-full blur-3xl opacity-30"
          style={{ background: `radial-gradient(closest-side, ${colors.pink}, transparent)` }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute -bottom-40 right-1/4 h-96 w-[32rem] rounded-full blur-3xl opacity-20"
          style={{ background: `radial-gradient(closest-side, ${colors.pinkSoft}, transparent)` }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 20, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 h-64 w-64 rounded-full blur-2xl opacity-15"
          style={{ background: `radial-gradient(closest-side, ${colors.pink}, transparent)` }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
        />
      </div>

      {/* 메인 콘텐츠 */}
      <motion.div className="max-w-6xl mx-auto px-4 sm:px-6 text-center w-full" style={{ y, opacity, scale }}>
        <motion.div variants={heroParent} initial={false} animate="visible">
          <FadeIn onMount>
            <motion.h1
              className="text-2xl sm:text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block"
              >
                프론트엔드 개발자{' '}
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: `linear-gradient(90deg, ${colors.pink}, ${colors.pinkSoft})` }}
                >
                  윤현아
                </span>
                입니다
              </motion.span>
            </motion.h1>
          </FadeIn>

          {/* 언더라인 */}
          <motion.div
            initial={false}
            animate={underline}
            onViewportEnter={() => underline.start('visible')}
            variants={{
              hidden: { scaleX: 0 },
              visible: {
                scaleX: 1,
                transition: { duration: reduce ? 0 : 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }
              }
            }}
            style={{
              transformOrigin: 'center',
              backgroundImage: `linear-gradient(90deg, ${colors.pink}, ${colors.pinkSoft})`
            }}
            className="h-[3px] w-32 mx-auto mt-6 sm:mt-8 rounded-full"
          />

          <FadeIn onMount delay={0.4}>
            <motion.p
              className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.0 }}>
                사용자 경험을 중시하고
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mx-1 sm:mx-2"
              >
                디자인 감각과 기술 역량을 갖춘
              </motion.span>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.4 }}>
                개발자입니다.
              </motion.span>
            </motion.p>
          </FadeIn>
        </motion.div>
      </motion.div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          bottom: 'max(6rem, calc(6rem + env(safe-area-inset-bottom, 0px)))'
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white/60"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* 스크롤 진행 바 */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
    </section>
  )
}
