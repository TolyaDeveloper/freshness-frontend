import { cnb } from 'cnbuilder'
import { TagProps } from './Tag.props'
import Link from 'next/link'
import DeleteIcon from '~/assets/icons/delete.svg'

import styles from './Tag.module.scss'

const Tag = ({
  children,
  className,
  size = 'md',
  variant = 'solid',
  isRemovable = false,
  onRemoveTag,
  href,
  ...props
}: TagProps) => {
  const content = href ? (
    <Link href={href} {...props}>
      <a>{children}</a>
    </Link>
  ) : (
    <>{children}</>
  )

  const deleteButton = isRemovable && (
    <button
      className={styles.deleteButton}
      type="button"
      aria-label="Delete this tag"
      onClick={onRemoveTag}
    >
      <DeleteIcon className={styles.deleteSvg} />
    </button>
  )

  return (
    <span className={cnb(styles.tag, styles[size], styles[variant], className)}>
      {content}
      {deleteButton}
    </span>
  )
}

export default Tag
