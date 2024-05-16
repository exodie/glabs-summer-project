'use server'

import { type FC } from 'react'

import Link from 'next/link'

import { signInAction } from '~/entities/auth/api'
import { Button, Input } from '~/shared/ui'

export const AuthSignInForm: FC = () => {
  return (
    <form
      action={signInAction}
      className="max-w-sm mx-auto flex flex-col items-center gap-y-2 my-14"
    >
      <h1 className="font-semibold text-xl">Авторизация</h1>
      <p className="font-mono text-center text-md">
        Для продолжения использования сервиса необходимо авторизоваться в учётную
        запись.
      </p>
      <Input name="username" placeholder="Имя пользователя" type="text" />
      <Input name="password" placeholder="Пароль" type="password" />
      <Button>Продолжить</Button>

      <div className="w-full flex flex-row items-center justify-between">
        <Button variant={'link'}>
          <Link href={'/signup'}>Создать аккаунт</Link>
        </Button>
        <Button variant={'link'}>
          <Link href={'/recovery'}>Восстановить пароль</Link>
        </Button>
      </div>
    </form>
  )
}
