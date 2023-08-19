import {
  ArrowRightIcon,
  Button,
  Input,
  RateCard,
  RatingInput,
  SearchIcon,
  SectionHeader,
  StarIcon,
  StaticCard,
  TextArea,
} from '@/components'
import { useEffect, useRef, useState } from 'react'
import styles from '../../ShipDetail.module.scss'
import { Field, Form, Formik } from 'formik'
import { useApiCall } from '@/hooks'
import axios from 'axios'
import { getEndpoint, reviewEndpoints } from '@/constants/endpoints'
import { CommonListResultType } from '@/types'
import { ReviewReq, ReviewRequestError, ReviewRes } from '@/types/review'
import { toast } from 'react-toastify'

const initialReview = {
  name: '',
  phone: '',
  email: '',
  comment: '',
}
export const Rating = ({ id }) => {
  const [reviews, setReviews] = useState([])
  const [rating, setRating] = useState(0)
  const formRef = useRef(null)
  const { setLetCall: fetchReviews } = useApiCall<CommonListResultType<ReviewRes>, string>({
    callApi: () =>
      axios.get(getEndpoint(reviewEndpoints, 'getList'), {
        params: {
          productId: id,
        },
      }),
    handleSuccess: (message, data) => {
      if (message) {
        setReviews(data.data)
      }
    },
  })

  useEffect(() => {
    fetchReviews(true)
  }, [fetchReviews])

  const { setLetCall: submitReview } = useApiCall<ReviewReq, ReviewRequestError>({
    callApi: () =>
      axios.post(getEndpoint(reviewEndpoints, 'addNew'), {
        ...formRef?.current?.values,
        score: rating,
        variantId: { id, type: 'room' },
        productId: id,
      }),
    handleError(status, message) {
      if (status !== 400) {
        toast.error(message)
      }
    },
    handleSuccess() {
      toast.success('Gửi review thành công')
    },
  })

  return (
    <Formik
      innerRef={formRef}
      initialValues={initialReview}
      onSubmit={(values, { setSubmitting }) => {
        submitReview(true)
        setSubmitting(false)
      }}
    >
      <Form>
        <div id="reviews" className="flex flex-col gap-40">
          <div className="flex gap-16">
            <SectionHeader title="Đánh giá (66)" />
            <div className="flex gap-16">
              <Button
                size="sm"
                label="Tìm đánh giá"
                typeStyle="outline"
                iconLeading={<SearchIcon />}
              />
              <Button size="sm" label="Gửi đánh giá" typeStyle="color" iconLeading={<StarIcon />} />
            </div>
          </div>
          <div className={['flex flex-col gap-20', styles['rating-list']].join(' ')}>
            <StaticCard rate={4.8} rateCount={[52, 14, 0, 0, 0]} />
            {reviews.map((_, index) => (
              <RateCard
                key={index}
                name="Nguyễn Anh Tuấn"
                comment="Tôi đã bị cuốn hút bởi vẻ đẹp kỳ vĩ của các hòn đảo và hang động tại vịnh Hạ Long. Du thuyền sang trọng và dịch vụ tận tâm đã làm cho chuyến đi của tôi trở nên hoàn hảo. Tôi không thể quên những bữa ăn ngon lành trên du thuyền và hoạt động khám phá thú vị như kayak và thăm làng chài truyền thống. Tôi chắc chắn sẽ khuyên bạn bè và gia đình tôi tham gia Tour du lịch Du thuyền Hạ Long."
                date={new Date('22/06/2023')}
              />
            ))}
          </div>

          <div className="flex flex-col gap-24">
            <div className={styles['group-input']}>
              <RatingInput rating={rating} onChange={setRating} />
              <Field name="name">
                {({ field, meta }: any) => (
                  <div>
                    <Input {...field} label="Họ và tên" placeHolder="Nhập họ và tên" />
                    {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                  </div>
                )}
              </Field>
              <Field name="phone">
                {({ field, meta }: any) => (
                  <div>
                    <Input {...field} label="Số điện thoại" placeHolder="Nhập số điện thoại" />
                    {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                  </div>
                )}
              </Field>
              <Field name="email">
                {({ field, meta }: any) => (
                  <div>
                    <Input {...field} label="Địa chỉ email" placeHolder="Nhập email" />
                    {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                  </div>
                )}
              </Field>
            </div>
            <Field name="comment">
              {({ field, meta }: any) => (
                <div>
                  <TextArea
                    {...field}
                    label="Đánh giá của bạn"
                    placeHolder="Nhập yêu cầu của bạn"
                  />
                  {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                </div>
              )}
            </Field>
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              typeStyle="color"
              label="Tiếp"
              iconTrailing={<ArrowRightIcon />}
            />
          </div>
        </div>
      </Form>
    </Formik>
  )
}
