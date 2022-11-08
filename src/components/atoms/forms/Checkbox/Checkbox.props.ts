import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'
import { FieldError } from 'react-hook-form'

export interface CheckboxProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string
  label?: ReactNode
  labelTextClassname?: string
  error?: FieldError
}
