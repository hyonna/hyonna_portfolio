import { ReactElement } from 'react'
import PortfolioGrid from '../app/(sections)/PortfolioGrid'
import AboutStats from '../app/(sections)/AboutStats'
import Services from '../app/(sections)/Services'
import Resume from '../app/(sections)/Resume'
import Testimonials from '../app/(sections)/Testimonials'
import ContactForm from '../app/(sections)/ContactForm'
import styles from '@/styles/components/sectionWrapper.module.scss'
import Header from './Header'

const SectionWrapper = (): ReactElement => {
  return (
    <>
      <div id="section-wrapper" className={styles.content}>
        <div className={styles.container}>
          <Header />
          <PortfolioGrid />
          <AboutStats />
          <Services />
          <Resume />
          <Testimonials />
          <ContactForm />
        </div>
      </div>
    </>
  )
}

export default SectionWrapper
