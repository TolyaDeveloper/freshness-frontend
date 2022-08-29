import { memo } from 'react'
import { cnb } from 'cnbuilder'
import { Typography, Tag } from '~/components/atoms'
import { useAppContext } from '~/context/AppContext/App.context'
import { ROUTES } from '~/constants/routes'
import { FooterTagsProps } from './FooterTags.props'

import styles from './FooterTags.module.scss'

const FooterTags = ({ className }: FooterTagsProps) => {
  const { state } = useAppContext()

  const renderedTags = state.tags.map(({ _id, name }) => (
    <li className={styles.tagsItem} key={_id}>
      <Tag href={`${ROUTES.tags}/${_id}`}>{name}</Tag>
    </li>
  ))

  return (
    <div className={cnb(styles.footerTags, className)}>
      <Typography level="h2-md">Product tags</Typography>
      <ul className={styles.tagsList}>{renderedTags}</ul>
    </div>
  )
}

export default memo(FooterTags)
