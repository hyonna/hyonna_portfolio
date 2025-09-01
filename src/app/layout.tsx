import { ReactNode } from 'react'

export const metadata = { title: 'My Next App' }

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
