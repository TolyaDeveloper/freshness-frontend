import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'

export interface RadioProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string
  label?: ReactNode
  color?: 'primary' | 'secondary'
  labelTextClassname?: string
}
