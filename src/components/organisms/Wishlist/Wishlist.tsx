import { WishlistProps } from './Wishlist.props'
import { useUserContext } from '~/context/UserContext/User.context'
import { Typography, Button, ProductsSkeleton } from '~/components/atoms'
import { ROUTES } from '~/constants/routes'
import { buildQueriesFromArray } from '~/utils/queries'
import { IProduct } from '~/interfaces/product.interface'
import ProductContainer from '../ProductContainer/ProductContainer'
import useSWR from 'swr'
import Link from 'next/link'

import styles from './Wishlist.module.scss'

const Wishlist = ({}: WishlistProps) => {
  const {
    state: { user }
  } = useUserContext()

  const { data: products } = useSWR<IProduct[]>(
    user.wishlist.length !== 0
      ? `${ROUTES.user_products_ids}?${buildQueriesFromArray(user.wishlist)}`
      : null
  )

  if (user.wishlist.length === 0) {
    return (
      <div className={styles.emptyWishlistWrapper}>
        <Typography level="h2-lg">Wishlist is empty</Typography>
        <Link href={ROUTES.home} passHref>
          <Button className={styles.moreLink} variant="outlined">
            Find more products
          </Button>
        </Link>
      </div>
    )
  }

  if (!products) {
    return <ProductsSkeleton limit={4} />
  }

  return (
    <>
      <ProductContainer products={products} layout="grid" />
    </>
  )
}

export default Wishlist
