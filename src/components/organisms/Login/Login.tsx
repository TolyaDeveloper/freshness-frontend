import { useState } from 'react'
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
import { ROUTES } from '~/constants/routes'
import Link from 'next/link'

import styles from './Login.module.scss'
import { AxiosError } from 'axios'

const Login = ({}: LoginProps) => {
  const [error, setError] = useState<string>('')
  const [isLoading, setLoading] = useState<boolean>(false)
  const { dispatch } = useUserContext()
  const { handleSubmit, register, reset } = useForm<LoginSchemaType>({
    resolver: computedTypesResolver(loginSchema)
  })

  const onSubmit = async ({ email, password }: LoginSchemaType) => {
    setLoading(true)

    try {
      const res = await AuthService.login({ email, password })

      LocalStorageService.setItem('accessToken', res.data.accessToken)
      dispatch({ type: 'SET_USER', payload: res.data.user })

      reset()
      setError('')
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err.response?.data.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Typography className={styles.title} level="h2-lg">
        Login
      </Typography>
      {error && (
        <Typography className={styles.errorText} level="body5" color="error">
          {error}
        </Typography>
      )}
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
        <Button type="submit" disabled={isLoading}>
          Login
        </Button>
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
