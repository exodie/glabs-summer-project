'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { apiConfig } from '~/shared/configs'

export const signInAction = async (formData: FormData) => {
  const user = {
    username: formData.get('username'),
    password: formData.get('password')
  }

  const expires = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000)

  if (cookies().get('session')) {
    redirect('/profile')
  }

  const response = await apiConfig
    .post(`auth/signin`, { json: user })
    .json<{ username: string; accessToken: string }>()

  cookies().set('session', JSON.stringify(response), {
    expires,
    httpOnly: true
  })
  cookies().set('username', response.username, { expires, httpOnly: true })

  redirect('/profile')
}
