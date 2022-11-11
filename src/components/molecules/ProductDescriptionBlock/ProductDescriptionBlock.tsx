import { ProductDescriptionBlockProps } from './ProductDescriptionBlock.props'
import { Typography } from '~/components/atoms'

import styles from './ProductDescriptionBlock.module.scss'

const ProductDescriptionBlock = ({
  descriptionBlock
}: ProductDescriptionBlockProps) => {
  return (
    <>
      {descriptionBlock.origins && (
        <div className={styles.descriptionBlock}>
          <Typography className={styles.title} level="h2-sm">
            Origins
          </Typography>
          <Typography level="body4">{descriptionBlock.origins}</Typography>
        </div>
      )}
      {descriptionBlock.howToCook && (
        <div className={styles.descriptionBlock}>
          <Typography className={styles.title} level="h2-sm">
            How to cook
          </Typography>
          <Typography level="body4">{descriptionBlock.howToCook}</Typography>
        </div>
      )}
      {descriptionBlock.vitamins?.length !== 0 && (
        <div className={styles.descriptionBlock}>
          <Typography className={styles.title} level="h2-sm">
            Full of Vitamins!
          </Typography>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.tableTitlesRow}>
                <Typography level="body5" component="th">
                  Vitamins
                </Typography>
                <Typography level="body5" component="th">
                  Quantity
                </Typography>
                <Typography level="body5" component="th">
                  % DV
                </Typography>
              </tr>
              {descriptionBlock.vitamins?.map(
                ({ dv, quantity, vitamin }, index) => (
                  <tr className={styles.tableItemsRow} key={index}>
                    <Typography level="body4" color="primary3" component="td">
                      {vitamin}
                    </Typography>
                    <Typography level="body4" color="primary3" component="td">
                      {quantity}
                    </Typography>
                    <Typography level="body4" color="primary3" component="td">
                      {dv}
                    </Typography>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}

export default ProductDescriptionBlock
