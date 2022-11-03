import { UseFormRegister } from 'react-hook-form'
import { CheckoutSchemaType } from '~/validators/checkout.validator'

export interface AdditionalInformationProps {
  register: UseFormRegister<CheckoutSchemaType>
  className?: string
}
