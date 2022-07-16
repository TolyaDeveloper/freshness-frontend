import type { AppProps } from 'next/app'
import { META } from '~/constants/common'
import Head from 'next/head'

import '~/styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
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
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
