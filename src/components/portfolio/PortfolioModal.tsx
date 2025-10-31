'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { Work } from '@/types/work'
import { colors } from '@/lib/theme'
import ImageModal from './ImageModal'
import { ExternalLink } from 'lucide-react'

export default function PortfolioModal({ work, onClose }: { work: Work; onClose: () => void }) {
  const reduce = useReducedMotion()
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null)

  // 모달이 열릴 때 body 스크롤 막기 및 플로팅 버튼 숨기기
  useEffect(() => {
    if (work) {
      // 현재 스크롤 위치 저장
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
      // 모달이 열려있을 때 표시하기 위한 클래스 추가
      document.body.classList.add('modal-open')
    }

    // 컴포넌트가 언마운트될 때 스크롤 복원 및 클래스 제거
    return () => {
      if (work) {
        const scrollY = document.body.style.top
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        document.body.style.overflow = ''
        document.body.classList.remove('modal-open')
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }
  }, [work])

  if (!work) return null

  return (
    // 1) fixed + grid로 중앙정렬 (안정적)
    <div
      className="fixed z-[60] grid place-items-center"
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
      {/* 2) 오버레이는 뒤에 깔리고 클릭으로 닫기 */}
      <motion.div
        className="absolute inset-0 bg-black/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
      />

      {/* 3) 중앙 박스: translate 사용 제거, grid 중앙에 둠 */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: reduce ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-[1] w-full max-w-[1100px] overflow-auto
                   rounded-2xl bg-white/5 backdrop-blur-md border border-white/10
                   shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
        style={{ 
          maxHeight: 'calc(100vh - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px) - 2rem)',
          maxWidth: 'calc(min(1100px, 100vw - 2rem - env(safe-area-inset-left, 0px) - env(safe-area-inset-right, 0px)))'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 - 모달 내부 상단 우측 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[10] w-10 h-10 sm:w-12 sm:h-12 rounded-full border backdrop-blur-md
                     flex items-center justify-center text-xl sm:text-2xl font-bold
                     hover:scale-105 transition-transform duration-200"
          style={{
            backgroundColor: colors.pink,
            borderColor: colors.pink,
            color: colors.bg
          }}
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* 프로젝트 태그들 */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6 pr-12 sm:pr-0">
            {work.tags?.map((tag, index) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium"
                style={{
                  backgroundColor:
                    index === 0 ? `${colors.pink}20` : index === 1 ? `${colors.pinkSoft}20` : `${colors.pink}15`,
                  color: index === 0 ? colors.pink : index === 1 ? colors.pinkSoft : colors.pink,
                  border:
                    index === 0
                      ? `1px solid ${colors.pink}30`
                      : index === 1
                      ? `1px solid ${colors.pinkSoft}30`
                      : `1px solid ${colors.pink}25`
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 프로젝트 제목과 링크 버튼 */}
          <div className="flex items-start sm:items-center gap-2 mb-3 sm:mb-4">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight pr-2 sm:pr-0">{work.title}</h3>
            {work.url && (
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-1 rounded-lg hover:bg-white/10 transition-colors duration-200 flex-shrink-0 mt-1 sm:mt-0"
                title="프로젝트 사이트로 이동"
                aria-label="프로젝트 사이트로 이동"
              >
                <ExternalLink size={18} className="sm:w-5 sm:h-5 text-white/70 hover:text-white align-middle" />
              </a>
            )}
          </div>

          {/* 프로젝트 상태 정보 */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-6 sm:mb-8 text-sm sm:text-base text-white/70">
            <span className="font-medium">{work.status || '2025.06 - 진행 중'}</span>
            <span className="hidden sm:inline text-white/50">|</span>
            <span className="font-medium">{work.teamInfo || '1인(솔로)'}</span>
          </div>

          {/* 프로젝트 설명 */}
          <div className="mb-8 sm:mb-10">
            <p className="text-base sm:text-lg text-white/85 leading-relaxed">{work.desc}</p>
          </div>

          {/* 대표 이미지 */}
          {/* <div className="mb-10">
            <div
              className="w-full h-64 rounded-xl border flex items-center justify-center"
              style={{
                backgroundColor: `${colors.bg}60`,
                borderColor: colors.border
              }}
            >
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-lg mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: colors.border }}
                >
                  <div className="w-8 h-8 rounded-full" style={{ backgroundColor: colors.pink }}></div>
                </div>
                <p className="text-white/60 text-sm">프로젝트 대표 이미지</p>
                <p className="text-white/40 text-xs mt-1">이미지를 클릭하여 크게 볼 수 있습니다</p>
              </div>
            </div>
          </div> */}

          {/* 주요 기능 및 특징 */}
          <section className="mb-8 sm:mb-12 pt-6 sm:pt-8" style={{ borderTop: `1px solid ${colors.border}` }}>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-lg sm:text-xl flex-shrink-0"
                style={{ backgroundColor: colors.border }}
              >
                ⭐
              </div>
              <h4 className="text-lg sm:text-xl font-semibold">주요 기능 및 특징</h4>
            </div>
            <div className="pl-0 sm:pl-4">
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-white/85">
                {work.features?.map((feature, index) => {
                  // 빈 줄인 경우 구분선으로 처리
                  if (feature === '') {
                    return <div key={index} className="h-2"></div>
                  }

                  // 섹션 헤더인 경우 (이모지가 포함된 경우)
                  if (feature.match(/^[📋🎯⚙️🏥]/)) {
                    return (
                      <div key={index} className="flex items-center gap-2 sm:gap-3 mb-2 mt-4 sm:mt-6">
                        <span className="text-base sm:text-lg font-semibold text-white/95">{feature}</span>
                      </div>
                    )
                  }

                  // 일반 항목인 경우
                  return (
                    <div key={index} className="flex items-start gap-3 sm:gap-4">
                      <div
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: colors.pink }}
                      ></div>
                      <span className="text-sm sm:text-base leading-relaxed">{feature}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* 사용 기술 및 언어 */}
          <section className="mb-8 sm:mb-12 pt-6 sm:pt-8" style={{ borderTop: `1px solid ${colors.border}` }}>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-lg sm:text-xl flex-shrink-0"
                style={{ backgroundColor: colors.border }}
              >
                🛠️
              </div>
              <h4 className="text-lg sm:text-xl font-semibold">사용 기술 및 언어</h4>
            </div>
            <div className="pl-0 sm:pl-4">
              {work.stackCategories ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {work.stackCategories.map((category, index) => (
                    <div
                      key={index}
                      className="bg-white/5 rounded-lg p-3 sm:p-4 border"
                      style={{ borderColor: colors.border }}
                    >
                      <h5 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-white/90 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ backgroundColor: colors.pink }}></div>
                        {category.category}
                      </h5>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {category.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium"
                            style={{
                              backgroundColor: `${colors.pinkSoft}20`,
                              color: colors.pinkSoft,
                              border: `1px solid ${colors.pinkSoft}30`
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {work.stack?.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border transition-colors duration-200 hover:scale-105"
                      style={{
                        backgroundColor: `${colors.pinkSoft}15`,
                        color: colors.pinkSoft,
                        borderColor: `${colors.pinkSoft}30`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* 작업 기여도 */}
          <section className="mb-8 sm:mb-12 pt-6 sm:pt-8" style={{ borderTop: `1px solid ${colors.border}` }}>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-lg sm:text-xl flex-shrink-0"
                style={{ backgroundColor: colors.border }}
              >
                👨‍💻
              </div>
              <h4 className="text-lg sm:text-xl font-semibold">작업 기여도</h4>
            </div>
            <div className="pl-0 sm:pl-4">
              <p className="text-sm sm:text-base lg:text-lg text-white/85 leading-relaxed">
                {work.contribution || 'Figma 기획/디자인, Supabase 기반 DB 설계 및 구축'}
              </p>
            </div>
          </section>

          {/* 트러블슈팅 */}
          <section className="mb-8 sm:mb-12 pt-6 sm:pt-8" style={{ borderTop: `1px solid ${colors.border}` }}>
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-lg sm:text-xl flex-shrink-0"
                style={{ backgroundColor: colors.border }}
              >
                🔧
              </div>
              <h4 className="text-lg sm:text-xl font-semibold">Trouble Shooting</h4>
            </div>

            {/* 트러블슈팅 항목들 */}
            <div className="space-y-4 sm:space-y-6">
              {work.troubleshooting?.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border p-4 sm:p-6"
                  style={{
                    backgroundColor: `${colors.bg}30`,
                    borderColor: colors.border
                  }}
                >
                  {/* 제목 */}
                  <div className="flex items-start sm:items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 mt-0.5 sm:mt-0"
                      style={{ backgroundColor: colors.pink }}
                    >
                      {index + 1}
                    </div>
                    <h5 className="text-base sm:text-lg font-semibold text-white/95 leading-relaxed">{item.title}</h5>
                  </div>

                  {/* 문제점, 해결, 회고 카드들 */}
                  <div className="space-y-3 sm:space-y-4">
                    {/* 문제점 */}
                    <div
                      className="p-3 sm:p-4 border-l"
                      style={{
                        backgroundColor: `${colors.pink}10`,
                        borderLeftColor: colors.pink,
                        borderLeftWidth: '1px'
                      }}
                    >
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <span className="text-base sm:text-lg">⚠️</span>
                        <span className="text-xs sm:text-sm font-semibold text-white/90">문제점</span>
                      </div>
                      <p className="text-white/85 text-xs sm:text-sm leading-relaxed ml-5 sm:ml-6">{item.problem}</p>
                    </div>

                    {/* 해결 */}
                    <div
                      className="p-3 sm:p-4 border-l"
                      style={{
                        backgroundColor: `${colors.pinkSoft}10`,
                        borderLeftColor: colors.pinkSoft,
                        borderLeftWidth: '1px'
                      }}
                    >
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <span className="text-base sm:text-lg">✅</span>
                        <span className="text-xs sm:text-sm font-semibold text-white/90">해결 방법</span>
                      </div>
                      <p className="text-white/85 text-xs sm:text-sm leading-relaxed ml-5 sm:ml-6">{item.solution}</p>
                    </div>

                    {/* 회고 */}
                    <div
                      className="p-3 sm:p-4 border-l"
                      style={{
                        backgroundColor: `${colors.pink}08`,
                        borderLeftColor: colors.pink,
                        borderLeftWidth: '1px'
                      }}
                    >
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <span className="text-base sm:text-lg">💡</span>
                        <span className="text-xs sm:text-sm font-semibold text-white/90">회고 및 학습</span>
                      </div>
                      <p className="text-white/85 text-xs sm:text-sm leading-relaxed ml-5 sm:ml-6">{item.reflection}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 작업 화면 */}
          {/* <section className="mb-8" style={{ borderTop: `1px solid ${colors.border}`, paddingTop: '2rem' }}>
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ backgroundColor: colors.border }}
              >
                📱
              </div>
              <h4 className="text-xl font-semibold">작업 화면</h4>
            </div>
            <div className="pl-4">
              <p className="text-base text-white/70 mb-6">
                이미지 클릭 시 크게 볼 수 있으며, 작업화면이 현재와 다를 수 있습니다.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-center">
                  <div
                    className="w-full h-64 rounded-lg flex items-center justify-center mb-2 border cursor-pointer
                               hover:scale-105 transition-transform duration-200"
                    style={{
                      backgroundColor: `${colors.bg}80`,
                      borderColor: colors.border
                    }}
                    onClick={() =>
                      setSelectedImage({
                        url: 'https://picsum.photos/800/600?random=1',
                        title: '리포트 생성 로딩 화면'
                      })
                    }
                  >
                    <img
                      src="https://picsum.photos/400/300?random=1"
                      alt="리포트 생성 로딩 화면"
                      className="w-full h-full object-cover rounded-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent) {
                          parent.innerHTML = '<span class="text-white/40 text-sm">프로젝트 구현 화면</span>'
                        }
                      }}
                    />
                  </div>
                  <p className="text-xs text-white/60">리포트 생성 로딩 화면</p>
                </div>

                <div className="text-center">
                  <div
                    className="w-full h-64 rounded-lg flex flex-col items-center justify-center mb-2 border"
                    style={{
                      backgroundColor: `${colors.bg}40`,
                      borderColor: colors.border
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: colors.border }}
                    >
                      <span className="text-2xl">🔒</span>
                    </div>
                    <p className="text-white/60 text-sm font-medium mb-1">저작권 이슈</p>
                    <p className="text-white/40 text-xs">작업화면을 공개할 수 없습니다</p>
                  </div>
                  <p className="text-xs text-white/50">저작권 이슈가 있는 프로젝트</p>
                </div>

                <div className="text-center">
                  <div
                    className="w-full h-64 rounded-lg flex items-center justify-center mb-2 border cursor-pointer
                               hover:scale-105 transition-transform duration-200"
                    style={{
                      backgroundColor: `${colors.bg}80`,
                      borderColor: colors.border
                    }}
                    onClick={() =>
                      setSelectedImage({
                        url: 'https://picsum.photos/800/600?random=3',
                        title: '당일 습관리포트화면'
                      })
                    }
                  >
                    <img
                      src="https://picsum.photos/400/300?random=3"
                      alt="당일 습관리포트화면"
                      className="w-full h-full object-cover rounded-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent) {
                          parent.innerHTML = '<span class="text-white/40 text-sm">프로젝트 구현 화면</span>'
                        }
                      }}
                    />
                  </div>
                  <p className="text-xs text-white/60">당일 습관리포트화면</p>
                </div>

                <div className="text-center">
                  <div
                    className="w-full h-64 rounded-lg flex items-center justify-center mb-2 border cursor-pointer
                               hover:scale-105 transition-transform duration-200"
                    style={{
                      backgroundColor: `${colors.bg}80`,
                      borderColor: colors.border
                    }}
                    onClick={() =>
                      setSelectedImage({
                        url: 'https://picsum.photos/800/600?random=4',
                        title: '마이페이지-주간화면'
                      })
                    }
                  >
                    <img
                      src="https://picsum.photos/400/300?random=4"
                      alt="마이페이지-주간화면"
                      className="w-full h-full object-cover rounded-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent) {
                          parent.innerHTML = '<span class="text-white/40 text-sm">프로젝트 구현 화면</span>'
                        }
                      }}
                    />
                  </div>
                  <p className="text-xs text-white/60">마이페이지-주간화면</p>
                </div>
              </div>
            </div>
          </section> */}

          {/* 링크 섹션 */}
          <div className="pt-4 sm:pt-6" style={{ borderTop: `1px solid ${colors.border}` }}>
            <h4 className="text-base sm:text-lg font-semibold mb-2">Links</h4>
            {work.url ? (
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-pink-400/50 hover:decoration-pink-400 text-white/80 text-sm sm:text-base break-all"
              >
                {work.url}
              </a>
            ) : (
              <p className="text-white/60 text-xs sm:text-sm">보안 정책상 외부 공개가 제한된 프로젝트입니다.</p>
            )}
          </div>
        </div>
      </motion.div>

      {/* 이미지 모달 */}
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage.url}
          imageTitle={selectedImage.title}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  )
}
