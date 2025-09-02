'use client'

import { ReactElement } from 'react'
import styles from '@/styles/(sections)/header.module.scss'
import ThemeToggle from './ThemeToggle'

const Header = (): ReactElement => (
  <header className={styles.header}>
    <div className="container">
      <nav className={styles.nav} aria-label="Primary">
        <a href="#portfolio">Portfolio</a>
        <a href="#about">About</a>
        <a href="#resume">Resume</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
        <div className={styles.actions}>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  </header>
)
export default Header
