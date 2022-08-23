import { ICategory } from '~/interfaces/category.interface'
import { IProduct } from '~/interfaces/product.interface'
import { ITag } from '~/interfaces/tag.interface'
import { LayoutType } from '~/interfaces/layout.types'
import { ICustomerReview } from '~/interfaces/customer-review.interface'

export type AppActions =
  | { type: 'SET_CATEGORIES'; payload: ICategory[] }
  | { type: 'SET_PRODUCTS'; payload: IProduct[] }
  | { type: 'SET_TAGS'; payload: ITag[] }
  | { type: 'SET_CUSTOMERS_REVIEWS'; payload: ICustomerReview[] }
  | { type: 'SET_CART'; payload: string }
  | { type: 'SET_LAYOUT'; payload: LayoutType }

export interface IAppState {
  categories: ICategory[]
  products: IProduct[]
  tags: ITag[]
  customersReviews: ICustomerReview[]
  cart: string[]
  layout: LayoutType
}

export const initialValues: IAppState = {
  categories: [],
  products: [],
  tags: [],
  customersReviews: [],
  cart: [],
  layout: 'row'
}
