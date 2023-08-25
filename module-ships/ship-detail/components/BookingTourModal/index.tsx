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

interface BookingTourModalProps {
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

  const handleBooking = () => {
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
          initialValues={{}}
          onSubmit={(values, { setSubmitting }) => {
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
                  <RoomDatePicker />
                  {/* <Input label="Số lượng" placeHolder="Chọn số lượng" supportIcon={<ChevronDownIcon />} /> */}
                  <RoomPicker roomDetail={roomDetail} setRoomDetail={setRoomDetail} />
                </div>
                <Field name="name">
                  {({ field, meta }: any) => (
                    <div>
                      <Input {...field} label="Họ và tên" placeHolder="Nhập họ và tên" required />
                      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                    </div>
                  )}
                </Field>
                <Field name="name">
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
                <Field name="name">
                  {({ field, meta }: any) => (
                    <div>
                      <Input {...field} label="Địa chỉ email" placeHolder="Nhập email" required />
                      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                    </div>
                  )}
                </Field>
                <Field name="name">
                  {({ field, meta }: any) => (
                    <div>
                      <TextArea
                        {...field}
                        label="Yêu cầu của bạn"
                        placeHolder="Nhập yêu cầu của bạn"
                        required
                      />
                      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                    </div>
                  )}
                </Field>
              </div>
              <div className="flex gap-40 justify-between">
                <div className="flex flex-col gap-6">
                  <label className={['sm', styles['price-label']].join(' ')}>Tổng tiền</label>
                  <div className={['subheading lg', styles.price].join(' ')}>3,350,000đ</div>
                </div>
                <div className="flex gap-16">
                  <Button label="Đăng ký tư vấn" typeStyle="outline" />
                  <Button
                    onClick={handleBooking}
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
