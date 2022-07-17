import { DetailedHTMLProps, LabelHTMLAttributes } from 'react'

export interface InputLabelProps
  extends DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {}
