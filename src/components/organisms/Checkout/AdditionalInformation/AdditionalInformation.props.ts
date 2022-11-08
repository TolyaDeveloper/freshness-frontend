import { UseFormRegister } from 'react-hook-form'
import { ICheckoutFields } from '~/validators/checkout.validator'

export interface AdditionalInformationProps {
  register: UseFormRegister<ICheckoutFields>
  className?: string
}
