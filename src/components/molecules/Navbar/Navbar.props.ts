import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { ICategory } from '~/interfaces/category.interface'

export interface NavbarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  categoryItems: ICategory[]
}
