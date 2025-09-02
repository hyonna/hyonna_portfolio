import SectionTitle from '@/components/SectionTitle'
import section from '@/styles/(sections)/section.module.scss'
import { ReactElement } from 'react'

const education = [
  { period: '2019 - 2021', title: 'UI/UX Design', org: 'CalArts', text: 'Research, design, prototype.' }
]
const work = [{ period: '2021 - now', title: 'Frontend Engineer', org: 'Your Company', text: 'Building web apps.' }]

const Resume = (): ReactElement => {
  return (
    <section id="resume" className={section.section}>
      <div className="container">
        <SectionTitle kicker="Resume" title="Education & Experience" />
        <div className="resume-grid">
          <div>
            <h3>Education</h3>
            <ul>
              {education.map((e, i) => (
                <li key={i}>
                  <strong>{e.period}</strong> — <b>{e.title}</b> <em>{e.org}</em>
                  <p>{e.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Work</h3>
            <ul>
              {work.map((w, i) => (
                <li key={i}>
                  <strong>{w.period}</strong> — <b>{w.title}</b> <em>{w.org}</em>
                  <p>{w.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
