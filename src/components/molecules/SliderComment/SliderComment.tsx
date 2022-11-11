import { cnb } from 'cnbuilder'
import { Typography, Avatar } from '~/components/atoms'
import { SliderCommentProps } from './SliderComment.props'

import styles from './SliderComment.module.scss'

const SliderComment = ({
  className,
  quote,
  fullname,
  avatarUri
}: SliderCommentProps) => (
  <div className={cnb(styles.sliderComment, className)}>
    <Typography
      className={styles.blockquote}
      component="blockquote"
      level="body3"
    >
      {quote}
    </Typography>
    <Typography level="body5" color="primary2">
      {fullname}
    </Typography>
    <div className={styles.avatar}>
      <Avatar
        src={`${process.env.NEXT_PUBLIC_IMAGES_URI}/${avatarUri}`}
        alt={fullname}
      />
    </div>
  </div>
)

export default SliderComment
