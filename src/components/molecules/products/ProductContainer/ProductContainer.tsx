import { cnb } from 'cnbuilder'
import { ProductContainerProps } from './ProductContainer.props'
import GridProduct from '../GridProduct/GridProduct'
import RowProduct from '../RowProduct/RowProduct'

import styles from './ProductContainer.module.scss'

const ProductContainer = ({
  className,
  layout,
  products
}: ProductContainerProps) => {
  const renderedProducts =
    layout === 'grid'
      ? products.map(product => (
          <li key={product._id}>
            <GridProduct product={product} />
          </li>
        ))
      : products.map(product => (
          <li key={product._id}>
            <RowProduct product={product} />
          </li>
        ))

  return <ul className={cnb(styles[layout], className)}>{renderedProducts}</ul>
}

export default ProductContainer
