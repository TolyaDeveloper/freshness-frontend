import { ChangeEvent } from 'react'
import { cnb } from 'cnbuilder'
import { Label, Button } from '~/components/atoms'
import { FileUploadProps } from './FileUpload.props'

import styles from './FileUpload.module.scss'

const FileUpload = ({
  className,
  onChange,
  uploadLabel,
  additionalLabel
}: FileUploadProps) => {
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files

    files && onChange(files[0])
  }
  return (
    <Label className={cnb(styles.label, className)}>
      {additionalLabel}
      <input
        className={styles.fileUploader}
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleFileUpload}
      />
      <Button className={styles.uploadButton} type="button" tabIndex={-1}>
        {uploadLabel}
      </Button>
    </Label>
  )
}

export default FileUpload
