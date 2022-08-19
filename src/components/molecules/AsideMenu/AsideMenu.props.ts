import { ICategory } from '~/interfaces/category.interface'

export interface AsideMenuProps {
  categories: ICategory[]
  title: string
  buttonTitle?: string
  maxCategories?: number
  className?: string
}
