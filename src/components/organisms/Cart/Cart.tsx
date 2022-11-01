import { CartProps } from './Cart.props'
import { useUserContext } from '~/context/UserContext/User.context'
import { API, PAGES } from '~/constants/routes'
import { EmptyData, CartProduct } from '~/components/molecules'
import { buildQueriesFromArray } from '~/utils/queries'
import { useRouter } from 'next/router'
import { IProduct } from '~/interfaces/product.interface'
import { useMemo } from 'react'
import { Button, Typography } from '~/components/atoms'
import useSWR from 'swr'

import styles from './Cart.module.scss'
import Link from 'next/link'

const Cart = ({}: CartProps) => {
  const {
    state: { user }
  } = useUserContext()
  const queries = buildQueriesFromArray(
    user.cart.map(product => product.productId)
  )
  const { data: products } = useSWR<IProduct[]>(
    user.cart.length !== 0 ? `${API.user_products_ids}?${queries}` : null
  )
  const { locale } = useRouter()

  const totalPrice = useMemo(() => {
    return products?.reduce((total, product) => {
      const quantity = user.cart.find(
        cartProduct => cartProduct.productId === product._id
      )?.quantity

      if (!quantity) {
        return 0
      }

      return total + quantity * product.price
    }, 0)
  }, [user.cart, products])

  if (user.cart.length === 0) {
    return <EmptyData className={styles.wrapper} title="Cart is empty" />
  }

  if (!products) {
    return null
  }

  return (
    <div className={styles.cart}>
      <ul className="grid-product">
        {products.map(product => (
          <li key={product._id}>
            <CartProduct product={product} />
          </li>
        ))}
      </ul>
      <div className={styles.totalPriceWrapper}>
        <Typography className={styles.totalPriceText} level="body1">
          Total price:
        </Typography>
        <Typography level="body1" color="secondary">
          {new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: 'USD',
            currencyDisplay: 'code'
          }).format(totalPrice as number)}
        </Typography>
      </div>
      <Link href={PAGES.checkout} passHref>
        <Button className={styles.checkoutLink} type="button">
          Checkout
        </Button>
      </Link>
    </div>
  )
}

export default Cart
