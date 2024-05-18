import Image from 'next/image'
import Link from 'next/link'

import { getAllProductsByName } from '~/entities/products/api'
import { changeWordAsProducts } from '~/shared/lib'
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '~/shared/ui'

export default async function ProductsByCategory({
  params: { name }
}: {
  params: { name: string }
}) {
  const products = await getAllProductsByName(name)

  return (
    <section className="w-full h-full">
      <div className="flex flex-col gap-y-4">
        <div>
          <div className="flex flex-row items-center gap-x-2">
            <h1 className="font-bold text-2xl">Бренды</h1>
            <span className="font-medium text-lg px-2 bg-secondary rounded-full">
              {products.brands.length}
            </span>
          </div>

          <div className="w-full my-4 mx-auto flex flex-row flex-wrap gap-2 sm:flex-row sm:gap-x-4">
            {products.brands.map((brand, index) => (
              <Link
                href={`/products/${products.category}/${brand}`}
                key={index}
                className="p-2 bg-secondary rounded-lg hover:cursor-pointer"
              >
                {brand}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-row items-center gap-x-2">
            <h1 className="font-bold text-2xl">{products.title}</h1>
            <span className="font-medium text-lg px-2 bg-secondary rounded-full">
              {products.subCategories.length}
            </span>
          </div>

          <div className="w-full my-4 mx-auto flex flex-wrap gap-y-8 sm:flex-row sm:gap-x-8">
            {products.subCategories.map((category, index) => (
              <Card key={index} className="flex flex-col max-w-xs w-full items-center">
                <CardHeader>
                  <CardTitle className="font-normal text-center">
                    {changeWordAsProducts(category.name)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center h-full">
                  <Image
                    src={
                      `/types/${category.name.toLowerCase()}.webp` ||
                      'https://generated.vusercontent.net/placeholder.svg'
                    }
                    alt=""
                    width={200}
                    height={200}
                    priority
                  />
                </CardContent>
                <CardFooter className="flex flex-col">
                  <Link href={`/products/${name}/${category.name}`}>
                    <Button>Посмотреть товары категории</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
