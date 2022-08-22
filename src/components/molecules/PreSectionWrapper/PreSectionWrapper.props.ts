import { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react'

export interface PreSectionWrapperProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  heading: ReactElement
  button: ReactElement
}
