import { type ReactNode } from 'react'

import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Glabs products'
}

export default function ProductsLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return <section>{children}</section>
}
