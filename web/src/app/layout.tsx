import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import './globals.css'
import { BaseLayouts } from '~/widgets/layouts'

import { cn } from '~/shared/lib/'
import { WithReduxNextProvider } from '~/shared/providers'
import { Toaster } from '~/shared/ui'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Glabs company',
  description: 'Buy your guitar or create on custom shop!'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <WithReduxNextProvider>
          <BaseLayouts>{children}</BaseLayouts>
          <Toaster />
        </WithReduxNextProvider>
      </body>
    </html>
  )
}
