import { ProductTemplateProps } from './ProductTemplate.props'
import {
  Breadcrumbs,
  Typography,
  Rating,
  CustomLink,
  Tag
} from '~/components/atoms'
import {
  AddToWishlist,
  AddToCompare,
  ProductDescriptionBlock
} from '~/components/molecules'
import { pluralize } from '~/utils/pluralize'
import { ROUTES } from '~/constants/routes'
import { ProductAddToCart } from '~/components/molecules'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'
import Image from 'next/image'
import Link from 'next/link'

import styles from './ProductTemplate.module.scss'

const ProductTemplate = ({ product }: ProductTemplateProps) => {
  return (
    <>
      <Breadcrumbs>
        <Link
          href={`${ROUTES.categories}/${product.categories[0]._id}`}
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
              href="#"
              color="primary1"
            >
              ({product.reviews.length} customer{' '}
              {pluralize(product.reviews.length, 'review')})
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
                      href={`${ROUTES.categories}/${_id}`}
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
            <AddToWishlist productId={product._id} />
            <AddToCompare productId={product._id} />
          </div>
          <Tabs>
            <TabList>
              <Tab>Description</Tab>
              <Tab>
                Reviews{' '}
                <Tag className={styles.tabTag} size="sm">
                  {product.reviews.length}
                </Tag>
              </Tab>
              <Tab>
                Questions{' '}
                <Tag className={styles.tabTag} size="sm">
                  {product.questions.length}
                </Tag>
              </Tab>
            </TabList>

            <TabPanel>
              <ProductDescriptionBlock
                descriptionBlock={product.descriptionBlock}
              />
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 3</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default ProductTemplate
