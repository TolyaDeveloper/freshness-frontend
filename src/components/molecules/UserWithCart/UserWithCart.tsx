import { cnb } from 'cnbuilder'
import { ROUTES } from '~/constants/routes'
import { UserWithCartProps } from './UserWithCart.props'
import UserIcon from '~/assets/icons/user.svg'
import CartIcon from '~/assets/icons/cart.svg'
import Link from 'next/link'

import styles from './UserWithCart.module.scss'

const UserWithCart = ({
  className,
  itemsInCart = 0,
  ...props
}: UserWithCartProps) => {
  return (
    <div className={cnb(styles.userWithCart, className)} {...props}>
      <Link href={ROUTES.profile}>
        <a aria-label="Open your profile page">
          <UserIcon />
        </a>
      </Link>
      <Link href={ROUTES.cart}>
        <a className={styles.cartIcon} aria-label="Open your cart">
          <CartIcon />
          <span className={styles.chip}>
            {itemsInCart > 9 ? '9+' : itemsInCart}
          </span>
        </a>
      </Link>
    </div>
  )
}

export default UserWithCart
