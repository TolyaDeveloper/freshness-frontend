import { LoginProps } from './Login.props'
import {
  Typography,
  Input,
  FormStyledWrapper,
  Button,
  CustomLink
} from '~/components/atoms'
import { useForm } from 'react-hook-form'
import { type LoginSchemaType, loginSchema } from '~/validators/login.validator'
import { computedTypesResolver } from '@hookform/resolvers/computed-types'
import { useUserContext } from '~/context/UserContext/User.context'
import { AuthService } from '~/services/auth.service'
import { LocalStorageService } from '~/services/localStorage.service'

import styles from './Login.module.scss'
import Link from 'next/link'
import { ROUTES } from '~/constants/routes'

const Login = ({}: LoginProps) => {
  const { dispatch } = useUserContext()
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
        <Button type="submit">Login</Button>
        <Link href={ROUTES.signup} passHref>
          <CustomLink className={styles.signupLink}>
            Do not have an account? Signup here
          </CustomLink>
        </Link>
      </form>
    </>
  )
}

export default Login
