import { OrderSummaryProps } from './OrderSummary.props'
import {
  Button,
  FormStyledWrapper,
  Input,
  Typography
} from '~/components/atoms'
import { CheckoutProduct } from '~/components/molecules'
import { useUserContext } from '~/context/UserContext/User.context'
import { buildQueriesFromArray } from '~/utils/queries'
import { IProduct } from '~/interfaces/product.interface'
import { API } from '~/constants/routes'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import useSWR from 'swr'

import styles from './OrderSummary.module.scss'

const OrderSummary = ({}: OrderSummaryProps) => {
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

  if (!products) {
    return null
  }

  return (
    <div className={styles.orderSummary}>
      <Typography level="h2-lg">Order Summary</Typography>
      <Typography className={styles.subtitle} level="body6" color="primary2">
        Price can change depending on shipping method and taxes of your state.
      </Typography>
      <ul>
        {products.map(product => (
          <li className={styles.checkoutProduct} key={product._id}>
            <CheckoutProduct product={product} />
          </li>
        ))}
      </ul>
      <div className={styles.detailedPriceWrapper}>
        <Typography className={styles.detailedPriceTitle} level="body5">
          Subtotal
        </Typography>
        <Typography level="body5">
          {new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: 'USD',
            currencyDisplay: 'code'
          }).format(totalPrice as number)}
        </Typography>
      </div>
      <div className={styles.detailedPriceWrapper}>
        <Typography className={styles.detailedPriceTitle} level="body5">
          Shipping
        </Typography>
        <Typography level="body5">0</Typography>
      </div>
      <FormStyledWrapper className={styles.promocode}>
        <Input
          disabled
          type="text"
          placeholder="Promo codes coming soon...."
          endAdornment={
            <Button type="button" variant="plain" size="lg">
              Apply now
            </Button>
          }
        />
      </FormStyledWrapper>
      <div className={styles.totalOrder}>
        <Typography level="body5">Total Order</Typography>
        <Typography level="h2-xl" component="p" color="secondary">
          {new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: 'USD',
            currencyDisplay: 'code'
          }).format(totalPrice as number)}
        </Typography>
      </div>
    </div>
  )
}

export default OrderSummary
