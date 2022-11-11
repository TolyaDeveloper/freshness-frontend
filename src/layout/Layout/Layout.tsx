import { PropsWithChildren, useEffect } from 'react'
import { Divider, Typography, Copyright } from '~/components/atoms'
import { TopBar, Navbar, FooterTags } from '~/components/molecules'
import { MiddleBar, FooterLinks } from '~/components/organisms'
import { IAppState } from '~/context/AppContext/App.types'
import { useAppContext } from '~/context/AppContext/App.context'

import styles from './Layout.module.scss'

const Layout = ({
  children,
  categories,
  tags
}: PropsWithChildren<Omit<IAppState, 'layout'>>) => {
  const { dispatch } = useAppContext()

  useEffect(() => {
    categories && dispatch({ type: 'SET_CATEGORIES', payload: categories })
  }, [categories, dispatch])

  useEffect(() => {
    tags && dispatch({ type: 'SET_TAGS', payload: tags })
  }, [tags, dispatch])

  return (
    <div className="container">
      <header className={styles.header}>
        <TopBar className={styles.topBar} />
        <Divider />
        <MiddleBar className={styles.middleBar} />
        <Navbar categoryItems={categories} />
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <FooterLinks className={styles.footerLinks} />
        <FooterTags className={styles.footerTags} tags={tags} />
        <Copyright className={styles.copyright} />
      </footer>
    </div>
  )
}

export default Layout
