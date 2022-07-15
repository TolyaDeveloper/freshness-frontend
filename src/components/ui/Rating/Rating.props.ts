import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface RatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  rating: number
  isEditable?: boolean
  onSetRating?: (rating: number) => void
}
