import { cnb } from 'cnbuilder'
import { PaymentMethodProps } from './PaymentMethod.props'
import { Radio, FormStyledWrapper } from '~/components/atoms'
import { CheckoutSchema } from '~/validators/checkout.validator'
import { PAYMENT_METHODS } from '~/interfaces/payment.enum'
import VisaIcon from '~/assets/icons/visa.svg'
import MastercardIcon from '~/assets/icons/mastercard.svg'

import styles from './PaymentMethod.module.scss'

const PaymentMethod = ({ className, register, errors }: PaymentMethodProps) => {
  return (
    <div className={className}>
      <FormStyledWrapper
        className={cnb(styles.formStyledWrapper, styles.cardPaymentWrapper)}
      >
        <Radio
          label="Credit card"
          value={PAYMENT_METHODS.CARD}
          error={errors.payment_method}
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
          value={PAYMENT_METHODS.CASH}
          error={errors.payment_method}
          {...register('payment_method', CheckoutSchema.payment_method)}
        />
      </FormStyledWrapper>
    </div>
  )
}

export default PaymentMethod
