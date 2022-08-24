import { Arrow, Button, Typography } from '~/components/atoms'
import {
  AsideMenu,
  ProductContainer,
  PreSectionContainer,
  SliderComment,
  LargeBlog
} from '~/components/molecules'
import {
  AsideMenuWithBanner,
  AsideMenuWithProducts
} from '~/components/organisms'
import { useAppContext } from '~/context/AppContext/App.context'
import { LeftSliderArrow, RightSliderArrow } from '~/components/atoms'
import { ROUTES } from '~/constants/routes'
import Slider, { Settings } from 'react-slick'

import styles from './HomeTemplate.module.scss'

const HomeTemplate = () => {
  const { state } = useAppContext()

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
          <AsideMenu
            title="Best from farmers"
            buttonTitle="More categories"
            categories={state.categories}
          />
        }
      />
      <AsideMenuWithProducts
        className={styles.asideMenuWithProducts}
        asideMenu={
          <AsideMenu
            title="Best selling products"
            buttonTitle="More products"
            categories={state.categories}
          />
        }
        products={
          <ProductContainer
            layout="grid"
            products={state.products.slice(0, 3)}
          />
        }
      />
      <AsideMenuWithProducts
        className={styles.asideMenuWithProducts}
        asideMenu={
          <AsideMenu
            title="Best from farmers"
            buttonTitle="More products"
            categories={state.categories}
          />
        }
        products={
          <ProductContainer
            layout="grid"
            products={state.products.slice(3, 6)}
          />
        }
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
        {state.customersReviews.map(({ _id, ...rest }) => (
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
      <ProductContainer layout="grid" products={state.products.slice(0, 4)} />
      <PreSectionContainer
        className={styles.preSectionContainer}
        heading={<Typography level="h2-md">Read our Blog posts</Typography>}
        button={
          <Button href={ROUTES.blog} variant="plain" endAdornment={<Arrow />}>
            Go to Blog
          </Button>
        }
      />
      {state.blogPosts.slice(0, 1).map(blogPost => (
        <LargeBlog key={blogPost._id} {...blogPost} />
      ))}
    </>
  )
}

export default HomeTemplate
