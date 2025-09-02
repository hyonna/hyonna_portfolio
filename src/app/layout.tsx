import '@/styles/base.scss'
import Footer from '@components/Footer'
import { ReactNode } from 'react'
import Background from './(background)/Background'

export const metadata = {
  title: 'hyonna - Portfolio',
  description: 'hyonna portfolio'
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        {children}
        <div className="starfield">
          <div className="starfield__layer"></div>
        </div>
        <Background />
      </body>
    </html>
  )
}

export default RootLayout
