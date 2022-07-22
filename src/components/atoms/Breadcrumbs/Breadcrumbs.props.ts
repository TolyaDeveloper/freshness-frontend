import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface BreadcrumbsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children: ReactNode
  separator?: string
}
