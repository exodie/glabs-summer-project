import { cookies } from 'next/headers'

import { UsersProfile } from '@/views/users'

export default function Profile() {
  const username = cookies().get('username')?.value

  return (
    <section className="flex flex-col gap-y-4">
      <h1 className="text-xl font-medium">Приветствую, {username}</h1>

      <UsersProfile />
    </section>
  )
}
