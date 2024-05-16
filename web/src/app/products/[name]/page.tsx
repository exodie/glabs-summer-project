import Image from 'next/image'
import Link from 'next/link'

import { CATALOG_GUITARS_MOCKS } from '~/shared/constants'
import { changeWordToUpper } from '~/shared/lib'
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '~/shared/ui'

export default function ProductsByCategory({
  params: { name }
}: {
  params: { name: string }
}) {
  return (
    <section className="w-full h-full">
      {CATALOG_GUITARS_MOCKS.map((items, index) => (
        <div className="flex flex-col gap-y-4" key={index}>
          <div>
            <h1 className="font-medium text-3xl">Бренды</h1>
            <div className="w-full my-4 mx-auto flex flex-col gap-y-4 sm:flex-row sm:gap-x-4">
              {items.brands.map((brand, index) => (
                <Card key={index} className="flex flex-col max-w-xs">
                  <CardHeader>
                    <CardTitle>{brand}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center h-full">
                    <Image
                      className="px-2"
                      src={
                        `/brands/${brand.toLowerCase()}.png` ||
                        'https://generated.vusercontent.net/placeholder.svg'
                      }
                      alt=""
                      width={150}
                      height={150}
                      priority
                    />
                  </CardContent>
                  {/* TODO: Просмотреть адаптивность */}
                  <CardFooter className="flex flex-col">
                    <Link href={`/products/brands/${brand}`}>
                      <Button>Посмотреть продукцию бренда</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h1 className="font-medium text-3xl">
              {changeWordToUpper(items.category)}
            </h1>
            <div className="w-full my-4 mx-auto flex flex-col gap-y-4 sm:flex-row sm:gap-x-4">
              {items.subCategories.map((category, index) => (
                <Card key={index} className="flex flex-col max-w-xs">
                  <CardHeader>
                    <CardTitle>{changeWordToUpper(category)}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center h-full">
                    <Image
                      src={
                        `/types/${category.toLowerCase()}.png` ||
                        'https://generated.vusercontent.net/placeholder.svg'
                      }
                      alt=""
                      width={150}
                      height={150}
                      priority
                    />
                  </CardContent>
                  {/* TODO: Просмотреть адаптивность */}
                  <CardFooter className="flex flex-col">
                    <Link href={`/products/${name}/${category}`}>
                      <Button>Посмотреть товары категории</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
