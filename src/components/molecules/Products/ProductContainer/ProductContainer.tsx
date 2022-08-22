import { cnb } from 'cnbuilder'
import { ProductContainerProps } from './ProductContainer.props'
import { useAppContext } from '~/context/AppContext/App.context'
import GridProduct from '../GridProduct/GridProduct'
import RowProduct from '../RowProduct/RowProduct'

import styles from './ProductContainer.module.scss'

const ProductContainer = ({ layout, products }: ProductContainerProps) => {
  const { dispatch, state } = useAppContext()

  const renderedProducts =
    layout === 'grid'
      ? products.map(product => (
          <li key={product._id}>
            <GridProduct
              product={product}
              setInCart={() =>
                dispatch({ type: 'SET_CART', payload: product._id })
              }
              isAlreadyInCart={state.cart.includes(product._id)}
            />
          </li>
        ))
      : products.map(product => (
          <li key={product._id}>
            <RowProduct
              product={product}
              setInCart={() =>
                dispatch({ type: 'SET_CART', payload: product._id })
              }
              isAlreadyInCart={state.cart.includes(product._id)}
            />
          </li>
        ))

  return <ul className={cnb(styles[layout])}>{renderedProducts}</ul>
}

export default ProductContainer
