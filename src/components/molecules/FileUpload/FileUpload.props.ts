export interface FileUploadProps {
  onChange(file: File | null): void
  uploadLabel: string
  additionalLabel: string
  className?: string
}
