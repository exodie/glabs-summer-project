import { createSlice } from '@reduxjs/toolkit'
import { Products, type ProductState } from './types'
import { RootState } from '~/shared/lib'

const initialState: ProductState = {
  products: []
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, { payload }: { payload: Products[] }) => {
      state.products = payload
    },

    resetProducts: (state) => {
      state.products = []
    }
  }
})

export const { setProducts, resetProducts } = productsSlice.actions

export const productReducers = productsSlice.reducer

export const useProducts = (state: RootState) => state.products.products
