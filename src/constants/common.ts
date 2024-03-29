import { PAGES } from './routes'

export const META = {
  INITIAL_TITLE: 'Freshness ecommerce',
  INITIAL_DESCRIPTION: 'Freshness ecommerce - your favorite food!'
}

export const DEFAULT_AVATAR_PATH = '/images/avatars/default-avatar-96.png'

export const TOP_BAR = {
  CHAT: 'Chat with us',
  PHONE: '+420 336 775 664',
  EMAIL: 'info@freshnesecom.com',
  BLOG: 'Blog',
  ABOUT: 'About Us',
  CAREERS: 'Careers'
}

export const LOCAL_STORAGE_KEYS = {
  accessToken: 'accessToken',
  cart: 'cart',
  wishlist: 'wishlist',
  compare: 'compare'
}

export const FRESHNESS = 'freshness'
export const HOMEPAGE = 'Homepage'

export const footerLinks = [
  {
    title: 'Get in touch',
    links: [
      {
        id: 'fd5d63aa-b187-5f1c-bc35-9e330a96d767',
        value: 'About Us',
        href: PAGES.aboutUs
      },
      {
        id: '49c4ac6c-5139-55ad-8c65-ed691fe5a3b1',
        value: 'Careers',
        href: PAGES.careers
      },
      {
        id: 'e26fc7b9-d8ec-58b3-a343-bb23fe838e79',
        value: 'Press Releases',
        href: PAGES.blog
      },
      {
        id: 'f00f8a02-374f-50a8-9abc-1d116ca50421',
        value: 'Blog',
        href: PAGES.blog
      }
    ]
  },
  {
    title: 'Connections',
    links: [
      {
        id: 'e52c3f4d-4286-5402-9a16-4c8591e66573',
        value: 'Facebook',
        href: PAGES.home
      },
      {
        id: 'fe3b363f-50de-5c73-9723-f8d6cedc0d68',
        value: 'Twitter',
        href: PAGES.home
      },
      {
        id: 'b3585870-743d-5967-b051-e05349cde1f7',
        value: 'Instagram',
        href: PAGES.home
      },
      {
        id: 'a9573121-a430-5689-b238-d6efa8ed82fb',
        value: 'Youtube',
        href: PAGES.home
      },
      {
        id: 'd8137571-4ebf-5e8f-9d41-264c6ffd83ed',
        value: 'LinkedIn',
        href: PAGES.home
      }
    ]
  },
  {
    title: 'Earnings',
    links: [
      {
        id: '757303ff-ad10-568e-a467-d0c3d88bf423',
        value: 'Become an Affiliate',
        href: PAGES.home
      },
      {
        id: 'fc6c8731-2cce-55b7-9af5-5c0591dfe3de',
        value: 'Advertise your product',
        href: PAGES.home
      },
      {
        id: '7e348880-292e-5205-a050-d97e9f0a443b',
        value: 'Sell on Market',
        href: PAGES.home
      }
    ]
  },
  {
    title: 'Account',
    links: [
      {
        id: '54678083-e0f7-51ae-b497-b0b9d1dd09d8',
        value: 'Your account',
        href: PAGES.profile
      },
      {
        id: '195492b2-1b77-577e-b111-ec6a790c4f7f',
        value: 'Returns Centre',
        href: PAGES.home
      },
      {
        id: '326324c4-eb92-582e-8caf-ab58005a172d',
        value: '100 % purchase protection',
        href: PAGES.home
      },
      {
        id: 'd4dd6b3b-0296-50bf-a30d-5336ecd6c6ea',
        value: 'Chat with us',
        href: PAGES.chatWithUs
      },
      {
        id: 'baf46183-35e3-52fa-aecb-169f60e76401',
        value: 'Help',
        href: PAGES.help
      }
    ]
  }
]
