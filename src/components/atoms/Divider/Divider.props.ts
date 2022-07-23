import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface DividerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  orienation?: 'horizontal' | 'vertical'
  color?: 'primary1' | 'primary2'
}
