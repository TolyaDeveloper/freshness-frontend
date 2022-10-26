import { ICategory } from '~/interfaces/category.interface'
import { ITag } from '~/interfaces/tag.interface'
import { LayoutType } from '~/interfaces/layout.types'
import { ICustomerReview } from '~/interfaces/customer-review.interface'
import { IBlogPost } from '~/interfaces/blog-post.interface'

export type AppActions =
  | { type: 'SET_CATEGORIES'; payload: ICategory[] }
  | { type: 'SET_TAGS'; payload: ITag[] }
  | { type: 'SET_LAYOUT'; payload: LayoutType }

export interface IAppState {
  categories: ICategory[]
  tags: ITag[]
  layout: LayoutType
}

export const initialValues: IAppState = {
  categories: [],
  tags: [],
  layout: 'grid'
}
