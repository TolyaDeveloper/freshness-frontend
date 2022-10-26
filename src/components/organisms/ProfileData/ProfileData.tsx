import { useState, useEffect } from 'react'
import { ProfileDataProps } from './ProfileData.props'
import {
  Button,
  Input,
  FormStyledWrapper,
  Label,
  Avatar
} from '~/components/atoms'
import { FileUpload } from '~/components/molecules'
import { AuthService } from '~/services/auth.service'
import { LocalStorageService } from '~/services/localStorage.service'
import { useUserContext } from '~/context/UserContext/User.context'
import { IUser } from '~/interfaces/user.interface'
import Login from '../Login/Login'

import styles from './ProfileData.module.scss'

const ProfileData = ({}: ProfileDataProps) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [previewFile, setPreviewFile] = useState<string | null>(null)
  const {
    state: { user, isAuthenticated },
    dispatch
  } = useUserContext()

  const handleLogout = async () => {
    await AuthService.logout()

    dispatch({
      type: 'SET_USER',
      payload: {
        cart: [],
        compare: [],
        wishlist: [],
        ordersHistory: []
      } as unknown as IUser
    })
    dispatch({ type: 'SET_AUTH', payload: false })
    LocalStorageService.clear()
  }

  const handleRemoveFile = () => {
    setUploadedFile(null)
  }

  useEffect(() => {
    if (!uploadedFile) {
      return setPreviewFile(null)
    }

    const objectUrl = URL.createObjectURL(uploadedFile)

    setPreviewFile(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  }, [uploadedFile])

  if (!isAuthenticated) {
    return <Login />
  }

  return (
    <>
      <div className={styles.avatarWrapper}>
        <Avatar
          className={styles.avatar}
          src={`${process.env.NEXT_PUBLIC_IMAGES_URI}${user.avatarUri}`}
          alt={user.firstName}
        />
      </div>
      <Label className={styles.label}>First name</Label>
      <FormStyledWrapper className={styles.formStyledWrapper}>
        <Input value={user.firstName} readOnly />
      </FormStyledWrapper>
      <Label className={styles.label}>Last name</Label>
      <FormStyledWrapper className={styles.formStyledWrapper}>
        <Input value={user.lastName} readOnly />
      </FormStyledWrapper>
      <Label className={styles.label}>Email</Label>
      <FormStyledWrapper className={styles.formStyledWrapper}>
        <Input value={user.email} readOnly />
      </FormStyledWrapper>
      <Label className={styles.label}>Status</Label>
      <FormStyledWrapper className={styles.formStyledWrapper}>
        <Input
          value={
            user.isActivated ? 'Account activated' : 'Account not activated'
          }
          readOnly
        />
      </FormStyledWrapper>
      <FileUpload
        onChange={file => setUploadedFile(file)}
        additionalLabel="Optional (5mb max)"
        uploadLabel="Upload new avatar"
      />
      {previewFile && (
        <Button
          className={styles.removeAvatarButton}
          variant="plain"
          type="button"
          onClick={handleRemoveFile}
        >
          Remove avatar
        </Button>
      )}
      {previewFile && (
        <div className={styles.avatarPreviewWrapper}>
          <Avatar
            src={previewFile}
            width={100}
            height={100}
            objectFit="cover"
            alt="preview"
          />
        </div>
      )}
      <Button onClick={handleLogout} type="button">
        Logout
      </Button>
    </>
  )
}

export default ProfileData
