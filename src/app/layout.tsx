import './globals.css'

export const metadata = { title: 'Hyunah • Portfolio', description: 'Designer‑minded Frontend Developer' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
