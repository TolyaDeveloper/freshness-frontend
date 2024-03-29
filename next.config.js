/** @type {import('next').NextConfig} */

module.exports = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  poweredByHeader: false,
  experimental: { scrollRestoration: true },
  images: { domains: ['localhost'] },
  reactStrictMode: false,
  swcMinify: true,
  webpack(config, options) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      issuer: /\.[jt]sx?$/,
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                override: {
                  removeViewBox: false
                }
              }
            }
          ]
        },
        titleProp: true
      },
      test: /\.svg$/
    })

    return config
  }
}
