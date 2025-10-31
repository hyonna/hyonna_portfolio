import './globals.css'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  title: 'HYUNA • Portfolio',
  description: 'Frontend Developer Portfolio',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning className="dark">
      <body className="min-h-screen bg-brand-bg text-white antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
