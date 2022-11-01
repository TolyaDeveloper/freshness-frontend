import { GetStaticPaths, GetStaticProps } from 'next'
import { $api } from '~/api'
import { API } from '~/constants/routes'
import { IProduct } from '~/interfaces/product.interface'
import { ProductTemplate } from '~/components/templates'
import { ICategory } from '~/interfaces/category.interface'
import { IQuestionsReviewsCount } from '~/interfaces/questions-reviews-count.interface'
import { ITag } from '~/interfaces/tag.interface'
import useSWR from 'swr'
import Head from 'next/head'

interface ProductProps {
  categories: ICategory[]
  tags: ITag[]
  product: IProduct
}

const Product = ({ product }: ProductProps) => {
  const { data: count } = useSWR<IQuestionsReviewsCount>(
    `${API.products_reviewQuestions_count}/${product._id}`
  )

  const { data: relatedProducts } = useSWR<IProduct[]>(
    `${API.products}?category=${product.categories[0]._id}&limit=4`
  )

  return (
    <>
      <Head>
        <title>{`${product.title}`}</title>
      </Head>
      <ProductTemplate
        product={product}
        questionsAndReviewsCount={count}
        relatedProducts={relatedProducts}
      />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: products } = await $api.get<IProduct[]>(API.products)
  const paths = products.map(({ _id }) => ({
    params: { product: _id }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    return {
      notFound: true
    }
  }

  const { data: categories } = await $api.get(API.categories)
  const { data: tags } = await $api.get(API.tags)
  const { data: product } = await $api.get(`${API.products}/${params.product}`)

  return {
    props: { categories, tags, product },
    revalidate: 120
  }
}

export default Product
