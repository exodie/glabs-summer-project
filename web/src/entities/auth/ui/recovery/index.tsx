import { FC } from 'react'

import { recoveryAction } from '~/entities/auth/api'
import { Button, Input } from '~/shared/ui'

export const AuthRecoveryForm: FC = () => {
  return (
    <form
      action={recoveryAction}
      className="max-w-sm mx-auto flex flex-col items-center gap-y-2 my-60"
    >
      <h1 className="font-semibold text-xl">Восстановление пароля</h1>
      <p className="font-mono text-center text-md">
        Пожалуйста введите свою почту для <strong>восстановления/изменения</strong>{' '}
        пароля
      </p>

      <Input placeholder="youremail@email.com" type="email" name="email" />
      <Button>Отправить код</Button>
    </form>
  )
}
