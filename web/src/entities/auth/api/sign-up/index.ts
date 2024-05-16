'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import ky from 'ky'

export const signUpAction = async (formData: FormData) => {
  const user = {
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
    rpassword: formData.get('rpassword'),
    roles: ['user']
  }

  const expires = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000)

  if (cookies().get('session')) {
    redirect('/profile')
  }

  const response = await ky
    .post(`${process.env.GATEWAY_API_URI}/api/auth/signup`, { json: user })
    .json<{ username: string; accessToken: string }>()

  cookies().set('session', JSON.stringify(response), {
    expires,
    httpOnly: true
  })
  cookies().set('username', response.username)

  redirect('/')
}
