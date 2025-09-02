'use client'

import { ReactElement, useMemo, useState } from 'react'
import grid from '@/styles/(sections)/grid.module.scss'
import section from '@/styles/(sections)/section.module.scss'
import SectionTitle from '@/components/SectionTitle'

type Item = { title: string; tags: string[]; img: string }
const ITEMS: Item[] = [
  { title: 'Isometric House', tags: ['Illustration', '3D'], img: '/images/p1.jpg' },
  { title: 'Dashboard Template', tags: ['UI', 'Figma'], img: '/images/p2.jpg' },
  { title: 'Notification Icon', tags: ['Illustration'], img: '/images/p3.jpg' },
  { title: 'Smart Penguin', tags: ['AI', 'Illustration'], img: '/images/p4.jpg' }
]

const PortfolioGrid = (): ReactElement => {
  const [filter, setFilter] = useState<string>('All')
  const [active, setActive] = useState<Item | null>(null)
  const tags = useMemo(() => ['All', ...Array.from(new Set(ITEMS.flatMap((i) => i.tags)))], [])
  const list = useMemo(() => (filter === 'All' ? ITEMS : ITEMS.filter((i) => i.tags.includes(filter))), [filter])

  return (
    <section id="portfolio" className={`${section.section} reveal-up`}>
      <div className="container">
        <SectionTitle kicker="Portfolio" title="Featured projects" />

        <div className="filters" role="tablist" aria-label="Project filters">
          {tags.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={filter === t}
              className={filter === t ? 'active' : ''}
              onClick={() => setFilter(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <ul className={grid.grid}>
          {list.map((it, i) => (
            <li key={i} className={`${grid.card} reveal-scale`}>
              <button className="card-btn" onClick={() => setActive(it)} aria-label={`Open ${it.title}`}>
                <figure>
                  <img src={it.img} alt="" loading="lazy" />
                  <figcaption>
                    <strong>{it.title}</strong>
                    <span>{it.tags.join(' • ')}</span>
                  </figcaption>
                </figure>
              </button>
            </li>
          ))}
        </ul>

        {active && (
          <div className="modal" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
            <div className="modal-body" onClick={(e) => e.stopPropagation()}>
              <img src={active.img} alt="" />
              <div className="meta">
                <b>{active.title}</b>
                <span>{active.tags.join(' • ')}</span>
              </div>
              <button className="close" onClick={() => setActive(null)} aria-label="Close">
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default PortfolioGrid
