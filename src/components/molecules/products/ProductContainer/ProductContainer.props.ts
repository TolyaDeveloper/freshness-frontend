import { LayoutType } from '~/interfaces/layout.types'
import { IProduct } from '~/interfaces/product.interface'

export interface ProductContainerProps {
  className?: string
  layout: LayoutType
  products: IProduct[]
}
