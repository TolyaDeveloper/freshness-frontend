import { ReactNode } from 'react'
import { LinkProps } from 'next/link'

export interface TagProps extends Partial<LinkProps> {
  size?: 'sm' | 'md'
  variant?: 'solid' | 'soft' | 'outlined'
  isRemovable?: boolean
  className?: string
  children: ReactNode
  onRemoveTag?: () => void
}
