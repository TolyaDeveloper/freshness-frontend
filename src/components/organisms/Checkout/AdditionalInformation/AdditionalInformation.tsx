import { AdditionalInformationProps } from './AdditionalInformation.props'
import { Label, Textarea } from '~/components/atoms'
import { CheckoutSchema } from '~/validators/checkout.validator'

import styles from './AdditionalInformation.module.scss'

const AdditionalInformation = ({
  className,
  register
}: AdditionalInformationProps) => {
  return (
    <div className={className}>
      <Label className={styles.label}>Order notes</Label>
      <Textarea
        placeholder="Need a specific delivery day? Sending a gitf? Let’s say ..."
        {...register(
          'additionalInformation',
          CheckoutSchema.additionalInformation
        )}
      />
    </div>
  )
}

export default AdditionalInformation
