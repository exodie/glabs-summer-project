import ky from 'ky'

export const apiConfig = ky.create({
  prefixUrl: process.env.GATEWAY_API_URI
})
