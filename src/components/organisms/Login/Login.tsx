import { LoginProps } from './Login.props'
import {
  Typography,
  Input,
  FormStyledWrapper,
  Button
} from '~/components/atoms'
import { useForm } from 'react-hook-form'
import { type LoginSchemaType, loginSchema } from '~/validators/login.validator'
import { computedTypesResolver } from '@hookform/resolvers/computed-types'
import { $api } from '~/api'
import { ROUTES } from '~/constants/routes'
import { useAppContext } from '~/context/AppContext/App.context'
import { AuthService } from '~/services/auth.service'

import styles from './Login.module.scss'
import { LocalStorageService } from '~/services/localStorage.service'

const Login = ({}: LoginProps) => {
  const { dispatch } = useAppContext()
  const { handleSubmit, register, reset } = useForm<LoginSchemaType>({
    resolver: computedTypesResolver(loginSchema)
  })

  const onSubmit = async ({ email, password }: LoginSchemaType) => {
    try {
      const res = await AuthService.login({ email, password })

      LocalStorageService.setItem('accessToken', res.data.accessToken)
      dispatch({ type: 'SET_USER', payload: res.data.user })

      reset()
    } catch (err) {
      if (err instanceof Error) {
        console.log(err)
      }
    }
  }

  return (
    <>
      <Typography className={styles.title} level="h2-lg">
        Login
      </Typography>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <FormStyledWrapper className={styles.formStyledWrapper}>
          <Input type="email" placeholder="Email..." {...register('email')} />
        </FormStyledWrapper>
        <FormStyledWrapper className={styles.formStyledWrapper}>
          <Input
            type="password"
            placeholder="Password..."
            {...register('password')}
          />
        </FormStyledWrapper>
        <Button>Login</Button>
      </form>
    </>
  )
}

export default Login
