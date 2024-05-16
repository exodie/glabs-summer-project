'use server'

import { FC } from 'react'

import Link from 'next/link'

import { signUpAction } from '~/entities/auth/api'
import { Button, Input } from '~/shared/ui'

export const AuthSignUpForm: FC = () => {
  return (
    <form
      action={signUpAction}
      className="max-w-sm mx-auto flex flex-col items-center gap-y-2 my-14"
    >
      <h1 className="font-semibold text-xl">Создание аккаунта</h1>
      <p className="font-mono text-center text-md">
        Для продолжения использования сервиса необходимо создать учётную запись.
      </p>
      <Input name="username" placeholder="Имя пользователя" type="text" />
      <Input name="email" placeholder="Почта" type="email" />
      <Input name="password" placeholder="Пароль" type="password" />
      <Input name="rpassword" placeholder="Пароль повторно" type="password" />
      <Button>Продолжить</Button>

      <div className="w-full flex flex-row items-center justify-between">
        <Button variant={'link'}>
          <Link href={'/signin'}>Войти в аккаунт</Link>
        </Button>
        <Button variant={'link'}>
          <Link href={'/recovery'}>Восстановить пароль</Link>
        </Button>
      </div>
    </form>
  )
}
