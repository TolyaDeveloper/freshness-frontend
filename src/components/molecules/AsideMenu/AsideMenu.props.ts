import { ReactElement } from 'react'
import { ICategory } from '~/interfaces/category.interface'

export interface AsideMenuProps {
  className?: string
  buttonTitle?: string
  maxItems?: number
  children: JSX.Element | JSX.Element[]
  title: string
}
