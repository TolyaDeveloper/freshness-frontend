import { cnb } from 'cnbuilder'
import { BannerProps } from './Banner.props'
import { Arrow, Button, Typography } from '~/components/atoms'
import BannerBg from '~/assets/images/banner-bg.png'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Banner.module.scss'

const Banner = ({
  className,
  subfocus,
  title,
  linkTitle = 'Read',
  href
}: BannerProps) => (
  <div className={cnb(styles.banner, className)}>
    <Image
      className={styles.image}
      src={BannerBg}
      layout="fill"
      objectFit="cover"
      alt="Banner"
      placeholder="blur"
    />
    <div className={styles.content}>
      {subfocus && (
        <Typography className={styles.subfocus} level="body5" color="secondary">
          {subfocus}
        </Typography>
      )}
      <Typography className={styles.title} level="h2-lg">
        {title}
      </Typography>
      <Link href={href} passHref>
        <Button
          className={styles.button}
          variant="outlined"
          endAdornment={<Arrow />}
        >
          {linkTitle}
        </Button>
      </Link>
    </div>
  </div>
)

export default Banner
