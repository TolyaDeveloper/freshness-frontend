import { cnb } from 'cnbuilder'
import { PaymentMethodProps } from './PaymentMethod.props'
import { Radio, FormStyledWrapper } from '~/components/atoms'
import { CheckoutSchema } from '~/validators/checkout.validator'
import VisaIcon from '~/assets/icons/visa.svg'
import MastercardIcon from '~/assets/icons/mastercard.svg'

import styles from './PaymentMethod.module.scss'

const PaymentMethod = ({ className, register }: PaymentMethodProps) => {
  return (
    <div className={className}>
      <FormStyledWrapper
        className={cnb(styles.formStyledWrapper, styles.cardPaymentWrapper)}
      >
        <Radio
          label="Credit card"
          value="Credit card"
          {...register('payment_method', CheckoutSchema.payment_method)}
        />

        <div className={styles.paymentIconsWrapper}>
          <VisaIcon className={styles.visaIcon} />
          <MastercardIcon />
        </div>
      </FormStyledWrapper>
      <FormStyledWrapper className={styles.formStyledWrapper}>
        <Radio
          label="Cash"
          value="Cash"
          {...register('payment_method', CheckoutSchema.payment_method)}
        />
      </FormStyledWrapper>
    </div>
  )
}

export default PaymentMethod
