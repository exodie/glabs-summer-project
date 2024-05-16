'use client'

import React from 'react'

import { usePathname } from 'next/navigation'

import { changeWordToUpper } from '~/shared/lib'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '~/shared/ui'

export const BreadCrumbWidget = () => {
  const pathname = usePathname()
    .split('/')
    .filter((part) => part !== '')

  const routes = ['/', ...pathname]

  const handleLink = (routeUrl: string) => {
    const routes: { [routesName: string]: string } = {
      products: '/',
      guitars: '/products/guitars',
      auth: '/auth/signin'
    }

    return routes[routeUrl] || routeUrl
  }

  return (
    <Breadcrumb className="my-2">
      <BreadcrumbList>
        {routes.map((route, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink href={handleLink(route)}>
                {route === '/' ? 'Home' : changeWordToUpper(route)}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
