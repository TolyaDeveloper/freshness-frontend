import { DetailedHTMLProps, ElementType, HTMLAttributes } from 'react'

export const variantsMapping = {
  h1: 'h1',
  'h2-sm': 'h2',
  'h2-md': 'h2',
  'h2-lg': 'h2',
  'h2-xl': 'h2',
  h3: 'h3',
  h4: 'h4',
  body1: 'p',
  body2: 'p',
  body3: 'p',
  body4: 'p',
  body5: 'p',
  body6: 'p'
}

export interface TypographyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  component?: ElementType
  color?:
    | 'primary1'
    | 'primary2'
    | 'primary3'
    | 'primary4'
    | 'secondary'
    | 'error'
  level: keyof typeof variantsMapping
}
