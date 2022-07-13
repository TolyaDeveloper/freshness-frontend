import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'text' | 'contained' | 'outlined' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  startIcon?: ReactNode
  endIcon?: ReactNode
}
