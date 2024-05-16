'use client'

import { useState } from 'react'
import { useSelector } from 'react-redux'

import Image from 'next/image'

import { useProducts } from '~/entities'
import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  RadioGroup,
  RadioGroupItem
} from '~/shared/ui'

interface Props {
  params: {
    subCategoryName: string
    productsName: string
  }
}

export default function ProductsAsCategoryById({
  params: { subCategoryName, productsName }
}: Props) {
  const [{ id, title, image, colors, price }] = useSelector(useProducts).filter(
    (item) => item.subCategory === subCategoryName && item.title === productsName
  )

  const [chooseColor, setChooseColor] = useState<string>('')
  const [showCharacteristics, setShowCharacteristics] = useState<boolean>(false)

  return (
    <div className="w-11/12 h-full my-4 mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:grid-cols-auto-fill md:grid-cols-minmax-min-10rem-full-1fr transition gap-x-24">
      <div className="flex flex-row">
        <div>
          <h1 className="font-medium text-2xl">{title}</h1>
          <Carousel className="max-w-xs flex flex-row items-center justify-center px-2 py-4 m-4 border border-foreground rounded-md">
            <CarouselContent>
              {image.map((url, idx) => (
                <CarouselItem className="flex items-center justify-center" key={idx}>
                  <Image src={url} alt="" width={210} height={1} priority />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <RadioGroup
          onValueChange={(value) => setChooseColor(value)}
          className="my-12 flex flex-col"
        >
          {colors.map((color, idx) => (
            <RadioGroupItem
              key={idx}
              className={`bg-[${color}] w-6 h-6 border border-foreground rounded-xl`}
              value={color}
            />
          ))}
        </RadioGroup>
      </div>

      <div className="sm:my-12 my-4 flex flex-col">
        <h3 className="font-bold text-xl">Характеристики:</h3>
        <ul className="flex flex-col gap-y-1 items-start">
          <li>
            <strong>Код товара:</strong> {id}
          </li>
          <li>
            <strong>Производитель:</strong> {'Jackson'}
          </li>
          <li>
            <strong>Серия:</strong> {'Virtuoso'}
          </li>
          <li>
            <strong>Тип: </strong> {'Электрогитара'}
          </li>
          <li>
            <strong>Состояние: </strong> {'Новое'}
          </li>
          <li>
            <strong>Форма корпуса: </strong> {'Superstrat'}
          </li>
          <li>
            <strong>Количество струн: </strong> {'6'}
          </li>
          <li>
            <strong>Количество ладов: </strong> {'24'}
          </li>
          {!showCharacteristics && (
            <Button
              onClick={() => setShowCharacteristics((value) => !value)}
              variant={'secondary'}
            >
              <li className="text-blue-500 underline hover:cursor-pointer">
                Все характеристики
              </li>
            </Button>
          )}
          {showCharacteristics && <li></li>}
        </ul>
      </div>

      <div className="w-lg sm:my-12 my-4 flex flex-col gap-y-2">
        <span className="font-medium text-4xl">{price} руб.</span>
        <span className="bg-slate-300 w-fit p-1 rounded">
          + {Math.floor(price * (5 / 100))} бонусов
        </span>
        <label className="flex flex-row items-center space-x-2">
          <strong>Выбранный цвет:</strong>{' '}
          {chooseColor ? (
            <div className={`bg-[${chooseColor}] w-6 h-6 rounded-xl`} />
          ) : (
            <span>Не выбран</span>
          )}
        </label>
        <Button variant={'outline'}>
          <span className="text-xl">Купить сразу</span>
        </Button>
        <Button>
          <span className="text-xl">Отложить в корзину</span>
        </Button>
      </div>
    </div>
  )
}
