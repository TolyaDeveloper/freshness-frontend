import { cnb } from 'cnbuilder'
import { Logo } from '~/components/atoms'
import { Search, UserWithCart } from '~/components/molecules'
import { ROUTES } from '~/constants/routes'
import { MiddleBarProps } from './Middlebar.props'
import { useAppContext } from '~/context/AppContext/App.context'
import { useUserContext } from '~/context/UserContext/User.context'
import Link from 'next/link'

import styles from './MiddleBar.module.scss'

const MiddleBar = ({ className }: MiddleBarProps) => {
  const { state } = useUserContext()
  const { state: appContext } = useAppContext()

  return (
    <div className={cnb(styles.middleBar, className)}>
      <span>
        <Link href={ROUTES.home}>
          <a aria-label="Go home">
            <Logo />
          </a>
        </Link>
      </span>
      <Search className={styles.search} categories={appContext.categories} />
      <UserWithCart
        className={styles.userWithCart}
        itemsInCart={state.user.cart.length}
      />
    </div>
  )
}

export default MiddleBar
