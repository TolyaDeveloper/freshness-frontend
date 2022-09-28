import { IProduct } from '~/interfaces/product.interface'

export interface ProductCategoryTemplateProps {
  category: string | undefined
  products: IProduct[] | undefined
}
