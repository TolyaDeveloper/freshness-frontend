import { PropsWithChildren } from 'react'
import { Divider } from '~/components/atoms'
import { TopBar } from '~/components/molecules'
import { MiddleBar } from '~/components/organisms'

import styles from './Layout.module.scss'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <TopBar className={styles.topBar} />
          <Divider />
          <MiddleBar className={styles.middleBar} />
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>FOOTER</footer>
      </div>
    </>
  )
}

export default Layout
