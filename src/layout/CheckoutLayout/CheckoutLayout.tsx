import { PropsWithChildren, useEffect } from 'react'
import { Divider } from '~/components/atoms'
import { Navbar, TopBar } from '~/components/molecules'
import { MiddleBar } from '~/components/organisms'
import { IAppState } from '~/context/AppContext/App.types'
import { useAppContext } from '~/context/AppContext/App.context'

import styles from './CheckoutLayout.module.scss'

const CheckoutLayout = ({
  children,
  categories
}: PropsWithChildren<Pick<IAppState, 'categories'>>) => {
  const { dispatch } = useAppContext()

  useEffect(() => {
    categories && dispatch({ type: 'SET_CATEGORIES', payload: categories })
  }, [categories, dispatch])

  return (
    <div className="container">
      <header className={styles.header}>
        <TopBar className={styles.topBar} />
        <Divider />
        <MiddleBar className={styles.middleBar} />
        <Navbar categoryItems={categories} />
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default CheckoutLayout
