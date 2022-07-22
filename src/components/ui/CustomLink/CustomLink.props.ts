import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export interface CustomLinkProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  endAdornment?: ReactNode
  underline?: 'none' | 'hover' | 'always'
  color?: 'secondary' | 'primary1' | 'primary2'
  level: 'body1' | 'body2' | 'body3'
  children: ReactNode
}
