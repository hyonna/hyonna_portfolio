'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'
import { colors } from '@/lib/theme'

interface ImageModalProps {
  imageUrl: string
  imageTitle: string
  onClose: () => void
}

export default function ImageModal({ imageUrl, imageTitle, onClose }: ImageModalProps) {
  const reduce = useReducedMotion()

  // 모달이 열릴 때 body 스크롤 막기 및 플로팅 버튼 숨기기
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    document.body.classList.add('modal-open')

    // 컴포넌트가 언마운트될 때 스크롤 복원 및 클래스 제거
    return () => {
      document.body.style.overflow = 'unset'
      document.body.classList.remove('modal-open')
    }
  }, [])

  return (
    <div
      className="fixed z-[80] grid place-items-center"
      style={{
        top: 'env(safe-area-inset-top, 0px)',
        right: 'env(safe-area-inset-right, 0px)',
        bottom: 'env(safe-area-inset-bottom, 0px)',
        left: 'env(safe-area-inset-left, 0px)',
        padding: '1rem'
      }}
      role="dialog"
      aria-modal="true"
      onKeyDown={(e) => {
        if (e.key === 'Escape') onClose()
      }}
    >
      {/* 오버레이 */}
      <motion.div
        className="absolute inset-0 bg-black/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
      />

      {/* 이미지 컨테이너 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduce ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-[1] w-full max-w-[90vw] max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 이미지 */}
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={imageUrl}
            alt={imageTitle}
            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            style={{
              boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.5)`
            }}
          />
        </div>

        {/* 이미지 제목 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.2, delay: 0.1 }}
          className="mt-4 px-6 py-3 rounded-lg backdrop-blur-md border"
          style={{
            backgroundColor: `${colors.bg}80`,
            borderColor: colors.border
          }}
        >
          <p className="text-white/90 text-sm font-medium">{imageTitle}</p>
        </motion.div>
      </motion.div>

      {/* 닫기 버튼 */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduce ? 0 : 0.2, delay: 0.1 }}
        onClick={onClose}
        className="fixed z-[90] w-12 h-12 rounded-full border backdrop-blur-md
                   flex items-center justify-center text-lg font-bold
                   hover:scale-105 transition-transform duration-200"
        style={{
          top: 'calc(1.5rem + env(safe-area-inset-top, 0px))',
          right: 'calc(1.5rem + env(safe-area-inset-right, 0px))',
          backgroundColor: colors.pink,
          borderColor: colors.pink,
          color: colors.bg
        }}
        aria-label="이미지 모달 닫기"
      >
        ×
      </motion.button>
    </div>
  )
}
