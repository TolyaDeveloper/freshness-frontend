import { ChangeEvent, useEffect, useState } from 'react'
import {
  Button,
  CustomLink,
  FormStyledWrapper,
  Input,
  Typography
} from '~/components/atoms'
import {
  type SignupSchemaType,
  signupSchema
} from '~/validators/signup.validator'
import { computedTypesResolver } from '@hookform/resolvers/computed-types'
import { useForm } from 'react-hook-form'
import { ROUTES } from '~/constants/routes'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Signup.module.scss'
import { $api } from '~/api'

const Signup = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [previewFile, setPreviewFile] = useState<string | null>(null)
  const { handleSubmit, register } = useForm<SignupSchemaType>({
    resolver: computedTypesResolver(signupSchema)
  })

  useEffect(() => {
    if (!uploadedFile) {
      return setPreviewFile(null)
    }

    const objectUrl = URL.createObjectURL(uploadedFile)

    setPreviewFile(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  }, [uploadedFile])

  const onSubmit = async ({
    firstName,
    lastName,
    email,
    password
  }: SignupSchemaType) => {
    if (!uploadedFile) {
      return
    }

    const formData = new FormData()

    formData.append('avatarUri', new Blob([JSON.stringify(uploadedFile)]))
    formData.append('firstName', firstName)
    formData.append('lastName', lastName)
    formData.append('email', email)
    formData.append('password', password)

    await $api.post(ROUTES.auth_signup, formData)
  }

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files

    setUploadedFile(files && files[0])
    console.log(e.target.files)
  }

  return (
    <>
      {previewFile && (
        <Image
          src={previewFile}
          width={300}
          height={300}
          objectFit="cover"
          alt="preview"
        />
      )}
      <Typography className={styles.title} level="h2-lg">
        Signup
      </Typography>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <FormStyledWrapper className={styles.formStyledWrapper}>
          <Input
            type="text"
            placeholder="First name..."
            {...register('firstName')}
          />
        </FormStyledWrapper>
        <FormStyledWrapper className={styles.formStyledWrapper}>
          <Input
            type="text"
            placeholder="Last name..."
            {...register('lastName')}
          />
        </FormStyledWrapper>
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
        <Input
          className={styles.fileUploader}
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleFileUpload}
        />
        <Button type="submit">Signup</Button>
      </form>
      <Link href={ROUTES.profile} passHref>
        <CustomLink className={styles.loginLink}>
          Already have an account? Log in here
        </CustomLink>
      </Link>
    </>
  )
}

export default Signup
