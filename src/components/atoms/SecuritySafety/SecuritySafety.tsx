import { cnb } from 'cnbuilder'
import { SecuritySafetyProps } from './SecuritySafety.props'
import Typography from '../Typography/Typography'
import SecuritySafetyIcon from '~/assets/icons/security-safety.svg'

import styles from './SecuritySafety.module.scss'

const SecuritySafety = ({ className, ...props }: SecuritySafetyProps) => {
  return (
    <div className={cnb(styles.securitySafety, className)} {...props}>
      <SecuritySafetyIcon />
      <Typography className={styles.dataSafeText} level="body5">
        All your data are safe
      </Typography>
      <Typography level="body6" color="primary2">
        We are using the most advanced security to provide you the best
        experience ever.
      </Typography>
    </div>
  )
}

export default SecuritySafety
