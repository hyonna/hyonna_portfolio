import './globals.css'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  title: 'HYUNA • Portfolio',
  description: 'Frontend Developer Portfolio',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico'
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover'
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
