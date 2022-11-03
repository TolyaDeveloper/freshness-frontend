import { CopyrightProps } from './Copyright.props'
import Typography from '../Typography/Typography'

const Copyright = ({ className }: CopyrightProps) => {
  return (
    <Typography className={className} level="body4">
      Copyright © {new Date().getFullYear()}
    </Typography>
  )
}

export default Copyright
