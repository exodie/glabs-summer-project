import Image from 'next/image'
import Link from 'next/link'

import { CATALOG__MOCKS } from '~/shared/constants'
import { Card, CardContent, CardHeader, CardTitle } from '~/shared/ui'

export default function Home() {
  return (
    <main className="w-full my-4 mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:grid-cols-auto-fill md:grid-cols-minmax-min-10rem-full-1fr">
      {CATALOG__MOCKS.map((items) => (
        <Link href={`/products/${items.href}`} key={items.id}>
          <Card className="h-full flex flex-col items-center">
            <CardHeader>
              <CardTitle className="mx-auto mt-0">{items.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center h-full">
              {items.imageUrl && (
                <Image
                  className="px-4 rounded w-full block ms-auto"
                  src={items.imageUrl}
                  alt=""
                  priority
                  width={1000}
                  height={1000}
                />
              )}
              {!items.imageUrl && <h3>Фото нет, но скоро появится</h3>}
            </CardContent>
          </Card>
        </Link>
      ))}
    </main>
  )
}
