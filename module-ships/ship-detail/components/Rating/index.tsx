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
export const Rating = ({ id, score, numberOfReviews }) => {
  const [reviews, setReviews] = useState<ReviewRes[]>([])
  const [keySearch, setKeySearch] = useState('')
  const [rating, setRating] = useState(0)
  const formRef = useRef(null)
  const { setLetCall: fetchReviews } = useApiCall<CommonListResultType<ReviewRes>, string>({
    callApi: () =>
      axios.get(getEndpoint(reviewEndpoints, 'getList'), {
        params: {
          productId: id,
          comment: keySearch,
        },
      }),
    handleError(status, message) {
      if (status !== 400) {
        toast.error(message)
      }
    },
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
        variantId: [],
        productId: id,
      }),
    handleError(status, message) {
      if (status !== 400) {
        toast.error(message)
      }
    },
    handleSuccess() {
      setKeySearch('')
      formRef?.current?.resetForm()
      fetchReviews(true)
      toast.success('Gửi review thành công')
    },
  })
  const scrollToReview = () => {
    const section = document.getElementById('review-submit')
    section?.scrollIntoView()
  }

  const getReviews = () => {
    const stars = [0, 0, 0, 0, 0]
    reviews.forEach((item) => {
      stars[`${item.score - 1}`] = stars[item.score - 1] + 1
    })
    return stars
  }
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
            <SectionHeader title={`Đánh giá (${numberOfReviews || 0})`} />
            <div className="flex gap-16">
              <Input
                placeHolder="Tìm đánh giá"
                iconSwap={<SearchIcon />}
                customClass={styles['search-input']}
                onChange={(e) => setKeySearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    fetchReviews(true)
                  }
                }}
              />
              <Button
                size="sm"
                label="Gửi đánh giá"
                typeStyle="color"
                iconLeading={<StarIcon />}
                onClick={scrollToReview}
              />
            </div>
          </div>
          <div className={['flex flex-col gap-20', styles['rating-list']].join(' ')}>
            <StaticCard rate={(score / numberOfReviews).toFixed(1)} rateCount={getReviews()} />
            {reviews.map((item, index) => (
              <RateCard
                key={index}
                name={item.name}
                comment={item.comment}
                score={item.score}
                date={new Date(item.created)}
              />
            ))}
          </div>

          <div className="flex flex-col gap-24" id="review-submit">
            <div className={styles['group-input']}>
              <RatingInput rating={rating} onChange={setRating} />
              <Field name="name">
                {({ field, meta }: any) => (
                  <div>
                    <Input {...field} label="Họ và tên" placeHolder="Nhập họ và tên" required />
                    {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                  </div>
                )}
              </Field>
              <Field name="phone">
                {({ field, meta }: any) => (
                  <div>
                    <Input
                      {...field}
                      label="Số điện thoại"
                      placeHolder="Nhập số điện thoại"
                      required
                    />
                    {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                  </div>
                )}
              </Field>
              <Field name="email">
                {({ field, meta }: any) => (
                  <div>
                    <Input {...field} label="Địa chỉ email" placeHolder="Nhập email" required />
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
                    required
                  />
                  {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                </div>
              )}
            </Field>
          </div>
          <div className="flex justify-end">
            <Button type="submit" typeStyle="color" label="Gửi" iconTrailing={<ArrowRightIcon />} />
          </div>
        </div>
      </Form>
    </Formik>
  )
}
