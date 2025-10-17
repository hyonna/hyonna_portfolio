'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'
import type { Work } from '@/types/work'
import { colors } from '@/lib/theme'

export default function PortfolioModal({ work, onClose }: { work: Work; onClose: () => void }) {
  const reduce = useReducedMotion()

  // 모달이 열릴 때 body 스크롤 막기
  useEffect(() => {
    if (work) {
      document.body.style.overflow = 'hidden'
    }

    // 컴포넌트가 언마운트될 때 스크롤 복원
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [work])

  if (!work) return null

  return (
    // 1) fixed + grid로 중앙정렬 (안정적)
    <div
      className="fixed inset-0 z-[60] grid place-items-center p-4"
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
        className="relative z-[1] w-full max-w-[1100px] max-h-[90vh] overflow-auto
                   rounded-2xl bg-white/5 backdrop-blur-md border border-white/10
                   shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 sm:px-8 py-8">
          {/* 프로젝트 태그들 */}
          <div className="flex gap-3 mb-6">
            {work.tags?.map((tag, index) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium"
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

          {/* 프로젝트 제목 */}
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">{work.title}</h3>

          {/* 프로젝트 상태 정보 */}
          <div className="flex items-center gap-6 mb-8 text-base text-white/70">
            <span className="font-medium">{work.status || '2025.06 - 진행 중'}</span>
            <span className="font-medium">{work.teamInfo || '1인(솔로)'}</span>
          </div>

          {/* 프로젝트 설명 */}
          <div className="mb-10">
            <p className="text-lg text-white/85 leading-relaxed">{work.desc}</p>
          </div>

          {/* 대표 이미지 */}
          <div className="mb-10">
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
          </div>

          {/* 주요 기능 및 특징 */}
          <section className="mb-12" style={{ borderTop: `1px solid ${colors.border}`, paddingTop: '2rem' }}>
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ backgroundColor: colors.border }}
              >
                ⭐
              </div>
              <h4 className="text-xl font-semibold">주요 기능 및 특징</h4>
            </div>
            <div className="pl-4">
              <ul className="space-y-4 text-white/85">
                {work.features?.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: colors.pink }}
                    ></div>
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 사용 기술 및 언어 */}
          <section className="mb-12" style={{ borderTop: `1px solid ${colors.border}`, paddingTop: '2rem' }}>
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ backgroundColor: colors.border }}
              >
                🛠️
              </div>
              <h4 className="text-xl font-semibold">사용 기술 및 언어</h4>
            </div>
            <div className="pl-4">
              {work.stackCategories ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {work.stackCategories.map((category, index) => (
                    <div
                      key={index}
                      className="bg-white/5 rounded-lg p-4 border"
                      style={{ borderColor: colors.border }}
                    >
                      <h5 className="text-base font-semibold mb-3 text-white/90 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.pink }}></div>
                        {category.category}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {category.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
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
                <div className="flex flex-wrap gap-3">
                  {work.stack?.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-200 hover:scale-105"
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
          <section className="mb-12" style={{ borderTop: `1px solid ${colors.border}`, paddingTop: '2rem' }}>
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ backgroundColor: colors.border }}
              >
                👨‍💻
              </div>
              <h4 className="text-xl font-semibold">작업 기여도</h4>
            </div>
            <div className="pl-4">
              <p className="text-lg text-white/85 leading-relaxed">
                {work.contribution || 'Figma 기획/디자인, Supabase 기반 DB 설계 및 구축'}
              </p>
            </div>
          </section>

          {/* 트러블슈팅 */}
          <section className="mb-12" style={{ borderTop: `1px solid ${colors.border}`, paddingTop: '2rem' }}>
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ backgroundColor: colors.border }}
              >
                🔧
              </div>
              <h4 className="text-xl font-semibold">Trouble Shooting</h4>
            </div>
            <div className="pl-4">
              {/* 트러블슈팅 항목들 */}
              {work.troubleshooting?.map((item, index) => (
                <div key={index} className="mb-8">
                  <h5 className="text-lg font-medium mb-4 text-white/90">{item.title}</h5>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="text-sm font-medium px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: `${colors.pink}20`,
                            color: colors.pink
                          }}
                        >
                          [문제점]
                        </span>
                      </div>
                      <p className="text-white/85 text-base leading-relaxed pl-2">{item.problem}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="text-sm font-medium px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: `${colors.pinkSoft}20`,
                            color: colors.pinkSoft
                          }}
                        >
                          [해결]
                        </span>
                      </div>
                      <p className="text-white/85 text-base leading-relaxed pl-2">{item.solution}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="text-sm font-medium px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: `${colors.pink}15`,
                            color: colors.pink
                          }}
                        >
                          [회고]
                        </span>
                      </div>
                      <p className="text-white/85 text-base leading-relaxed pl-2">{item.reflection}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 작업 화면 */}
          <section className="mb-8" style={{ borderTop: `1px solid ${colors.border}`, paddingTop: '2rem' }}>
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
              <p className="text-base text-white/70 mb-4">
                이미지 클릭시 크게 볼 수 있습니다. (작업화면이 현재와 다를 수 있습니다.)
              </p>
              <p className="text-sm text-white/50 mb-6">* 저작권 이슈가 있는 경우 첨부하지 않았습니다.</p>

              {/* 작업 화면 그리드 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-center">
                  <div
                    className="w-full h-32 rounded-lg flex items-center justify-center mb-2 border"
                    style={{
                      backgroundColor: `${colors.bg}80`,
                      borderColor: colors.border
                    }}
                  >
                    <span className="text-white/40 text-sm">프로젝트 구현 화면</span>
                  </div>
                  <p className="text-xs text-white/60">리포트 생성 로딩 화면</p>
                </div>
                <div className="text-center">
                  <div
                    className="w-full h-32 rounded-lg flex items-center justify-center mb-2 border"
                    style={{
                      backgroundColor: `${colors.bg}80`,
                      borderColor: colors.border
                    }}
                  >
                    <span className="text-white/40 text-sm">프로젝트 구현 화면</span>
                  </div>
                  <p className="text-xs text-white/60">마이페이지-월간화면</p>
                </div>
                <div className="text-center">
                  <div
                    className="w-full h-32 rounded-lg flex items-center justify-center mb-2 border"
                    style={{
                      backgroundColor: `${colors.bg}80`,
                      borderColor: colors.border
                    }}
                  >
                    <span className="text-white/40 text-sm">프로젝트 구현 화면</span>
                  </div>
                  <p className="text-xs text-white/60">당일 습관리포트화면</p>
                </div>
                <div className="text-center">
                  <div
                    className="w-full h-32 rounded-lg flex items-center justify-center mb-2 border"
                    style={{
                      backgroundColor: `${colors.bg}80`,
                      borderColor: colors.border
                    }}
                  >
                    <span className="text-white/40 text-sm">프로젝트 구현 화면</span>
                  </div>
                  <p className="text-xs text-white/60">마이페이지-주간화면</p>
                </div>
              </div>
            </div>
          </section>

          {/* 링크 섹션 */}
          {work.url && (
            <div className="pt-4" style={{ borderTop: `1px solid ${colors.border}` }}>
              <h4 className="text-lg font-semibold mb-2">Links</h4>
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-pink-400/50 hover:decoration-pink-400 text-white/80"
              >
                Project URL
              </a>
            </div>
          )}
        </div>
      </motion.div>

      {/* 모달 외부 플로팅 X 버튼 */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduce ? 0 : 0.2, delay: 0.1 }}
        onClick={onClose}
        className="fixed top-6 right-6 z-[70] w-12 h-12 rounded-full border backdrop-blur-md
                   flex items-center justify-center text-lg font-bold
                   hover:scale-105 transition-transform duration-200"
        style={{
          backgroundColor: colors.pink,
          borderColor: colors.pink,
          color: colors.bg,
          right: 'calc(50vw - 550px - 60px)' // 모달 너비(1100px)의 절반에서 60px 더 왼쪽
        }}
        aria-label="Close modal"
      >
        ×
      </motion.button>
    </div>
  )
}
