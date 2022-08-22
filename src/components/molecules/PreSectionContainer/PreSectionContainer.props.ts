import { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react'

export interface PreSectionContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  heading: ReactElement
  button: ReactElement
}
