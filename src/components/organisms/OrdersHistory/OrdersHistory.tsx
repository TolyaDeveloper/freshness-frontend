import { OrdersHistoryProps } from './OrdersHistory.props'
import { useUserContext } from '~/context/UserContext/User.context'
import { EmptyData } from '~/components/molecules'

const OrdersHistory = ({}: OrdersHistoryProps) => {
  const {
    state: { user }
  } = useUserContext()

  if (user.wishlist.length === 0) {
    return <EmptyData title="Orders history is empty" />
  }
  return <div>OrdersHistory</div>
}

export default OrdersHistory
