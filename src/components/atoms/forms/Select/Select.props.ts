import { DetailedHTMLProps, ReactNode, SelectHTMLAttributes } from 'react'

export interface SelectProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  children: ReactNode
  endAdornment?: ReactNode
}
