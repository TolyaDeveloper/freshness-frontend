import { ElementType } from 'react'

export interface LoadMoreListProps {
  className?: string
  buttonTitle?: string
  limit?: number
  component?: ElementType
  children: JSX.Element | JSX.Element[]
  title: string
}
