import { ProductCartVariantEnum } from '~/interfaces/cart.interface'
import { IQuantityPicker } from '~/interfaces/quantity-picker.interface'

export interface QuantityPickerProps {
  disabled?: boolean
  className?: string
  productAmount?: number
  productVariant?: ProductCartVariantEnum
  onChange?: (quantity: IQuantityPicker, error: boolean) => void
  rootClassname?: string
}
