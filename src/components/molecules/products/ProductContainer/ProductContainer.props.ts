import { LayoutType } from '~/interfaces/layout.types'
import { IProduct } from '~/interfaces/product.interface'

export interface ProductContainerProps {
  layout: LayoutType
  products: IProduct[]
  className?: string
}
