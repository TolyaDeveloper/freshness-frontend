import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  size?: 'sm' | 'md'
  variant?: 'contained' | 'outlined' | 'ghost'
  isRemovable?: boolean
  onRemoveTag?: () => void
}
