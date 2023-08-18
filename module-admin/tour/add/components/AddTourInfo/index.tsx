import { Button, Card, Input, UploadCloudIcon } from '@/components'
import { Field } from 'formik'
import styles from '../../AddTour.module.scss'

export const AddTourInfo = () => {
  return (
    <Card>
      <div className={styles['card-header']}>
        <div className="subheading md">Thông tin tour</div>
      </div>
      <div className={styles['card-content']}>
        <div className="flex flex-col gap-16">
          <div className="grid grid-cols-2 gap-16">
            <Field name="name">
              {({ field, meta }: any) => (
                <div>
                  <Input {...field} label="Tên tour" placeHolder="Nhập tên tour" />
                  {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                </div>
              )}
            </Field>
            <Field name="slug">
              {({ field, meta }: any) => (
                <div>
                  <Input {...field} label="Slug" placeHolder="Slug" />
                  {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                </div>
              )}
            </Field>
          </div>
          <div className="grid grid-cols-2 gap-16">
            <Input label="Giá tour" placeHolder="Nhập giá tour" />
            <Input label="Giá khuyến mãi" placeHolder="Nhập giá khuyến mãi" />
          </div>
        </div>
      </div>
      <div className={styles['card-footer']}>
        <div className="flex flex-col gap-24">
          <label className="lg">Ảnh chi tiết tour</label>
          <div className={styles['upload-images']}>
            <UploadCloudIcon />
            <div className="flex flex-col gap-4 align-center">
              <Button label="Nhấp hoặc Thả ảnh" size="sm" typeStyle="link-color" />
              <p className="sm">PNG, JPG</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
