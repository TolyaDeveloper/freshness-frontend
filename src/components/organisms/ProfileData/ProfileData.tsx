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

import styles from './ProfileData.module.scss'

const ProfileData = ({}: ProfileDataProps) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [previewFile, setPreviewFile] = useState<string | null>(null)
  const {
    state: { user },
    dispatch
  } = useUserContext()

  const handleLogout = async () => {
    await AuthService.logout()

    dispatch({ type: 'SET_USER', payload: null })
    LocalStorageService.removeItem('accessToken')
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

  if (!user) {
    return <h1>Loading...</h1>
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
      <Button className={styles.logoutButton} onClick={handleLogout}>
        Logout
      </Button>
    </>
  )
}

export default ProfileData
