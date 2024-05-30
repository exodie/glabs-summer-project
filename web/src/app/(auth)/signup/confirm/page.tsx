'use client'

import { useEffect, useState } from 'react'

import { confirmCode } from '~/entities/auth/api'
import {
  Button,
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  useToast,
  ToastAction
} from '~/shared/ui'

export default function ConfirmEmail() {
  const [value, setValue] = useState<string>('')

  const [time, setTime] = useState(120)

  const { toast } = useToast()

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  const resendConfirmCode = () => {
    setTime(60)

    toast({
      title: 'Email',
      description: 'Письмо было отправлено повторно!',
      action: <ToastAction altText="Отмена">Не отправлять</ToastAction>
    })
  }

  return (
    <form
      className="max-w-sm mx-auto flex flex-col items-center gap-y-6 my-14"
      action={() => confirmCode(value)}
    >
      <h1 className="font-semibold text-xl">Подтверждение почты</h1>
      <p className="font-mono text-center text-md">
        Для продолжения регистрации необходимо подтвердить почту для учётной записи.
      </p>

      <InputOTP maxLength={4} value={value} onChange={(value) => setValue(value)}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSeparator />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>

      <Button className="w-full">Продолжить</Button>

      <div className="w-full flex flex-row items-center justify-center">
        {time > 0 && (
          <Button disabled={time > 0} variant={'outline'}>
            {formatTime(time)}
          </Button>
        )}
        {time === 0 && (
          <Button variant={'secondary'} onClick={resendConfirmCode}>
            Отправить еще раз
          </Button>
        )}
      </div>
    </form>
  )
}
