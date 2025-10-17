'use client'

import { CAREER } from '@/data/career'
import AnimatedCard from '@/components/ui/AnimatedCard'
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import FadeIn from '@/components/ui/FadeIn'
import { Badge } from '@/components/ui/badge'

export default function CareerGrid() {
  return (
    <div className="grid grid-cols-1 gap-6">
      {CAREER.map((c, idx) => (
        <FadeIn key={c.company} delay={idx * 0.05}>
          <AnimatedCard className="h-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-6 p-6">
              {/* 좌측: 기간 및 회사명 */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{c.company}</h3>
                <div className="text-sm text-white/60">{c.period}</div>
                <div className="text-xs text-white/50">
                  {c.team} · {c.position}
                </div>
              </div>

              {/* 우측: 주요 성과 및 태그 */}
              <div className="space-y-4">
                <ul className="space-y-2 text-white/70 text-sm list-disc pl-5">
                  {c.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <Badge
                      key={t}
                      className="rounded-full"
                      style={{ background: '#151519', borderColor: 'rgba(255,255,255,0.08)' }}
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedCard>
        </FadeIn>
      ))}
    </div>
  )
}
