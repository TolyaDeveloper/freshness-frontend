import { ProductContainerProps } from './ProductContainer.props'
import GridProduct from '../GridProduct/GridProduct'
import RowProduct from '../RowProduct/RowProduct'

const ProductContainer = ({ layout, products }: ProductContainerProps) => {
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

  return <ul>{renderedProducts}</ul>
}

export default ProductContainer
