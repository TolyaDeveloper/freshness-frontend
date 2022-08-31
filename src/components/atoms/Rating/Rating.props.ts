import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface RatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  isEditable?: boolean
  onSetRating?: (rating: number) => void
  max?: number
  color?: 'primary' | 'additional'
  rating: number
}
