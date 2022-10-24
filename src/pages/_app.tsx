import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { META } from '~/constants/common'
import { AppContextProvider } from '~/context/AppContext/App.context'
import { UserContextProvider } from '~/context/UserContext/User.context'
import { Layout } from '~/layout'
import { SWRConfig } from 'swr'
import { fetcher } from '~/utils/fetcher'
import AuthSetter from '~/layout/AuthSetter/AuthSetter'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'

import '~/styles/globals.scss'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ?? (page => <Layout {...page.props}>{page}</Layout>)

  return (
    <>
      <Head>
        <title>{META.INITIAL_TITLE}</title>
        <meta name="title" content={META.INITIAL_TITLE} />
        <meta name="description" content={META.INITIAL_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <NextNProgress
        color="#6a983c"
        startPosition={0.4}
        stopDelayMs={50}
        height={4}
      />
      <SWRConfig value={{ fetcher }}>
        <AppContextProvider>
          <UserContextProvider>
            <AuthSetter>{getLayout(<Component {...pageProps} />)}</AuthSetter>
          </UserContextProvider>
        </AppContextProvider>
      </SWRConfig>
    </>
  )
}

export default MyApp
