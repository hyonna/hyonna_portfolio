'use client'

import { useState } from 'react'
import { WORKS } from '@/data/works'
import PortfolioCard from './PortfolioCard'
import PortfolioModal from './PortfolioModal'
import FadeIn from '@/components/ui/FadeIn'
import { useOpenWork } from '@/hooks/useOpenWork'
import { ExternalLink } from 'lucide-react'
import { colors } from '@/lib/theme'

type FilterType = 'all' | 'company' | 'toy'

export default function PortfolioGrid() {
  const { open, setOpen } = useOpenWork()
  const [filter, setFilter] = useState<FilterType>('all')

  // 필터링된 프로젝트 목록
  const filteredWorks = WORKS.filter((work) => {
    if (filter === 'all') return true
    if (filter === 'company') return work.company !== 'Toy Project'
    if (filter === 'toy') return work.company === 'Toy Project'
    return true
  })

  // 회사별로 프로젝트 그룹화
  const groupedWorks = filteredWorks.reduce((acc, work) => {
    const company = work.company || '기타'
    if (!acc[company]) {
      acc[company] = []
    }
    acc[company].push(work)
    return acc
  }, {} as Record<string, typeof WORKS>)

  return (
    <>
      {/* 포트폴리오 타이틀과 필터 버튼들 */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 grid place-items-center rounded-xl" style={{ background: colors.border }}>
            <ExternalLink size={18} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-300">Portfolio</span>
          </h2>
        </div>

        {/* 필터 버튼들 */}
        <div className="flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ease-out transform focus:outline-none focus:ring-0 focus:border-transparent flex-1 sm:flex-none sm:w-32 ${
              filter === 'all'
                ? 'bg-gradient-to-r from-pink-500 to-pink-300 text-black shadow-lg shadow-pink-500/25 scale-105'
                : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white hover:scale-105 border border-white/10 active:scale-95'
            }`}
            style={{ outline: 'none' }}
          >
            전체 프로젝트
          </button>
          <button
            onClick={() => setFilter('company')}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ease-out transform focus:outline-none focus:ring-0 focus:border-transparent flex-1 sm:flex-none sm:w-32 ${
              filter === 'company'
                ? 'bg-gradient-to-r from-pink-500 to-pink-300 text-black shadow-lg shadow-pink-500/25 scale-105'
                : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white hover:scale-105 border border-white/10 active:scale-95'
            }`}
            style={{ outline: 'none' }}
          >
            회사 프로젝트
          </button>
          <button
            onClick={() => setFilter('toy')}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ease-out transform focus:outline-none focus:ring-0 focus:border-transparent flex-1 sm:flex-none sm:w-32 ${
              filter === 'toy'
                ? 'bg-gradient-to-r from-pink-500 to-pink-300 text-black shadow-lg shadow-pink-500/25 scale-105'
                : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white hover:scale-105 border border-white/10 active:scale-95'
            }`}
            style={{ outline: 'none' }}
          >
            Toy Project
          </button>
        </div>
      </div>

      <div className="space-y-12">
        {Object.entries(groupedWorks).map(([company, works], companyIndex) => {
          const isLastCompany = companyIndex === Object.keys(groupedWorks).length - 1
          const isToyProject = company === 'Toy Project'
          const hasCompanyProjects = Object.keys(groupedWorks).some((key) => key !== 'Toy Project')
          const isCompanyProject = company !== 'Toy Project'

          // 회사 프로젝트 그룹의 마지막 회사인지 확인
          const companyProjects = Object.keys(groupedWorks).filter((key) => key !== 'Toy Project')
          const isLastCompanyProject = isCompanyProject && company === companyProjects[companyProjects.length - 1]

          return (
            <div key={company}>
              <h3 className="text-2xl font-bold mb-6 text-white/90">{company}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {works.map((work, workIndex) => (
                  <FadeIn key={work.title} delay={companyIndex * 0.1 + workIndex * 0.05}>
                    <PortfolioCard work={work} onOpen={setOpen} />
                  </FadeIn>
                ))}
              </div>

              {/* 전체 프로젝트 상태에서 회사 프로젝트 그룹의 마지막 회사 다음에만 구분선 추가 */}
              {filter === 'all' && isLastCompanyProject && hasCompanyProjects && (
                <div className="mt-12 mb-8">
                  <hr className="border-white/20" />
                </div>
              )}
            </div>
          )
        })}
      </div>
      {open && <PortfolioModal work={open} onClose={() => setOpen(null)} />}
    </>
  )
}
