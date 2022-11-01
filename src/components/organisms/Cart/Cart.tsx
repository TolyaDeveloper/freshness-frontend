import { CartProps } from './Cart.props'
import { useUserContext } from '~/context/UserContext/User.context'
import { Button, Typography } from '~/components/atoms'
import { PAGES } from '~/constants/routes'
import { CartProduct } from '~/components/molecules'
import Link from 'next/link'

import styles from './Cart.module.scss'

const Cart = ({}: CartProps) => {
  const {
    state: { user }
  } = useUserContext()

  if (user.cart.length === 0) {
    return (
      <div className={styles.emptyCartWrapper}>
        <Typography level="h2-lg">Cart is empty</Typography>
        <Link href={PAGES.home} passHref>
          <Button className={styles.moreLink} variant="outlined">
            Find more products
          </Button>
        </Link>
      </div>
    )
  }

  return <>cart</>
}

export default Cart
