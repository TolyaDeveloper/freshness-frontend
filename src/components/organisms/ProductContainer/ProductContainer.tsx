import { cnb } from 'cnbuilder'
import { ProductContainerProps } from './ProductContainer.props'
import { GridProduct, RowProduct } from '~/components/molecules'

import styles from './ProductContainer.module.scss'

const ProductContainer = ({
  className,
  layout,
  products,
  maxProducts
}: ProductContainerProps) => {
  const renderedProducts =
    layout === 'grid'
      ? products.slice(0, maxProducts).map(product => (
          <li key={product._id}>
            <GridProduct product={product} />
          </li>
        ))
      : products.slice(0, maxProducts).map(product => (
          <li key={product._id}>
            <RowProduct product={product} />
          </li>
        ))

  return <ul className={cnb(styles[layout], className)}>{renderedProducts}</ul>
}

export default ProductContainer
