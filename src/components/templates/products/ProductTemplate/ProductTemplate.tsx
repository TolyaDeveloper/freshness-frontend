import { ProductTemplateProps } from './ProductTemplate.props'
import {
  Breadcrumbs,
  Typography,
  Rating,
  CustomLink,
  Tag,
  ProductsSkeleton,
  Button,
  Arrow
} from '~/components/atoms'
import {
  AddToWishlist,
  AddToCompare,
  ProductDescriptionBlock,
  ProductAddToCart,
  PreSectionContainer
} from '~/components/molecules'
import { Comments, ProductContainer } from '~/components/organisms'
import { pluralize } from '~/utils/pluralize'
import { PAGES } from '~/constants/routes'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'
import Image from 'next/image'
import Link from 'next/link'

import styles from './ProductTemplate.module.scss'

const ProductTemplate = ({
  product,
  questionsAndReviewsCount,
  relatedProducts
}: ProductTemplateProps) => {
  const reviewsCount = questionsAndReviewsCount?.reviewsCount[0]?.reviewsCount
  const questionsCount =
    questionsAndReviewsCount?.questionsCount[0]?.questionsCount

  const relatedProductsView = relatedProducts ? (
    <ProductContainer products={relatedProducts} layout="grid" />
  ) : (
    <ProductsSkeleton limit={4} />
  )

  return (
    <>
      <Breadcrumbs>
        <Link
          href={`${PAGES.categories}/${product.categories[0]._id}`}
          passHref
        >
          <CustomLink color="primary1">{product.categories[0].name}</CustomLink>
        </Link>
        <Typography level="body6">{product.title}</Typography>
      </Breadcrumbs>
      <div className={styles.productContainer}>
        <Image
          className={styles.image}
          src={`${process.env.NEXT_PUBLIC_IMAGES_URI}${product.imageUri}`}
          width={570}
          height={435}
          layout="responsive"
          objectFit="cover"
          alt={product.title}
        />
        <div>
          <Typography level="h1">{product.title}</Typography>
          <div className={styles.ratingWrapper}>
            <Rating className={styles.rating} rating={product.rating} />
            <CustomLink
              className={styles.reviewsLink}
              href="#reviews"
              color="primary1"
            >
              ({reviewsCount} customer{' '}
              {reviewsCount ? pluralize(reviewsCount, 'review') : 'reviews'})
            </CustomLink>
          </div>
          <Typography className={styles.description} level="body2">
            {product.description}
          </Typography>
          <div className={styles.detailedWrapper}>
            <div>
              <div className={styles.oneItemWrapper}>
                <Typography level="body4" color="primary2">
                  SKU
                </Typography>
                <Typography level="body4">{product.sku}</Typography>
              </div>
              <div className={styles.oneItemWrapper}>
                <Typography level="body4" color="primary2">
                  Category
                </Typography>
                <div>
                  {product.categories.map(({ _id, name }, index, arr) => (
                    <Link
                      key={_id}
                      href={`${PAGES.categories}/${_id}`}
                      passHref={true}
                    >
                      <CustomLink level="body2">
                        {name}
                        {index !== arr.length - 1 && ','}
                      </CustomLink>
                    </Link>
                  ))}
                </div>
              </div>
              <div className={styles.oneItemWrapper}>
                <Typography level="body4" color="primary2">
                  Stock
                </Typography>
                {product.inStock ? (
                  <Typography level="body4" color="secondary">
                    In Stock
                  </Typography>
                ) : (
                  <Typography level="body4">Not In Stock</Typography>
                )}
              </div>
              <div className={styles.oneItemWrapper}>
                <Typography level="body4" color="primary2">
                  Farm
                </Typography>
                <Typography level="body4">{product.farm}</Typography>
              </div>
            </div>
            <div>
              <div className={styles.oneItemWrapper}>
                <Typography level="body4" color="primary2">
                  Freshness
                </Typography>
                <Typography level="body4">{product.freshness}</Typography>
              </div>
              <div className={styles.oneItemWrapper}>
                <Typography level="body4" color="primary2">
                  Buy by
                </Typography>
                <Typography level="body4">{product.buyBy}</Typography>
              </div>
              <div className={styles.oneItemWrapper}>
                <Typography level="body4" color="primary2">
                  Delivery
                </Typography>
                <Typography level="body4">{product.deliveryTime}</Typography>
              </div>
              <div className={styles.oneItemWrapper}>
                <Typography level="body4" color="primary2">
                  Delivery area
                </Typography>
                <div>
                  {product.deliveryArea.map((area, index) => (
                    <Typography level="body4" key={index}>
                      {area}
                    </Typography>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <ProductAddToCart
            className={styles.productAddToCart}
            price={product.price}
            productId={product._id}
            oldPrice={product.oldPrice}
          />
          <div className={styles.wishlistWithCompareWrapper}>
            <AddToWishlist productId={product._id} variant="plain">
              Add to my wishlist
            </AddToWishlist>
            <AddToCompare productId={product._id} />
          </div>
          <Tabs id="reviews">
            <TabList>
              <Tab>Description</Tab>
              <Tab>
                Reviews{' '}
                <Tag className={styles.tabTag} size="sm">
                  {reviewsCount}
                </Tag>
              </Tab>
              <Tab>
                Questions{' '}
                <Tag className={styles.tabTag} size="sm">
                  {questionsCount}
                </Tag>
              </Tab>
            </TabList>

            <TabPanel>
              <ProductDescriptionBlock
                descriptionBlock={product.descriptionBlock}
              />
            </TabPanel>
            <TabPanel>
              <Comments productId={product._id} />
            </TabPanel>
            <TabPanel>
              <h2>Coming soon...</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      <PreSectionContainer
        className={styles.preSectionContainer}
        heading={<Typography level="h2-md">Related products</Typography>}
        button={
          <Link
            href={`${PAGES.categories}/${product.categories[0]._id}`}
            passHref
          >
            <Button variant="plain" endAdornment={<Arrow />}>
              More products
            </Button>
          </Link>
        }
      />
      {relatedProductsView}
    </>
  )
}

export default ProductTemplate
