'use client'

import AnimatedCard from '@/components/ui/AnimatedCard'
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronRight } from 'lucide-react'
import { colors } from '@/lib/theme'

import type { Work } from '@/types/work'

export default function PortfolioCard({ work, onOpen }: { work: Work; onOpen: (w: Work) => void }) {
  // 팀/솔로 정보만 필터링
  const teamTag = work.tags?.find((tag) => tag === '팀' || tag === '솔로')

  return (
    <AnimatedCard className="group h-full overflow-hidden cursor-pointer" onClick={() => onOpen(work)}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-lg">
          <span className="line-clamp-2">{work.title}</span>
          <ChevronRight className="opacity-0 group-hover:opacity-100 transition flex-shrink-0" />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        {/* 프로젝트 기간 */}
        <p className="text-sm text-white/70 mb-3">{work.status || work.period}</p>
        {/* 간략한 설명 */}
        <p className="text-xs text-white/60 line-clamp-3 mb-3 flex-1">{work.desc}</p>
        {/* 팀/솔로 태그를 설명 밑에 배치 */}
        {teamTag && (
          <div className="mt-auto">
            <Badge
              className="rounded-full text-xs font-semibold px-3 py-1"
              style={{
                background: teamTag === '솔로' ? `${colors.pinkSoft}20` : `${colors.pink}20`,
                borderColor: teamTag === '솔로' ? `${colors.pinkSoft}40` : `${colors.pink}40`,
                color: teamTag === '솔로' ? colors.pinkSoft : colors.pink
              }}
            >
              {teamTag}
            </Badge>
          </div>
        )}
      </CardContent>
    </AnimatedCard>
  )
}
