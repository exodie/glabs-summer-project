import { ProductsWord } from '~/entities'

export const changeWordAsProducts = (word: string) => {
  return ProductsWord[word as keyof typeof ProductsWord]
}

export const changeWordToUpper = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}