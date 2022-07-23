import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface UserWithCartProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  itemsInCart?: number
}
