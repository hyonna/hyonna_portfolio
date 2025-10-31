'use client'

import { useMemo, useState, useEffect } from 'react'
import { colors } from '@/lib/theme'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [active, setActive] = useState('about')
  const [isScrolling, setIsScrolling] = useState(false)
  const nav = useMemo(
    () => [
      { id: 'about', label: 'About Me' },
      { id: 'career', label: 'Career' },
      { id: 'portfolio', label: 'Portfolio' },
      { id: 'education', label: 'Education' }
    ],
    []
  )

  useEffect(() => {
    const handleScroll = () => {
      // 메뉴 클릭으로 인한 스크롤 중이 아닐 때만 섹션 감지
      if (isScrolling) return

      const sections = nav.map((navItem) => document.getElementById(navItem.id)).filter(Boolean)

      let currentSection = 'about'

      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect()
          // 섹션이 화면 상단에서 100px 이내에 있을 때 해당 섹션을 active로 설정
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section.id
            break
          }
        }
      }

      setActive(currentSection)
    }

    // 초기 로드 시에도 실행
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [nav, isScrolling])

  const onNav = (id: string) => {
    setIsScrolling(true)
    setActive(id)

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

    // 스크롤 애니메이션 완료 후 다시 섹션 감지 활성화
    setTimeout(() => {
      setIsScrolling(false)
    }, 1000) // 스크롤 애니메이션 시간보다 약간 길게 설정
  }
  return (
    <header
      className="sticky z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b"
      style={{ 
        borderColor: colors.border,
        top: 'env(safe-area-inset-top, 0px)',
        paddingTop: 'calc(0.75rem + env(safe-area-inset-top, 0px))',
        paddingBottom: '0.75rem'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a
          href="#about"
          className="font-semibold tracking-tight"
          onClick={(e) => {
            e.preventDefault()
            onNav('about')
          }}
        >
          HYUNA • <span style={{ color: colors.pink }}>Portfolio</span>
        </a>
        <nav className="hidden sm:flex items-center gap-2">
          {nav.map((n) => (
            <Button
              key={n.id}
              variant={active === n.id ? 'default' : 'ghost'}
              className={`rounded-full text-sm ${active === n.id ? '' : 'hover:bg-white/5'}`}
              onClick={() => onNav(n.id)}
              style={active === n.id ? { backgroundColor: colors.pink, color: '#0b0b0c' } : {}}
            >
              {n.label}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  )
}
