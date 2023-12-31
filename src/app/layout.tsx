import { Sidebar } from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="max-h-screen overflow-hidden antialiased">
      <body className={inter.className}>
        <div className="grid max-h-screen min-h-screen grid-cols-app">
          <Sidebar />
          <main className="max-h-screen overflow-y-scroll px-8 pb-12 pt-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
