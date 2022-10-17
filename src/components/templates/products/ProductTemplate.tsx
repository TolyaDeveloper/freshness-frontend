import { ProductTemplateProps } from './ProductTemplate.props'
import {
  Breadcrumbs,
  Typography,
  Rating,
  CustomLink,
  Arrow
} from '~/components/atoms'
import { pluralize } from '~/utils/pluralize'
import { ROUTES } from '~/constants/routes'
import { useRouter } from 'next/router'
import {
  FormStyledWrapper,
  Input,
  Select,
  Divider,
  Button
} from '~/components/atoms'
import AddIcon from '~/assets/icons/add.svg'
import WishListIcon from '~/assets/icons/wishlist.svg'
import CompareIcon from '~/assets/icons/compare.svg'
import Image from 'next/image'
import Link from 'next/link'

import styles from './ProductTemplate.module.scss'

const ProductTemplate = ({ product }: ProductTemplateProps) => {
  const { locale } = useRouter()

  return (
    <>
      <Breadcrumbs>
        <Typography level="body6">{product.categories[0].name}</Typography>
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
            <CustomLink href="#" color="primary1">
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
          <div className={styles.priceBlock}>
            <div>
              <Typography level="h2-xl" component="p" color="secondary">
                {new Intl.NumberFormat(locale, {
                  style: 'currency',
                  currency: 'USD',
                  currencyDisplay: 'code'
                }).format(product.price)}
              </Typography>
              {product.oldPrice && (
                <Typography
                  className={styles.oldPrice}
                  level="body5"
                  color="primary2"
                >
                  {new Intl.NumberFormat(locale, {
                    style: 'currency',
                    currency: 'USD',
                    currencyDisplay: 'code'
                  }).format(product.oldPrice)}
                </Typography>
              )}
            </div>
            <FormStyledWrapper className={styles.addBlock}>
              <Input />
              <Divider className={styles.divider} orienation="vertical" />
              <Select
                endAdornment={<Arrow color="primary2" orientation="down" />}
              >
                <option>1</option>
                <option>2</option>
                <option>5</option>
                <option>10</option>
                <option>15</option>
              </Select>
            </FormStyledWrapper>
            <Button startAdornment={<AddIcon />}>Add to cart</Button>
          </div>
          <div className={styles.wishlistWithCompareWrapper}>
            <Button
              variant="plain"
              startAdornment={<WishListIcon />}
              aria-label="Add to wishlist"
              type="button"
            >
              Add to my wishlist
            </Button>
            <Button
              variant="plain"
              startAdornment={<CompareIcon />}
              aria-label="Add to compare list"
              type="button"
            >
              Compare
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductTemplate
