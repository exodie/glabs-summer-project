import { cookies } from 'next/headers'
import Link from 'next/link'

import { ArchiveIcon } from '@radix-ui/react-icons'
import { Button } from '~/shared/ui'

export const Navbar = () => {
  const session = cookies().get('session')?.value

  return (
    <nav className="bg-background flex mx-auto my-2 items-center max-w-7xl">
      <div className="flex gap-x-2 items-center">
        <Link className="font-semibold text-xl" href={'/'}>
          Glabs
        </Link>
      </div>

      <div className="gap-x-4 items-center mr-0 ml-auto flex">
        <span className="font-light text-xl px-2 py-1">
          {session ? (
            <Link href={'/profile'}>
              <Button variant={'outline'} size={'lg'} className="font-medium text-lg">
                Профиль
              </Button>
            </Link>
          ) : (
            <Link href={'/signin'}>
              <Button variant={'outline'} size={'lg'} className="font-medium text-lg">
                Войти
              </Button>
            </Link>
          )}
        </span>
        <Link href={'/cart'}>
          <Button className="flex flex-row items-center gap-x-2">
            <ArchiveIcon width={26} height={26} />
            <span className="font-mono text-lg">0</span>
          </Button>
        </Link>
      </div>
    </nav>
  )
}
