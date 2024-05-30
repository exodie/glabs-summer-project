'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { apiConfig } from '~/shared/configs'

export const signUpAction = async (formData: FormData) => {
  const user = {
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
    rpassword: formData.get('rpassword'),
    roles: ['user']
  }

  const expires = new Date(new Date().getTime() + 2 * 60 * 1000)

  if (cookies().get('session')) {
    redirect('/profile')
  }

  const response = await apiConfig.post(`auth/signup`, { json: user })

  if (response.ok) {
    console.log('response is ok')

    cookies().set('expires-email', user.email as string, {
      expires,
      httpOnly: true
    })

    redirect('/signup/confirm')
  }
}
