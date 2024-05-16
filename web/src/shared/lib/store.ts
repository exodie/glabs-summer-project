import { configureStore } from '@reduxjs/toolkit'

import { productReducers } from '~/entities'

export const store = () => {
  return configureStore({
    reducer: {
      products: productReducers
    }
  })
}

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
