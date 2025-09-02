import SectionTitle from '@/components/SectionTitle'
import section from '@/styles/(sections)/section.module.scss'
import { ReactElement } from 'react'

const stats = [
  { value: '40+', label: 'Happy clients' },
  { value: '2+', label: 'Years of experience' },
  { value: '50+', label: 'Projects done' }
]

const AboutStats = (): ReactElement => {
  return (
    <section id="about" className={section.section}>
      <div className="container">
        <SectionTitle kicker="About" title="Turning complex problems into simple design" />
        <ul className="stats">
          {stats.map((s, i) => (
            <li key={i}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AboutStats
