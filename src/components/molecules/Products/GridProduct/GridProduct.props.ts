import { IProduct } from '~/interfaces/product.interface'

export interface GridProductProps {
  product: IProduct
  className?: string
  setInCart: () => void
  isAlreadyInCart?: boolean
}
