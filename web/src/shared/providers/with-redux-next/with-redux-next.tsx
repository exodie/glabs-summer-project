'use client'

import { type ReactNode, useRef } from 'react'
import { Provider } from 'react-redux'

import { setProducts } from '~/entities'
import { GUITARS__MOCKS } from '~/shared/constants'
import { AppStore, store } from '~/shared/lib'

export function WithReduxNextProvider({ children }: Readonly<{ children: ReactNode }>) {
  const storeRef = useRef<AppStore>()

  if (!storeRef.current) {
    storeRef.current = store()
    storeRef.current.dispatch(setProducts(GUITARS__MOCKS))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
