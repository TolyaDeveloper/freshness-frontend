import { ProductCategoryTemplateProps } from './ProductCategoryTemplate.props'

const ProductCategoryTemplate = ({
  productsWithFiltersView
}: ProductCategoryTemplateProps) => {
  return (
    <>
      <section>{productsWithFiltersView}</section>
    </>
  )
}

export default ProductCategoryTemplate
