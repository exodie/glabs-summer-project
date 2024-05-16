import { FC } from 'react'

import Image from 'next/image'

import { type Products } from '../../model'

import { Button, Carousel, CarouselContent, CarouselItem } from '~/shared/ui'

interface Props {
  product: Products
}

export const ProductsCard: FC<Props> = ({ product }) => {
  return (
    <div className="max-w-xs max-h-fit flex flex-col p-4 border rounded-md border-black">
      <div className="w-full mx-auto py-4 px-2">
        <Carousel className="w-full mx-auto flex flex-row max-w-xs">
          <CarouselContent>
            {product.image.map((url, idx) => (
              <CarouselItem key={idx} className="flex items-center justify-center">
                <Image src={url} alt="" priority width={150} height={1} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="flex flex-col gap-y-2">
        <span className="font-medium">{product.title}</span>
        <span>{product.price}</span>
        <Button>See product</Button>
      </div>
    </div>
  )
}
