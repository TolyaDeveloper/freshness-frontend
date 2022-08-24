import { PropsWithChildren, useEffect } from 'react'
import { Divider } from '~/components/atoms'
import { TopBar, Navbar } from '~/components/molecules'
import { MiddleBar } from '~/components/organisms'
import { IAppState } from '~/context/AppContext/App.types'
import { useAppContext } from '~/context/AppContext/App.context'

import styles from './Layout.module.scss'

const Layout = ({
  children,
  categories,
  products,
  customersReviews,
  blogPosts,
  tags
}: PropsWithChildren<Omit<IAppState, 'layout'>>) => {
  const { dispatch } = useAppContext()

  // ? refactor

  useEffect(() => {
    categories && dispatch({ type: 'SET_CATEGORIES', payload: categories })
  }, [categories, dispatch])

  useEffect(() => {
    products && dispatch({ type: 'SET_PRODUCTS', payload: products })
  }, [products, dispatch])

  useEffect(() => {
    customersReviews &&
      dispatch({ type: 'SET_CUSTOMERS_REVIEWS', payload: customersReviews })
  }, [customersReviews, dispatch])

  useEffect(() => {
    blogPosts && dispatch({ type: 'SET_BLOG_POSTS', payload: blogPosts })
  }, [blogPosts, dispatch])

  useEffect(() => {
    tags && dispatch({ type: 'SET_TAGS', payload: tags })
  }, [tags, dispatch])

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <TopBar className={styles.topBar} />
          <Divider />
          <MiddleBar className={styles.middleBar} />
          <Navbar categoryItems={categories} />
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>FOOTER</footer>
      </div>
    </>
  )
}

export default Layout
