import { cnb } from 'cnbuilder'
import { Typography } from '~/components/atoms'
import { LayoutChecker, Counter } from '~/components/molecules'
import { CategoryHeadlineProps } from './CategoryHeadline.props'
import { useAppContext } from '~/context/AppContext/App.context'

import styles from './CategoryHeadline.module.scss'

const CategoryHeadline = ({
  className,
  title,
  productsLength
}: CategoryHeadlineProps) => {
  const { state } = useAppContext()

  return (
    <div className={cnb(styles.categoryHeadline, className)}>
      <Typography level="h1">{title}</Typography>
      <LayoutChecker layout={state.layout} />
      <Counter title="Products" counter={productsLength} />
    </div>
  )
}

export default CategoryHeadline
