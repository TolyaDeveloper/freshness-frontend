import { forwardRef, LegacyRef } from 'react'
import { cnb } from 'cnbuilder'
import { TextareaProps } from './Textarea.props'

import styles from './Textarea.module.scss'

const Textarea = (
  { className, ...props }: TextareaProps,
  ref: LegacyRef<HTMLTextAreaElement>
) => {
  return (
    <textarea
      className={cnb(styles.textarea, className)}
      ref={ref}
      {...props}
    />
  )
}

export default forwardRef(Textarea)
