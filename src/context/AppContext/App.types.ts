import { ICategory } from '~/interfaces/category.interface'
import { LayoutType } from '~/interfaces/layout.types'
import { ITag } from '~/interfaces/tag.interface'

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
  layout: 'row'
}
