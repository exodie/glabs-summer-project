export type Products = {
  id: string
  title: string
  category: string
  subCategory: string;
  image: string[]
  colors: string[];
  price: number
}

export type ProductState = {
  products: Products[];
}