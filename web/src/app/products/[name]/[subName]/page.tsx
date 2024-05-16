import { ProductsCatalog } from '~/entities'

interface Props {
  params: {
    name: string
  }
}

export default function ProductsSub({ params: { name } }: Props) {
  return <ProductsCatalog name={name} />
}
