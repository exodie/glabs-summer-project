'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { apiConfig } from '~/shared/configs'

export const confirmCode = async (code: string) => {
  console.log('confirm')

  const email = cookies().get('expires-email')?.value

  const response = await apiConfig
    .post('auth/confirmEmail', { json: { email, code } })
    .json<{ username: string; accessToken: string }>()

  const expires = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000)

  cookies().set('session', JSON.stringify(response), {
    expires,
    httpOnly: true
  })

  redirect('/')
}
