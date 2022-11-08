import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { CheckoutProps } from './Checkout.props'
import { ICheckoutFields } from '~/validators/checkout.validator'
import {
  BillingInfo,
  PaymentMethod,
  AdditionalInformation,
  Confirmation,
  OrderSummary
} from '~/components/organisms'
import { Button, Typography, SecuritySafety } from '~/components/atoms'
import { useUserContext } from '~/context/UserContext/User.context'
import { useRouter } from 'next/router'
import userService from '~/services/user.service'

import styles from './Checkout.module.scss'
import { PAGES } from '~/constants/routes'

const Checkout = ({}: CheckoutProps) => {
  const { push } = useRouter()
  const {
    state: { user, isAuthenticated },
    dispatch
  } = useUserContext()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<ICheckoutFields>()

  useEffect(() => {
    if (isAuthenticated) {
      setValue('firstName', user.firstName)
      setValue('lastName', user.lastName)
      setValue('email', user.email)
    }
  }, [isAuthenticated])

  const onSubmit = async () => {
    const cartProducts = user.cart.map(item => item.productId)

    if (isAuthenticated) {
      const { data: newOrder } = await userService.createOrder(cartProducts)

      dispatch({ type: 'SET_ORDERS_HISTORY', payload: newOrder.ordersHistory })
    }

    dispatch({ type: 'SET_CART', payload: [] })
    push(PAGES.profile)
  }

  return (
    <>
      <div className={styles.checkoutWrapper}>
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <Typography className={styles.billingTitle} level="h2-lg">
            Billing info
          </Typography>
          <div className={styles.stepWrapper}>
            <Typography level="body6" component="h3" color="primary2">
              Please enter your billing info
            </Typography>
            <Typography level="body6" color="primary2">
              Step 1 of 4
            </Typography>
          </div>
          <BillingInfo
            className={styles.formStep}
            register={register}
            errors={errors}
          />
          <Typography className={styles.billingTitle} level="h2-lg">
            Payment method
          </Typography>
          <div className={styles.stepWrapper}>
            <Typography level="body6" component="h3" color="primary2">
              Please enter your payment method
            </Typography>
            <Typography level="body6" color="primary2">
              Step 2 of 4
            </Typography>
          </div>
          <PaymentMethod
            className={styles.formStep}
            register={register}
            errors={errors}
          />
          <Typography className={styles.billingTitle} level="h2-lg">
            Additional information
          </Typography>
          <div className={styles.stepWrapper}>
            <Typography level="body6" component="h3" color="primary2">
              Need something else? We will make it for you!
            </Typography>
            <Typography level="body6" color="primary2">
              Step 3 of 4
            </Typography>
          </div>
          <AdditionalInformation
            className={styles.formStep}
            register={register}
          />
          <Typography className={styles.billingTitle} level="h2-lg">
            Confirmation
          </Typography>
          <div className={styles.stepWrapper}>
            <Typography level="body6" component="h3" color="primary2">
              We are getting to the end. Just few clicks and your order si
              ready!
            </Typography>
            <Typography level="body6" color="primary2">
              Step 4 of 4
            </Typography>
          </div>
          <Confirmation
            className={styles.formStep}
            register={register}
            errors={errors}
          />
          <Button type="submit" disabled={user.cart.length === 0}>
            Complete order
          </Button>
          <SecuritySafety className={styles.security} />
        </form>
        <OrderSummary />
      </div>
    </>
  )
}

export default Checkout
