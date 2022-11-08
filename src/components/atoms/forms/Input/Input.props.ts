import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'
import { FieldError } from 'react-hook-form'

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  error?: FieldError
}
