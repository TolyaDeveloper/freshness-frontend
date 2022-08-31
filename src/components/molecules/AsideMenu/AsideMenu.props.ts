import { ICategory } from '~/interfaces/category.interface'

export interface AsideMenuProps {
  className?: string
  buttonTitle?: string
  maxCategories?: number
  categories: ICategory[]
  title: string
}
