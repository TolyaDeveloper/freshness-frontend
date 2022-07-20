import { AnchorHTMLAttributes, ReactNode } from 'react'
import { LinkProps } from 'next/link'

export interface CustomLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    Omit<LinkProps, 'onClick' | 'onMouseEnter'> {
  endAdornment?: ReactNode
  underline?: 'none' | 'hover' | 'always'
  color?: 'green' | 'black' | 'grey'
  children: ReactNode
}
