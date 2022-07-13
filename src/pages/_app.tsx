import type { AppProps } from 'next/app'
import Head from 'next/head'

import '~/styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Freshness ecommerce</title>
        <meta name="title" content="Freshness ecommerce" />
        <meta
          name="description"
          content="Freshness ecommerce - your favorite food"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* <link rel="icon" href="/icon.svg" type="image/svg+xml" /> */}
        {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> 180x180 */}
        {/* <link rel="manifest" href="/manifest.webmanifest" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
