'use client'

import { ReactElement, useState } from 'react'
import SectionTitle from '@/components/SectionTitle'
import section from '@/styles/(sections)/section.module.scss'

const ContactForm = (): ReactElement => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const email = 'hello@yourdomain.dev'

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setStatus('sending')
    try {
      // 실제로는 서버 액션/폼 서비스로 교체
      await new Promise((res) => setTimeout(res, 900))
      setStatus('sent')
      ;(e.currentTarget as HTMLFormElement).reset()
    } catch {
      setStatus('error')
    }
  }

  const copyEmail = async (): Promise<void> => {
    await navigator.clipboard.writeText(email)
    alert('Email copied: ' + email)
  }

  return (
    <section id="contact" className={`${section.section} reveal-up`}>
      <div className="container">
        <SectionTitle kicker="Contact" title="Let’s make something awesome together!" />
        <p style={{ opacity: 0.75, marginBottom: 12 }}>
          Or email me at{' '}
          <button className="link" onClick={copyEmail}>
            {email}
          </button>
        </p>

        <form className="contact" onSubmit={onSubmit}>
          <div className="row">
            <label>
              Name
              <input name="name" required minLength={2} />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
          </div>
          <label>
            Message
            <textarea name="message" rows={6} required minLength={10} />
          </label>
          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent ✅' : 'Send Message'}
          </button>
          {status === 'error' && (
            <p role="alert" style={{ color: '#ff7b7b' }}>
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default ContactForm
