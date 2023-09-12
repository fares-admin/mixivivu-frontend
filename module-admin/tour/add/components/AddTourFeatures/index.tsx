import { Button, Card, Checkbox, Input, PlusIcon, XMarkIcon } from '@/components'
import { FeatureRes } from '@/types/feature'
import { CommonListResultType } from '@/types'
import { featureEndpoints, getEndpoint } from '@/constants/endpoints'
import { useApiCall } from '@/hooks'
import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '../../AddTour.module.scss'
import { Field } from 'formik'

export const AddTourFeatures = () => {
  const [features, setFeatures] = useState<FeatureRes[]>([])
  const { setLetCall } = useApiCall<CommonListResultType<FeatureRes>, string>({
    callApi: () => axios.get(getEndpoint(featureEndpoints, 'getList')),
    handleSuccess: (message, data) => {
      if (message) {
        setFeatures(data.data)
      }
    },
  })

  useEffect(() => {
    setLetCall(true)
  }, [setLetCall])

  return (
    <Card>
      <div className={styles['card-header']}>
        <div className="subheading md">Đặc điểm nổi bật</div>
      </div>
      <div className={styles['card-content']}>
        <div className="flex flex-col gap-24">
          <label className="lg">Đặc điểm</label>
          <div className="grid grid-cols-2 gap-16" role="group" aria-labelledby="checkbox-group">
            {features.map((item) => (
              <Field type="checkbox" name="features" value={item._id}>
                {({ field }: any) => (
                  <div>
                    <Checkbox {...field} type="checkbox" text={item.text} sizeInput="sm" />
                  </div>
                )}
              </Field>
            ))}
          </div>
        </div>
      </div>
      <div className={styles['card-footer']}>
        <div className="flex flex-col gap-16">
          <label className="lg">Thông tin thêm</label>
          <div className="flex gap-16 full-w align-center">
            <Input placeHolder="Nhập thông tin" customClass="flex-grow" />
            <div>
              <XMarkIcon />
            </div>
          </div>
          <Button label="Thêm" iconLeading={<PlusIcon />} size="sm" typeStyle="outline" />
        </div>
      </div>
    </Card>
  )
}
