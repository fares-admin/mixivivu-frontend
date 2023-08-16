import { Dispatch, SetStateAction, useState } from 'react'
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

import styles from '../../ShipDetail.module.scss'
import { RoomProps } from '@/constants/type'

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
            <Input label="Họ và tên" placeHolder="Nhập họ và tên" />
            <Input label="Số điện thoại" placeHolder="Nhập số điện thoại" />
            <Input label="Địa chỉ email" placeHolder="Nhập email" />
            <TextArea label="Yêu cầu của bạn" placeHolder="Nhập yêu cầu của bạn" />
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
      }
    />
  )
}
