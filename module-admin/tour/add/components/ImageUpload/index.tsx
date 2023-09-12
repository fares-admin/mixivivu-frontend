import { Button, ImageFill, UploadCloudIcon, XMarkIcon } from '@/components'
import ImageUploading, { ImageListType } from 'react-images-uploading'
import styles from '../../AddTour.module.scss'

interface ImageUploadProps {
  value: ImageListType
  onChange: (value) => void
  maxNumber?: number
}

export const ImageUpload = ({ value, onChange, maxNumber = 3 }: ImageUploadProps) => {
  return (
    <ImageUploading
      multiple
      value={value}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({ imageList, onImageUpload, onImageRemove, dragProps }) => (
        <div className="flex flex-col gap-24">
          <div className={styles['upload-images']} onClick={onImageUpload} {...dragProps}>
            <UploadCloudIcon />
            <div className="flex flex-col gap-4 align-center">
              <Button label="Nhấp hoặc Thả ảnh" size="sm" typeStyle="link-color" />
              <p className="sm">PNG, JPG</p>
            </div>
          </div>
          <div className="flex gap-16">
            {imageList.map((image, index) => (
              <div key={index} className={styles['image-item']}>
                <div onClick={() => onImageRemove(index)} className={styles['remove-image-btn']}>
                  <XMarkIcon width="12" height="12" />
                </div>
                <ImageFill src={image.data_url} width="100%" height="100%" />
              </div>
            ))}
          </div>
        </div>
      )}
    </ImageUploading>
  )
}
