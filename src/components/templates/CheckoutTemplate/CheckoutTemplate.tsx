import { Checkout } from '~/components/organisms'
import { Breadcrumbs, Typography, Copyright } from '~/components/atoms'

import styles from './CheckoutTemplate.module.scss'

const CheckoutTemplate = () => {
  return (
    <>
      <Breadcrumbs>
        <Typography level="body6">Checkout page</Typography>
      </Breadcrumbs>
      <Checkout />
      <Copyright className={styles.copyright} />
    </>
  )
}

export default CheckoutTemplate
