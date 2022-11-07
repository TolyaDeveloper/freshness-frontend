import { ChangeEvent, useState } from 'react'
import { cnb } from 'cnbuilder'
import {
  Arrow,
  Divider,
  FormStyledWrapper,
  Input,
  Select
} from '~/components/atoms'
import { QuantityPickerProps } from './QuantityPicker.props'
import { ProductCartVariantEnum } from '~/interfaces/cart.interface'

import styles from './QuantityPicker.module.scss'

const QuantityPicker = ({
  className,
  disabled = false,
  productAmount,
  productVariant,
  onChange,
  rootClassname
}: QuantityPickerProps) => {
  const [quantity, setQuantity] = useState({
    productAmount: productAmount || 1,
    productVariant: productVariant || ProductCartVariantEnum.PCS
  })

  const onChangeQuantity = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const fieldName = e.target.name
    const fieldValue = e.target.value
    let error = false

    if (fieldName === 'productAmount' && +fieldValue < 1) {
      error = true
    }

    const newQuantity = { ...quantity, [fieldName]: fieldValue }

    setQuantity(newQuantity)
    onChange && onChange(newQuantity, error)
  }

  return (
    <form className={rootClassname} autoComplete="off">
      <FormStyledWrapper className={cnb(styles.addBlock, className)}>
        <Input
          value={quantity.productAmount}
          min={1}
          type="number"
          disabled={disabled}
          name="productAmount"
          onChange={onChangeQuantity}
        />
        <Divider className={styles.divider} orienation="vertical" />
        <Select
          endAdornment={<Arrow color="primary2" orientation="down" />}
          value={quantity.productVariant}
          disabled={disabled}
          name="productVariant"
          onChange={onChangeQuantity}
        >
          <option>{ProductCartVariantEnum.PCS}</option>
          <option>{ProductCartVariantEnum.KGS}</option>
          <option>{ProductCartVariantEnum.BOX}</option>
          <option>{ProductCartVariantEnum.PACK}</option>
        </Select>
      </FormStyledWrapper>
    </form>
  )
}

export default QuantityPicker
