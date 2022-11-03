import { UseFormRegister } from 'react-hook-form'
import { CheckoutSchemaType } from '~/validators/checkout.validator'

export interface ConfirmationProps {
  register: UseFormRegister<CheckoutSchemaType>
  className?: string
}
