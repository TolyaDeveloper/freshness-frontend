import { IProduct } from '~/interfaces/product.interface'

export interface RowProductProps {
  product: IProduct
  className?: string
  setInCart: () => void
  isAlreadyInCart?: boolean
}
