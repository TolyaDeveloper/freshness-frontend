import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'text' | 'contained' | 'outlined' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}
