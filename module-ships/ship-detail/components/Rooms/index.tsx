import {
  ArrowRightIcon,
  Button,
  ChevronDownIcon,
  Input,
  MixiDatePicker,
  Modal,
  RoomCard,
  SectionHeader,
  TextArea,
  XMarkIcon,
} from '@/components'
import { RoomProps } from '@/constants/type'
import { useState } from 'react'
import styles from '../../ShipDetail.module.scss'

interface RoomsProps {
  rooms: RoomProps[]
}

export const Rooms = ({ rooms }: RoomsProps) => {
  const [openModal, setOpenModal] = useState(false)
  const renderBookDetailContent = () => {
    return (
      <div className={styles['booking-detail-modal']}>
        <h6>Đặt du thuyền</h6>
        <div className={styles.divider} />
        <RoomCard {...rooms[0]} />
        <div className="flex flex-col gap-24">
          <div className={styles['group-input']}>
            <MixiDatePicker />
            <Input label="Số lượng" placeHolder="Chọn số lượng" supportIcon={<ChevronDownIcon />} />
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
            <Button label="Đặt ngay" typeStyle="color" iconTrailing={<ArrowRightIcon />} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-40">
      <SectionHeader title={<>Các loại phòng & giá</>} />
      <div className={['flex flex-col gap-40'].join(' ')}>
        <div className="flex justify-between">
          <Button
            label="Chọn dịch vụ"
            typeStyle="outline"
            iconTrailing={<ChevronDownIcon />}
            size="sm"
          />
          <Button label="Xoá lựa chọn" typeStyle="outline" iconLeading={<XMarkIcon />} size="sm" />
        </div>
        <div className={[styles['room-types'], 'flex flex-col gap-16'].join(' ')}>
          {rooms.map((item, index) => (
            <RoomCard {...item} key={index} />
          ))}
          <div className="flex align-center gap-40 justify-between">
            <div>
              <label className={['sm', styles['price-label']].join(' ')}>Tổng tiền</label>
              <div className={['subheading lg', styles.price].join(' ')}>3,350,000đ</div>
            </div>
            <div className="flex gap-16">
              <Button label="Thuê trọn tàu" typeStyle="outline" />
              <Button
                onClick={() => setOpenModal(true)}
                label="Đặt ngay"
                typeStyle="color"
                iconTrailing={<ArrowRightIcon />}
              />

              <Modal open={openModal} setOpen={setOpenModal} content={renderBookDetailContent()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
