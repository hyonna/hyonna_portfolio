'use client'

import Header from '@/components/layout/Header'
import Section from '@/components/layout/Section'
import Hero from '@/components/hero/Hero'
import AboutCard from '@/components/about/AboutCard'
import CareerGrid from '@/components/career/CareerGrid'
import PortfolioGrid from '@/components/portfolio/PortfolioGrid'
import EducationBlocks from '@/components/education/EducationBlocks'

import { Code2, Briefcase, ExternalLink, GraduationCap } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import FloatingActions from '@/components/common/FloationgActions'

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Section id="about" title="About Me" icon={Code2}>
        <FadeIn onMount>
          <AboutCard />
        </FadeIn>
      </Section>
      <Section id="career" title="Career" icon={Briefcase}>
        <CareerGrid />
      </Section>
      <Section id="portfolio" title="" icon={ExternalLink}>
        <PortfolioGrid />
      </Section>
      <Section id="education" title="Education" icon={GraduationCap}>
        <EducationBlocks />
      </Section>
      <footer className="py-12">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between text-sm text-white/50">
          <span>Copyright 2025. yoonhyuna all rights reserved.</span>
          <span>이 웹 포트폴리오 사이트는 Cursor를 활용해 개발되었습니다.</span>
        </div>
      </footer>
      {/* 우하단 플로팅 액션 */}
      <FloatingActions email="yha0118@gmail.com" />
    </main>
  )
}
