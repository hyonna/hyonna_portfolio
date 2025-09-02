'use client'

import { ReactElement, useEffect, useRef, useState } from 'react'
import SectionTitle from '@/components/SectionTitle'
import section from '@/styles/(sections)/section.module.scss'

const REVIEWS = [
  { name: 'Alex Tomato', role: 'Brand Manager', text: 'Working with Hyonna was a delight.' },
  { name: 'Jenny Pineapple', role: 'SEO Lead', text: 'Great communication and delivery.' },
  { name: 'Chris Berry', role: 'PM', text: 'Clear process and on-time.' }
]

const Testimonials = (): ReactElement => {
  const [idx, setIdx] = useState<number>(0)
  const timer = useRef<number | undefined>(undefined)

  const stop = (): void => {
    if (timer.current) window.clearInterval(timer.current)
  }
  const start = (): void => {
    stop()
    timer.current = window.setInterval(() => setIdx((i) => (i + 1) % REVIEWS.length), 3500)
  }

  useEffect(() => {
    start()
    return stop
  }, [])

  return (
    <section id="testimonials" className={`${section.section} reveal-fade`}>
      <div className="container" onMouseEnter={stop} onMouseLeave={start}>
        <SectionTitle kicker="Testimonials" title="Clients say about me" />
        <div className="carousel">
          {REVIEWS.map((r, i) => (
            <figure key={i} aria-hidden={i !== idx} className={i === idx ? 'active' : ''}>
              <blockquote>“{r.text}”</blockquote>
              <figcaption>
                <b>{r.name}</b> — <span>{r.role}</span>
              </figcaption>
            </figure>
          ))}
          <div className="dots" role="tablist">
            {REVIEWS.map((_, i) => (
              <button key={i} role="tab" aria-selected={i === idx} onClick={() => setIdx(i)}>
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
