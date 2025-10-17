'use client'

import { WORKS } from '@/data/works'
import PortfolioCard from './PortfolioCard'
import PortfolioModal from './PortfolioModal'
import FadeIn from '@/components/ui/FadeIn'
import { useOpenWork } from '@/hooks/useOpenWork'

export default function PortfolioGrid() {
  const { open, setOpen } = useOpenWork()

  // 회사별로 프로젝트 그룹화
  const groupedWorks = WORKS.reduce((acc, work) => {
    const company = work.company || '기타'
    if (!acc[company]) {
      acc[company] = []
    }
    acc[company].push(work)
    return acc
  }, {} as Record<string, typeof WORKS>)

  return (
    <>
      <div className="space-y-12">
        {Object.entries(groupedWorks).map(([company, works], companyIndex) => (
          <div key={company}>
            <h3 className="text-2xl font-bold mb-6 text-white/90">{company}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {works.map((work, workIndex) => (
                <FadeIn key={work.title} delay={companyIndex * 0.1 + workIndex * 0.05}>
                  <PortfolioCard work={work} onOpen={setOpen} />
                </FadeIn>
              ))}
            </div>
          </div>
        ))}
      </div>
      {open && <PortfolioModal work={open} onClose={() => setOpen(null)} />}
    </>
  )
}
