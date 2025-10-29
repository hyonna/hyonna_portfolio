'use client'

import AnimatedCard from '@/components/ui/AnimatedCard'
import { CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ABOUT } from '@/data/about'
import { Mail, Github, FileText, MapPin, Calendar } from 'lucide-react'
import Image from 'next/image'

export default function AboutCard() {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* 프로필 섹션 */}
      <AnimatedCard className="h-fit">
        <CardContent className="p-8 text-center">
          {/* 프로필 이미지 */}
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-xl"></div>
            <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden">
              <Image
                src="/profile.png"
                alt="Profile Picture"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* 이름과 역할 */}
          <h2 className="text-2xl font-bold text-white mb-2">{ABOUT.name}</h2>
          <p className="text-pink-400 font-medium mb-4">{ABOUT.role}</p>

          {/* 위치와 경력 */}
          <div className="flex items-center justify-center gap-4 text-sm text-white/60 mb-6">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Gimpo, South Korea</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>6년 경력</span>
            </div>
          </div>

          {/* 연락처 버튼들 */}
          <div className="flex gap-2">
            {ABOUT.contacts.map((contact, index) => {
              const renderIcon = () => {
                switch (contact.label) {
                  case 'Email':
                    return <Mail className="w-4 h-4" />
                  case 'GitHub':
                    return <Github className="w-4 h-4" />
                  case 'Resume':
                    return (
                      <svg className="w-4 h-4" viewBox="0 0 50 50" fill="currentColor">
                        <path d="M44.62 13.13c-.23-.21-.52-.33-.83-.33-.02 0-.05.01-.08.01l-29.86 1.92c-.63.04-1.13.58-1.13 1.21v28.75c0 .34.14.65.38.88.25.23.57.35.91.33l29.86-1.93C44.51 43.93 45 43.4 45 42.76V14.02C45 13.68 44.87 13.36 44.62 13.13zM38.11 20.92c-.6.19-.79.2-.79.2v17.24c-1.02.55-1.86.81-2.74.81-1.07 0-1.68-.24-2.5-1.5-1.74-2.69-7.41-11.81-7.41-11.81v11.45l2.23.47c0 0-.06 1.3-2.01 1.45-1.71.13-5.44.32-5.44.32 0-.47.1-1.12.84-1.31.35-.09 1.4-.37 1.4-.37V22.42h-2.24c0-1.03.3-1.83 1.38-1.91l5.79-.33 7.73 11.92V21.49l-2.24-.19c0-.93.9-1.5 1.67-1.58l5.04-.28C38.82 20.09 38.79 20.7 38.11 20.92zM4.98 8.54l5.74 5.74v29.54L5.6 37.66c-.41-.58-.62-1.25-.62-1.96V8.54zM42.72 10.91l-29.06 1.83c-.99.07-1.95-.3-2.65-.99L6.24 6.97l27.19-1.89c.81-.07 1.62.17 2.28.66L42.72 10.91z"></path>
                      </svg>
                    )
                  default:
                    return null
                }
              }

              return (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.label === 'Resume' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 flex-1 rounded-full px-3 py-2 text-sm transition hover:bg-white/5 border border-white/10"
                  title={contact.label}
                >
                  {renderIcon()}
                  <span className="hidden sm:inline">{contact.label}</span>
                </a>
              )
            })}
          </div>

          {/* About Me 내용 */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <h3 className="text-lg font-semibold text-white mb-3">About Me</h3>
            <p className="text-white/80 leading-relaxed text-sm">{ABOUT.summary}</p>
          </div>
        </CardContent>
      </AnimatedCard>

      {/* 스킬 및 경력 섹션 */}
      <div className="space-y-6">
        {/* 스킬 */}
        <AnimatedCard>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {ABOUT.skills.map((skill, index) => (
                <Badge key={index} className="bg-white/10 text-white/90 hover:bg-white/20 border-white/20">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </AnimatedCard>

        {/* 상세 경력 */}
        <AnimatedCard>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Career Highlights</h3>
            <div className="space-y-4 text-white/80">
              <div className="border-l-2 border-pink-500/30 pl-4">
                <p className="text-lg text-white">(주)헥톤프로젝트</p>
                <p className="text-[13px] text-white/60">2024.05 – 2025.09</p>
                <p className="text-[15px] text-white/80">또하나의가족 플랫폼 리뉴얼 프로젝트 프론트엔드 개발</p>
              </div>
              <div className="border-l-2 border-purple-500/30 pl-4">
                <p className="text-lg text-white">디앤에스에버(주)</p>
                <p className="text-[13px] text-white/60">2023.02 – 2024.05</p>
                <p className="text-[15px] text-white/80">외국계 가상화폐 거래소 프론트엔드 개발 및 프로젝트 관리</p>
              </div>
              <div className="border-l-2 border-blue-500/30 pl-4">
                <p className="text-lg text-white">빔피어스(BIMPeers)</p>
                <p className="text-[13px] text-white/60">2019.09 – 2022.09</p>
                <p className="text-[15px] text-white/80">웹 풀스택 개발 및 PM 역할</p>
              </div>
            </div>
          </CardContent>
        </AnimatedCard>
      </div>
    </div>
  )
}
