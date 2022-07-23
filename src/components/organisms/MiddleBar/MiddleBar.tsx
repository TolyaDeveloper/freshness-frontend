import { cnb } from 'cnbuilder'
import { Logo } from '~/components/atoms'
import { Search, UserWithCart } from '~/components/molecules'
import { ROUTES } from '~/constants/routes'
import { MiddleBarProps } from './Middlebar.props'
import Link from 'next/link'

import styles from './MiddleBar.module.scss'

const MiddleBar = ({ className }: MiddleBarProps) => {
  return (
    <div className={cnb(styles.middleBar, className)}>
      <span>
        <Link href={ROUTES.home}>
          <a>
            <Logo />
          </a>
        </Link>
      </span>
      <Search />
      <UserWithCart className={styles.userWithCart} itemsInCart={12} />
    </div>
  )
}

export default MiddleBar
