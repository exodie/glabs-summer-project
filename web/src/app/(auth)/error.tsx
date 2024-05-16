'use client'

import { useEffect } from 'react'

import { Button } from '~/shared/ui'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center my-40 gap-y-4">
      <h1 className="font-bold text-6xl font-mono">404</h1>
      <h3 className="font-medium text-2xl">Кажется что-то пошло не так</h3>
      <p className="max-w-md text-center text-lg">
        Ошибка была направлена разработчикам и в скором времени будет устранена,
        спасибо!
      </p>
      <div className="flex flex-col gap-y-1">
        <Button onClick={() => reset()}>
          <span className="font-medium text-lg">Перезагрузить страницу</span>
        </Button>
        <p className="text-xs">
          *Если все равно появляется ошибка, то попробуйте позднее.
        </p>
      </div>
    </div>
  )
}
