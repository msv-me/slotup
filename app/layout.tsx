import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Slotup',
  description: 'Simple snack & volunteer sign-ups for youth sports',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-950 text-gray-100 antialiased">
        {children}
      </body>
    </html>
  )
}
