'use server'

import { ProductsResponse } from '../model'

import { apiConfig } from '~/shared/configs'

export const getAllProductsByName = async (categoryName: string) => {
  const response = await apiConfig
    .get(`products/${categoryName}`)
    .json<ProductsResponse>()

  return response
}
