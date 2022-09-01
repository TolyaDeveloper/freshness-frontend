import { Breadcrumbs, Typography } from '~/components/atoms'
import { Counter, LayoutChecker } from '~/components/molecules'
import { useAppContext } from '~/context/AppContext/App.context'

import styles from './ProductCategoryTemplate.module.scss'

const ProductCategoryTemplate = () => {
  const { state } = useAppContext()

  return (
    <>
      <Breadcrumbs>
        <Typography level="body6">
          {/* {products.category?.name as ReactNode} */} test
        </Typography>
      </Breadcrumbs>
      <div className={styles.prePage}>
        <Typography level="h1">test</Typography>
        <LayoutChecker layout={state.layout} />
        <Counter title="Products" counter={state.products.length} />
      </div>

      <pre>{JSON.stringify(state.products, null, 2)}</pre>
    </>
  )
}

export default ProductCategoryTemplate
