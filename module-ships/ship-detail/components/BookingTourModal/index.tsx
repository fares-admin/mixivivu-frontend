/* eslint-disable no-console */
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

import { Field, Form, Formik } from 'formik'
import styles from '../../ShipDetail.module.scss'
import { BookingShipSchema } from '@/validations/BookingShipChema'
import moment from 'moment'
import { emailFormatDate, formatDate } from '@/constants/dateTime'
import { ProductRes } from '@/types/product'
import axios from 'axios'
import { getEndpoint, tourEndpoints } from '@/constants/endpoints'
import Link from 'next/link'
import { Routes } from '@/constants/routes'
import { RoomRes } from '@/types/room'
import { formatter } from '@/constants/currencies'

interface BookingTourModalProps {
  shipDetail: ProductRes
  openModal: boolean
  setOpenModal: (value) => void
  setOpenSuccessModal: Dispatch<SetStateAction<boolean>>
  rooms: RoomRes[]
  handleChangeRooms: any
  isFullShip?: boolean
}

export const BookingTourModal = ({
  openModal,
  setOpenModal,
  setOpenSuccessModal,
  rooms,
  handleChangeRooms,
  shipDetail,
  isFullShip = false,
}: BookingTourModalProps) => {
  const formRef = useRef(null)
  const [roomDetail, setRoomDetail] = useState({
    adults: 1,
    children: 0,
  })
  const [selectedDate, setSelectedDate] = useState<string>(moment(new Date()).format(formatDate))
  const getTotal = () => {
    return rooms.reduce((accumulator, object) => {
      return accumulator + object.price * object.roomCount
    }, 0)
  }
  const handleSubmit = async (values) => {
    try {
      const res = await axios.post(getEndpoint(tourEndpoints, 'booking'), {
        subject: isFullShip ? 'Full-ship booking' : 'Normal booking',
        datatypes: isFullShip ? 'ship' : 'room',
        cruise_name: shipDetail.title,
        check_in: moment(selectedDate, formatDate).format(emailFormatDate),
        number_of_adult: roomDetail.adults,
        number_of_children: roomDetail.children,
        rooms: isFullShip
          ? []
          : rooms.map((item) => ({
              room_name: item.title,
              quantity: item.roomCount,
            })),
        ...values,
      })
      if (res.data.status === 200) {
        setOpenModal(false)
        setOpenSuccessModal(true)
      }
    } catch (e) {
      console.error(e)
    }
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
              <h6>{isFullShip ? 'Thuê trọn tàu' : 'Đặt du thuyền'}</h6>
              <div className={styles.divider} />
              {!isFullShip && (
                <>
                  {rooms.map((item) => (
                    <RoomCard
                      {...item}
                      roomCount={item.roomCount || 0}
                      url="/card-image.png"
                      area={item.size}
                      userPerRoom={item.maxPersons}
                      disabled
                      onChange={(value) => handleChangeRooms(value, item._id)}
                    />
                  ))}
                </>
              )}
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
                {!isFullShip && (
                  <div className="flex flex-col gap-6">
                    <label className={['sm', styles['price-label']].join(' ')}>Tổng tiền</label>
                    <div
                      className={['subheading lg', styles.price].join(' ')}
                      style={{ color: 'var(--primary-dark, #0E4F4F)' }}
                    >
                      {formatter.format(getTotal())} đ
                    </div>
                  </div>
                )}

                <div className={[styles.actions, 'flex gap-16 flex-grow justify-end'].join(' ')}>
                  <Link href={Routes.contact}>
                    <Button label="Đăng ký tư vấn" typeStyle="outline" />
                  </Link>
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
