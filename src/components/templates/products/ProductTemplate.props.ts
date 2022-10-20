import { IProduct } from '~/interfaces/product.interface'

export interface ProductTemplateProps {
  product: Omit<IProduct, 'reviews' | 'questions'>
}
