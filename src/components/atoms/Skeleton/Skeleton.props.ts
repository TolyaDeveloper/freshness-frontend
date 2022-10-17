import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface SkeletonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  variant: 'text' | 'circular' | 'rectangular' | 'rounded'
  width?: string
  height?: string
}
