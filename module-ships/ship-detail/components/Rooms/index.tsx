import {
  ArrowRightIcon,
  Button,
  ChevronDownIcon,
  RoomCard,
  SectionHeader,
  XMarkIcon,
} from '@/components'
import { RoomProps } from '@/constants/type'
import { useState } from 'react'
import { InfoModal } from '@/components/Modal/InfoModal'
import styles from '../../ShipDetail.module.scss'
import { BookingTourModal } from '../BookingTourModal'

export interface RoomsProps {
  rooms: RoomProps[]
}

export const Rooms = ({ rooms }: RoomsProps) => {
  const [openModal, setOpenModal] = useState(false)
  const [openSuccessModal, setOpenSuccessModal] = useState(false)

  return (
    <div id="rooms" className="flex flex-col gap-40">
      <SectionHeader title={<>Các loại phòng & giá</>} />
      <div className={['flex flex-col gap-40', styles['room-types'], 'section-bg'].join(' ')}>
        <div className="flex justify-between">
          <Button
            label="Chọn dịch vụ"
            typeStyle="outline"
            iconTrailing={<ChevronDownIcon />}
            size="sm"
          />
          <Button label="Xoá lựa chọn" typeStyle="outline" iconLeading={<XMarkIcon />} size="sm" />
        </div>
        <div className={['flex flex-col gap-16 '].join(' ')}>
          {rooms.map((item, index) => (
            <RoomCard {...item} key={index} />
          ))}
        </div>
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
          </div>
        </div>
      </div>
      <BookingTourModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        setOpenSuccessModal={setOpenSuccessModal}
        rooms={rooms}
      />
      <InfoModal
        open={openSuccessModal}
        setOpen={setOpenSuccessModal}
        title="Bạn đã đặt Tour thành công"
        description="Vui lòng kiểm tra email và Mixivivu sẽ liên hệ với bạn"
        actions={
          <Button label="Về trang chủ" typeStyle="outline" iconTrailing={<ArrowRightIcon />} />
        }
      />
    </div>
  )
}
