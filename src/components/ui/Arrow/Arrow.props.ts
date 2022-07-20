import { SVGAttributes } from 'react'

export interface ArrowProps extends SVGAttributes<SVGAElement> {
  color?: 'primary1' | 'primary2' | 'secondary'
  orientation?: 'up' | 'right' | 'down' | 'left'
}
