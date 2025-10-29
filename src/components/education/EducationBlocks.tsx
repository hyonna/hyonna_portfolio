'use client'

import { EDUCATION } from '@/data/education'
import AnimatedCard from '@/components/ui/AnimatedCard'
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import FadeIn from '@/components/ui/FadeIn'

export default function EducationBlocks() {
  return (
    <>
      <div className="grid gap-6">
        <FadeIn>
          <AnimatedCard className="h-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">학력</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-2">
              {EDUCATION.schools.map((s) => (
                <div key={s.name} className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-white">{s.name}</h4>
                    <p className="text-sm text-white/70">{s.major}</p>
                  </div>
                  <span className="text-xs text-white/60">{s.period}</span>
                </div>
              ))}
            </CardContent>
          </AnimatedCard>
        </FadeIn>
        <FadeIn delay={0.05}>
          <AnimatedCard className="h-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">교육</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-2">
              {EDUCATION.courses.map((course, index) => (
                <div key={index} className="border rounded-lg p-4" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-medium text-white">{course.title}</h4>
                      <p className="text-sm text-white/70">{course.institution}</p>
                    </div>
                    <span className="text-xs text-white/60 whitespace-nowrap ml-2">{course.period}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </AnimatedCard>
        </FadeIn>
        <FadeIn delay={0.05}>
          <AnimatedCard className="h-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">자격증</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-4 pt-2">
              {EDUCATION.certs.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center justify-between border rounded-xl px-4 py-3"
                  style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  <div>
                    <p className="font-medium">{c.name}</p>
                    <p className="text-xs text-white/60">{c.org}</p>
                  </div>
                  <span className="text-xs text-white/60">{c.year}</span>
                </div>
              ))}
            </CardContent>
          </AnimatedCard>
        </FadeIn>
      </div>
    </>
  )
}
