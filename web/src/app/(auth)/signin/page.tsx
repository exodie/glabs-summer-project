import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { AuthSignInForm } from '~/entities'

export default function AuthenticateSignIn() {
  if (cookies().get('session')) {
    redirect('/')
  }

  return <AuthSignInForm />
}
