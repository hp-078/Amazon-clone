import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/lib/cart-context'
import { NotificationProvider } from '@/lib/notification-context'

export const metadata: Metadata = {
  title: 'Amazon Clone - Shop Online',
  description: 'Amazon clone built with Next.js, React, and TypeScript',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <NotificationProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </NotificationProvider>
      </body>
    </html>
  )
}
