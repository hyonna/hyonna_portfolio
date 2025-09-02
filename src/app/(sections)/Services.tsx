import SectionTitle from '@/components/SectionTitle'
import section from '@/styles/(sections)/section.module.scss'
import { ReactElement } from 'react'

const services = [
  { title: 'Frontend development', subtitle: 'UI/UX • Design to Code', text: 'React, Next.js, CSS/SCSS' },
  { title: 'Digital art & graphics', subtitle: 'Illustrations • 3D', text: 'Photoshop, Fresco, Blender' },
  { title: 'SEO & marketing', subtitle: 'Social & Analytics', text: 'Plans, monitoring, messages' },
  { title: 'Brand identity', subtitle: 'Logo • Style guide', text: 'Voice, look & feel' }
]

const Services = (): ReactElement => {
  return (
    <section className={section.section}>
      <div className="container">
        <SectionTitle kicker="Services" title="What I do" />
        <div className="grid-2">
          {services.map((s, i) => (
            <article key={i} className="service-card">
              <h3>{s.title}</h3>
              <p className="sub">{s.subtitle}</p>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
