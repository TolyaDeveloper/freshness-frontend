import { cnb } from 'cnbuilder'
import { AsideMenuWithProductsProps } from './AsideMenuWithProducts.props'

import styles from './AsideMenuWithProducts.module.scss'

const AsideMenuWithProducts = ({
  className,
  asideMenu,
  products
}: AsideMenuWithProductsProps) => {
  return (
    <div className={cnb(styles.asideMenuWithProducts, className)}>
      {asideMenu}
      {products}
    </div>
  )
}

export default AsideMenuWithProducts
