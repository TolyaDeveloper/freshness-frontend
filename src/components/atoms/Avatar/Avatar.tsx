import { cnb } from 'cnbuilder'
import { AvatarProps } from './Avatar.props'
import Image from 'next/image'

import styles from './Avatar.module.scss'

const Avatar = ({
  className,
  width = 48,
  height = 48,
  src,
  alt,
  ...props
}: AvatarProps) => (
  <Image
    className={cnb(styles.avatar, className)}
    src={src}
    alt={alt}
    width={width}
    height={height}
    objectFit="cover"
    {...props}
  />
)

export default Avatar
