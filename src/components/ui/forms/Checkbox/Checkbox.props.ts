import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'

export interface CheckboxProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string
  label?: ReactNode
  labelTextClassname?: string
}
