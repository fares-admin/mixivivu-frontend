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
          <Field name="spec.ship.launch">
            {({ field, meta }: any) => (
              <div>
                <Input {...field} label="Hạ thuỷ" placeHolder="Nhập hạ thuỷ" required />
                {meta.touched && meta.error && <div className="error">{meta.error}</div>}
              </div>
            )}
          </Field>
          <Field name="spec.ship.shell">
            {({ field, meta }: any) => (
              <div>
                <Input {...field} label="Thân vỏ" placeHolder="Nhập thân vỏ" required />
                {meta.touched && meta.error && <div className="error">{meta.error}</div>}
              </div>
            )}
          </Field>
          <Field name="spec.ship.cabin">
            {({ field, meta }: any) => (
              <div>
                <Input {...field} label="Cabin" placeHolder="Nhập cabin" required />
                {meta.touched && meta.error && <div className="error">{meta.error}</div>}
              </div>
            )}
          </Field>
          <Field name="spec.ship.trip">
            {({ field, meta }: any) => (
              <div>
                <Input {...field} label="Hành trình" placeHolder="Nhập hành trình" required />
                {meta.touched && meta.error && <div className="error">{meta.error}</div>}
              </div>
            )}
          </Field>
          <Field name="spec.ship.admin">
            {({ field, meta }: any) => (
              <div>
                <Input {...field} label="Điều hành" placeHolder="Nhập điều hành" required />
                {meta.touched && meta.error && <div className="error">{meta.error}</div>}
              </div>
            )}
          </Field>
        </div>
      </div>
    </Card>
  )
}
