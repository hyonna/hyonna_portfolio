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
              <span>Seoul, Korea</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>6년 경력</span>
            </div>
          </div>

          {/* 연락처 버튼들 */}
          <div className="flex gap-2">
            {ABOUT.contacts.map((contact, index) => {
              const icons = {
                Email: Mail,
                GitHub: Github,
                Resume: FileText
              }
              const Icon = icons[contact.label as keyof typeof icons]

              return (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.label === 'Resume' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 flex-1 rounded-full px-3 py-2 text-sm transition hover:bg-white/5 border border-white/10"
                  title={contact.label}
                >
                  <Icon className="w-4 h-4" />
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
                <p className="text-lg text-white">헥톤프로젝트</p>
                <p className="text-[13px] text-white/60">2024. 01 ~ 현재</p>
                <p className="text-[15px] text-white/80">또하나의가족 플랫폼 리뉴얼 프로젝트 프론트엔드 개발</p>
              </div>
              <div className="border-l-2 border-purple-500/30 pl-4">
                <p className="text-lg text-white">외국계 가상화폐 거래소</p>
                <p className="text-[13px] text-white/60">2022. 03 ~ 2023. 12</p>
                <p className="text-[15px] text-white/80">프론트엔드 개발 및 프로젝트 관리</p>
              </div>
              <div className="border-l-2 border-blue-500/30 pl-4">
                <p className="text-lg text-white">SI 기업</p>
                <p className="text-[13px] text-white/60">2018. 06 ~ 2022. 02</p>
                <p className="text-[15px] text-white/80">웹 풀스택 개발 및 PM 역할</p>
              </div>
            </div>
          </CardContent>
        </AnimatedCard>
      </div>
    </div>
  )
}
