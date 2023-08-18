import { Card, Input } from '@/components'
import { Field } from 'formik'
import styles from '../../AddTour.module.scss'

export const AddShipInfo = () => {
  return (
    <Card>
      <div className={styles['card-header']}>
        <div className="subheading md">Thông tin du thuyền</div>
      </div>
      <div className={styles['card-content']}>
        <div className="flex flex-col gap-16">
          <Field name="name">
            {({ field, meta }: any) => (
              <div>
                <Input {...field} label="Hạ thuỷ" placeHolder="Nhập hạ thuỷ" />
                {meta.touched && meta.error && <div className="error">{meta.error}</div>}
              </div>
            )}
          </Field>
          <Field name="name">
            {({ field, meta }: any) => (
              <div>
                <Input {...field} label="Thân vỏ" placeHolder="Nhập thân vỏ" />
                {meta.touched && meta.error && <div className="error">{meta.error}</div>}
              </div>
            )}
          </Field>
          <Field name="name">
            {({ field, meta }: any) => (
              <div>
                <Input {...field} label="Cabin" placeHolder="Nhập cabin" />
                {meta.touched && meta.error && <div className="error">{meta.error}</div>}
              </div>
            )}
          </Field>
          <Field name="name">
            {({ field, meta }: any) => (
              <div>
                <Input {...field} label="Hành trình" placeHolder="Nhập hành trình" />
                {meta.touched && meta.error && <div className="error">{meta.error}</div>}
              </div>
            )}
          </Field>
          <Field name="name">
            {({ field, meta }: any) => (
              <div>
                <Input {...field} label="Điều hành" placeHolder="Nhập điều hành" />
                {meta.touched && meta.error && <div className="error">{meta.error}</div>}
              </div>
            )}
          </Field>
        </div>
      </div>
    </Card>
  )
}
