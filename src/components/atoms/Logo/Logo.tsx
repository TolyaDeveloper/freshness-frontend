import { LogoProps } from './Logo.props'
import LogoIcon from './logo.svg'

const Logo = ({ className, ...props }: LogoProps) => (
  <LogoIcon className={className} {...props} />
)

export default Logo
