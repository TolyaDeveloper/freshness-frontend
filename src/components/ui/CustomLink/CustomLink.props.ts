import { AnchorHTMLAttributes } from 'react'
import { LinkProps } from 'next/link'

export interface CustomLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    Omit<LinkProps, 'onClick' | 'onMouseEnter'> {}
