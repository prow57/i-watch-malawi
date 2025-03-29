import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './admin.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Manage your video and music platform',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <div className="flex h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}