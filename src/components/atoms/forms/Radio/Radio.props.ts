import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'
import { FieldError } from 'react-hook-form'

export interface RadioProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string
  label?: ReactNode
  color?: 'primary' | 'secondary'
  error?: FieldError
  labelTextClassname?: string
}
