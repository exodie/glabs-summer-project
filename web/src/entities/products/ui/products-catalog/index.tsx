'use client'

import { type FC } from 'react'
import { useSelector } from 'react-redux'

import Image from 'next/image'
import Link from 'next/link'

import { Products, useProducts } from '../../model'

import { Button, Carousel, CarouselContent, CarouselItem } from '~/shared/ui'

interface Props {
  name: string
}

export const ProductsCatalog: FC<Props> = ({ name }) => {
  const products = useSelector(useProducts).filter(
    (product: Products) => product.category === name
  )

  return (
    <div className="w-full flex flex-col sm:flex-row my-4">
      {products.length <= 1 && (
        <div>Кажись товары закончились, но говорят скоро будет пополнение</div>
      )}

      {products.length > 1 && (
        <div className="my-4 sm:mx-4 max-w-xs h-fit px-4 py-2 border border-foreground rounded-md flex flex-col items-start gap-y-2">
          <h3 className="font-semibold text-xl">Filters</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quos. Facere
            veritatis minima quo quaerat, itaque consectetur pariatur recusandae qui est
            harum officia aspernatur, odio consequatur voluptate, quae excepturi eius?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quos. Facere
            veritatis minima quo quaerat, itaque consectetur pariatur recusandae qui est
            harum officia aspernatur, odio consequatur voluptate, quae excepturi eius?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quos. Facere
            veritatis minima quo quaerat, itaque consectetur pariatur recusandae qui est
            harum officia aspernatur, odio consequatur voluptate, quae excepturi eius?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quos. Facere
            veritatis minima quo quaerat, itaque consectetur pariatur recusandae qui est
            harum officia aspernatur, odio consequatur voluptate, quae excepturi eius?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quos. Facere
            veritatis minima quo quaerat, itaque consectetur pariatur recusandae qui est
            harum officia aspernatur, odio consequatur voluptate, quae excepturi eius?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quos. Facere
            veritatis minima quo quaerat, itaque consectetur pariatur recusandae qui est
            harum officia aspernatur, odio consequatur voluptate, quae excepturi eius?
          </p>
          <Button className="w-full font-medium text-xl" size={'lg'}>
            Поиск
          </Button>
        </div>
      )}

      {products.length >= 1 && (
        <div className="flex flex-col">
          <div className="py-4">
            <h2>Найдено: {products.length}</h2>
          </div>

          <section className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:grid-cols-auto-fill md:grid-cols-minmax-min-10rem-full-1fr transition">
            {products.map((items, index) => (
              <div
                key={index}
                className="max-w-xs max-h-[848px] flex flex-col p-4 border rounded-md border-foreground"
              >
                <Carousel className="w-full h-full max-w-xs mx-auto flex flex-row items-center justify-center px-2 py-4">
                  <CarouselContent>
                    {items.image.map((url, index) => (
                      <CarouselItem
                        key={index}
                        className="flex items-center justify-center"
                      >
                        <Image src={url} alt="" priority width={150} height={1} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>

                <div className="flex flex-col gap-y-2">
                  <span className="font-medium max-w-sm max-h-12 overflow-y-auto">
                    {items.title}
                  </span>
                  <span className="font-bold">{items.price} руб.</span>
                  <Link
                    className="flex flex-col"
                    href={`/products/${items.category}/${items.subCategory}/${items.title}`}
                  >
                    <Button>Просмотреть</Button>
                  </Link>
                </div>
              </div>
            ))}
          </section>
        </div>
      )}
    </div>
  )
}
