import {
  Arrow,
  Button,
  CustomLink,
  ProductsSkeleton,
  Typography
} from '~/components/atoms'
import {
  LoadMoreList,
  PreSectionContainer,
  SliderComment
} from '~/components/molecules'
import {
  AsideMenuWithBanner,
  AsideMenuWithProducts,
  BlogPreviews,
  ProductContainer
} from '~/components/organisms'
import { LeftSliderArrow, RightSliderArrow } from '~/components/atoms'
import { PAGES } from '~/constants/routes'
import { HomeTemplateProps } from './HomeTemplate.props'
import Slider, { Settings } from 'react-slick'
import Link from 'next/link'

import styles from './HomeTemplate.module.scss'

const HomeTemplate = ({
  categories,
  blogPosts,
  customersReviews,
  products
}: HomeTemplateProps) => {
  const renderedCategories = categories.map(({ _id, name }) => (
    <Link
      key={_id}
      href={`${PAGES.categories}/${_id}`}
      passHref
      prefetch={false}
    >
      <CustomLink underline="always" level="body2">
        {name}
      </CustomLink>
    </Link>
  ))

  const productsView = products ? (
    <ProductContainer layout="grid" products={products} maxProducts={3} />
  ) : (
    <ProductsSkeleton limit={3} />
  )

  const sliderSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20%',
    prevArrow: <LeftSliderArrow className={styles.prevArrow} />,
    nextArrow: <RightSliderArrow className={styles.nextArrow} />,
    responsive: [
      { breakpoint: 991, settings: { slidesToShow: 2, centerPadding: '0' } },
      { breakpoint: 767, settings: { slidesToShow: 1, centerPadding: '20%' } },
      { breakpoint: 575, settings: { slidesToShow: 1, centerPadding: '0' } }
    ]
  }

  return (
    <>
      <AsideMenuWithBanner
        className={styles.asideMenuWithBanner}
        asideMenu={
          <LoadMoreList
            title="Best from farmers"
            buttonTitle="More categories"
            limit={5}
          >
            {renderedCategories}
          </LoadMoreList>
        }
      />
      <AsideMenuWithProducts
        className={styles.asideMenuWithProducts}
        asideMenu={
          <LoadMoreList
            title="Best selling products"
            buttonTitle="More products"
            limit={5}
          >
            {renderedCategories}
          </LoadMoreList>
        }
        products={productsView}
      />
      <AsideMenuWithProducts
        className={styles.asideMenuWithProducts}
        asideMenu={
          <LoadMoreList
            title="Best from farmers"
            buttonTitle="More products"
            limit={5}
          >
            {renderedCategories}
          </LoadMoreList>
        }
        products={productsView}
      />
      <PreSectionContainer
        className={styles.preSectionContainer}
        heading={<Typography level="h2-md">Our customers says</Typography>}
        button={
          <Button variant="plain" endAdornment={<Arrow />}>
            Button
          </Button>
        }
      />
      <Slider className={styles.slider} {...sliderSettings}>
        {customersReviews.map(({ _id, ...rest }) => (
          <SliderComment className={styles.sliderComment} key={_id} {...rest} />
        ))}
      </Slider>
      <PreSectionContainer
        className={styles.preSectionContainer}
        heading={<Typography level="h2-md">Section Headline</Typography>}
        button={
          <Button variant="plain" endAdornment={<Arrow />}>
            Button
          </Button>
        }
      />
      {productsView}
      <PreSectionContainer
        className={styles.blogPostPreSection}
        heading={<Typography level="h2-md">Read our Blog posts</Typography>}
        button={
          <Link href={PAGES.blog} passHref>
            <Button variant="plain" endAdornment={<Arrow />}>
              Go to Blog
            </Button>
          </Link>
        }
      />
      <BlogPreviews className={styles.blogPreviews} blogs={blogPosts} />
    </>
  )
}

export default HomeTemplate
