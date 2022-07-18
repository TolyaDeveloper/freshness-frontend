import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'

export interface RadioProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string
  label?: ReactNode
  color?: 'black' | 'green'
  labelTextClassname?: string
}