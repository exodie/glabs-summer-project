import { type ReactNode } from 'react'

import { BreadCrumbWidget } from '@/widgets/breadcrumb'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

export const BaseLayouts = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col min-h-full">
      <Header />
      <main className="max-w-7xl flex-1 mx-4">
        <BreadCrumbWidget />
        {children}
      </main>
      <Footer />
    </div>
  )
}
