import { SVGAttributes } from 'react'

export interface ArrowProps extends SVGAttributes<SVGAElement> {
  color?: 'green' | 'black' | 'white'
  orientation?: 'up' | 'right' | 'down' | 'left'
}
