import { TagProps } from './Tag.props'
import { cnb } from 'cnbuilder'

import DeleteIcon from './delete.svg'

import styles from './Tag.module.scss'

const Tag = ({
  children,
  className,
  size = 'md',
  variant = 'contained',
  isRemovable = false,
  onRemoveTag,
  ...props
}: TagProps) => {
  return (
    <span
      className={cnb(styles.tag, styles[size], styles[variant], className)}
      {...props}
    >
      {children}
      {isRemovable && (
        <button
          className={styles.deleteButton}
          type="button"
          aria-label="Delete this tag"
          onClick={onRemoveTag}
        >
          <DeleteIcon className={styles.deleteSvg} />
        </button>
      )}
    </span>
  )
}

export default Tag
