import { OrdersHistoryProps } from './OrdersHistory.props'
import { useUserContext } from '~/context/UserContext/User.context'
import { EmptyData, OrderHistoryProduct } from '~/components/molecules'
import { IProduct } from '~/interfaces/product.interface'
import { buildQueriesFromArray } from '~/utils/queries'
import { API } from '~/constants/routes'
import useSWR from 'swr'

const OrdersHistory = ({}: OrdersHistoryProps) => {
  const {
    state: { user }
  } = useUserContext()

  const queries = new Set(user.ordersHistory)

  const { data: products } = useSWR<IProduct[]>(
    `${API.user_products_ids}?${buildQueriesFromArray([...queries])}`
  )

  if (user.ordersHistory.length === 0) {
    return <EmptyData title="Orders history is empty" />
  }

  if (!products) {
    return null
  }

  return (
    <ul className="grid-product">
      {products.map(product => (
        <li key={product._id}>
          <OrderHistoryProduct product={product} />
        </li>
      ))}
    </ul>
  )
}

export default OrdersHistory
