import { ICategory } from '~/interfaces/category.interface'
import { ITag } from '~/interfaces/tag.interface'
import { LayoutType } from '~/interfaces/layout.types'
import { ICustomerReview } from '~/interfaces/customer-review.interface'
import { IBlogPost } from '~/interfaces/blog-post.interface'
import { IUser } from '~/interfaces/user.interface'
import { ICart } from '~/interfaces/cart.interface'

export type AppActions =
  | { type: 'SET_CATEGORIES'; payload: ICategory[] }
  | { type: 'SET_TAGS'; payload: ITag[] }
  | { type: 'SET_CUSTOMERS_REVIEWS'; payload: ICustomerReview[] }
  | { type: 'SET_BLOG_POSTS'; payload: IBlogPost[] }
  | { type: 'SET_CART'; payload: ICart }
  | { type: 'SET_WISHLIST'; payload: string }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: string }
  | { type: 'SET_COMPARE'; payload: string }
  | { type: 'REMOVE_FROM_COMPARE'; payload: string }
  | { type: 'SET_LAYOUT'; payload: LayoutType }

export interface IAppState {
  categories: ICategory[]
  tags: ITag[]
  customersReviews: ICustomerReview[]
  blogPosts: IBlogPost[]
  cart: ICart[]
  wishlist: string[]
  compare: string[]
  layout: LayoutType
  user: IUser | null
}

export const initialValues: IAppState = {
  categories: [],
  tags: [],
  customersReviews: [],
  blogPosts: [],
  cart: [],
  wishlist: [],
  compare: [],
  layout: 'grid',
  user: null
}
