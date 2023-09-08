import { Dispatch, SetStateAction, useRef, useState } from 'react'
import {
  ArrowRightIcon,
  Button,
  Input,
  Modal,
  RoomCard,
  RoomPicker,
  TextArea,
  RoomDatePicker,
} from '@/components'

import { RoomProps } from '@/constants/type'
import { Field, Form, Formik } from 'formik'
import styles from '../../ShipDetail.module.scss'
import { BookingShipSchema } from '@/validations/BookingShipChema'
import moment from 'moment'
import { formatDate } from '@/constants/dateTime'
import { ProductRes } from '@/types/product'

interface BookingTourModalProps {
  shipDetail: ProductRes
  openModal: boolean
  setOpenModal: Dispatch<SetStateAction<boolean>>
  setOpenSuccessModal: Dispatch<SetStateAction<boolean>>
  rooms: RoomProps[]
}

export const BookingTourModal = ({
  openModal,
  setOpenModal,
  setOpenSuccessModal,
  rooms,
}: BookingTourModalProps) => {
  const formRef = useRef(null)
  const [roomDetail, setRoomDetail] = useState({
    rooms: 1,
    adults: 1,
    children: 0,
  })
  const [, setSelectedDate] = useState<string>(moment(new Date()).format(formatDate))

  const handleSubmit = async (values) => {
    alert(values)
    setOpenModal(false)
    setOpenSuccessModal(true)
  }

  return (
    <Modal
      open={openModal}
      setOpen={setOpenModal}
      content={
        <Formik
          innerRef={formRef}
          initialValues={{
            full_name: '',
            phone_number: '',
            email: '',
            additional_info: '',
          }}
          validationSchema={BookingShipSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values)
            setSubmitting(false)
          }}
        >
          <Form>
            <div className={styles['booking-detail-modal']}>
              <h6>Đặt du thuyền</h6>
              <div className={styles.divider} />
              <RoomCard {...rooms[0]} disabled />
              <div className="flex flex-col gap-24">
                <div className={styles['group-input']}>
                  <RoomDatePicker onChange={(value) => setSelectedDate(value)} />

                  {/* <Input label="Số lượng" placeHolder="Chọn số lượng" supportIcon={<ChevronDownIcon />} /> */}
                  <RoomPicker roomDetail={roomDetail} setRoomDetail={setRoomDetail} />
                </div>
                <Field name="full_name">
                  {({ field, meta }: any) => (
                    <div>
                      <Input {...field} label="Họ và tên" placeHolder="Nhập họ và tên" required />
                      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                    </div>
                  )}
                </Field>
                <Field name="phone_number">
                  {({ field, meta }: any) => (
                    <div>
                      <Input
                        type="tel"
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
                <Field name="additional_info">
                  {({ field, meta }: any) => (
                    <div>
                      <TextArea
                        {...field}
                        label="Yêu cầu của bạn"
                        placeHolder="Nhập yêu cầu của bạn"
                      />
                      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                    </div>
                  )}
                </Field>
              </div>
              <div
                className={[
                  'flex gap-40 justify-between',
                  styles['booking-detail-modal__footer'],
                ].join(' ')}
              >
                <div className="flex flex-col gap-6">
                  <label className={['sm', styles['price-label']].join(' ')}>Tổng tiền</label>
                  <div
                    className={['subheading lg', styles.price].join(' ')}
                    style={{ color: 'var(--primary-dark, #0E4F4F)' }}
                  >
                    3,350,000đ
                  </div>
                </div>
                <div className={[styles.actions, 'flex gap-16'].join(' ')}>
                  <Button label="Đăng ký tư vấn" typeStyle="outline" />
                  <Button
                    type="submit"
                    label="Đặt ngay"
                    typeStyle="color"
                    iconTrailing={<ArrowRightIcon />}
                  />
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      }
    />
  )
}
