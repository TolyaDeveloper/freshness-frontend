import { ReactNode } from 'react'
import { LinkProps } from 'next/link'

export interface TagProps extends Partial<LinkProps> {
  size?: 'sm' | 'md'
  variant?: 'contained' | 'outlined' | 'ghost'
  isRemovable?: boolean
  className?: string
  children: ReactNode
  onRemoveTag?: () => void
}
