import { WishlistProps } from './Wishlist.props'
import { useUserContext } from '~/context/UserContext/User.context'
import { Typography, Button } from '~/components/atoms'
import { ROUTES } from '~/constants/routes'
import { buildQueriesFromArray } from '~/utils/queries'
import useSWR from 'swr'
import Link from 'next/link'

import styles from './Wishlist.module.scss'

const Wishlist = ({}: WishlistProps) => {
  const {
    state: { user }
  } = useUserContext()

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

  return <div>Wishlist</div>
}

export default Wishlist
