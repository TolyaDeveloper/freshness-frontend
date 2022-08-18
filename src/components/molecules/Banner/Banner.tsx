import { BannerProps } from './Banner.props'
import { Arrow, Button, Typography } from '~/components/atoms'
import BannerBg from '~/assets/images/banner-bg.png'
import Image from 'next/image'

import styles from './Banner.module.scss'

const Banner = ({ subfocus, title, linkTitle = 'Read' }: BannerProps) => {
  return (
    <div className={styles.banner}>
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
          <Typography
            className={styles.subfocus}
            level="body5"
            color="secondary"
          >
            {subfocus}
          </Typography>
        )}
        <Typography className={styles.title} level="h2-lg">
          {title}
        </Typography>
        {/* ! todo */}
        <Button
          className={styles.button}
          variant="outlined"
          endAdornment={<Arrow />}
        >
          {linkTitle}
        </Button>
      </div>
    </div>
  )
}

export default Banner
