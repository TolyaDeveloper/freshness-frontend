import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'solid' | 'soft' | 'outlined' | 'plain'
  size?: 'sm' | 'md' | 'lg'
  startAdornment?: ReactNode
  endAdornment?: ReactNode
}
