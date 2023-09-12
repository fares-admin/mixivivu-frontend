import { ArrowRightIcon, Button, RoomCard, SectionHeader, XMarkIcon } from '@/components'
import { Dispatch, SetStateAction, useState } from 'react'
import { InfoModal } from '@/components/Modal/InfoModal'
import styles from '../../ShipDetail.module.scss'
import { BookingTourModal } from '../BookingTourModal'
import { RoomRes } from '@/types/room'
import { ProductRes } from '@/types/product'
import Link from 'next/link'
import { Routes } from '@/constants/routes'
import { formatter } from '@/constants/currencies'

export interface RoomsProps {
  shipDetail: ProductRes
  rooms: RoomRes[]
  setRooms: Dispatch<SetStateAction<any[]>>
}

export const Rooms = ({ shipDetail, rooms, setRooms }: RoomsProps) => {
  const [openModal, setOpenModal] = useState({ isOpen: false, isFullShip: false })
  const [openSuccessModal, setOpenSuccessModal] = useState(false)
  const handleChangeRooms = (value, id) => {
    setRooms(rooms.map((room) => (room._id === id ? { ...room, roomCount: value } : room)))
  }
  const getTotal = () => {
    return rooms.reduce((accumulator, object) => {
      return accumulator + object.price * object.roomCount
    }, 0)
  }
  return (
    <div id="rooms" className="flex flex-col gap-40">
      <SectionHeader title={<>Các loại phòng & giá</>} />
      <div className={['flex flex-col gap-40', styles['room-types'], 'section-bg'].join(' ')}>
        <div className="flex justify-end">
          {/* <Button
            label="Chọn dịch vụ"
            typeStyle="outline"
            iconTrailing={<ChevronDownIcon />}
            size="sm"
          /> */}
          <Button
            label="Xoá lựa chọn"
            typeStyle="outline"
            iconLeading={<XMarkIcon />}
            size="sm"
            onClick={() => setRooms(shipDetail.rooms.map((item) => ({ ...item, roomCount: 0 })))}
          />
        </div>
        <div className={['flex flex-col gap-16 ', styles['rooms-list']].join(' ')}>
          {rooms.map((item, index) => (
            <RoomCard
              {...item}
              roomCount={item.roomCount || 0}
              url="/card-image.png"
              area={item.size}
              userPerRoom={item.maxPersons}
              key={index}
              onChange={(value) => handleChangeRooms(value, item._id)}
            />
          ))}
        </div>
        <div
          className={['flex align-center gap-40 justify-between', styles['rooms-footer']].join(' ')}
        >
          <div>
            <label className={['sm', styles['price-label']].join(' ')}>Tổng tiền</label>
            <div className={['subheading lg', styles.price].join(' ')}>
              {formatter.format(getTotal())} đ
            </div>
          </div>
          <div className="flex gap-16">
            <Button
              label="Thuê trọn tàu"
              typeStyle="outline"
              onClick={() => setOpenModal({ isFullShip: true, isOpen: true })}
            />
            <Button
              onClick={() => setOpenModal({ isFullShip: false, isOpen: true })}
              label="Đặt ngay"
              typeStyle="color"
              iconTrailing={<ArrowRightIcon />}
            />
          </div>
        </div>
      </div>
      <BookingTourModal
        shipDetail={shipDetail}
        openModal={openModal.isOpen}
        setOpenModal={(value) => setOpenModal({ ...openModal, isOpen: value })}
        setOpenSuccessModal={setOpenSuccessModal}
        rooms={rooms.filter((item) => item.roomCount > 0)}
        isFullShip={openModal.isFullShip}
        handleChangeRooms={(value, id) => handleChangeRooms(value, id)}
      />
      <InfoModal
        open={openSuccessModal}
        setOpen={setOpenSuccessModal}
        title="Bạn đã đặt Tour thành công"
        description="Mixivivu sẽ liên hệ với bạn"
        actions={
          <Link href={Routes.home}>
            <Button label="Về trang chủ" typeStyle="outline" iconTrailing={<ArrowRightIcon />} />
          </Link>
        }
      />
    </div>
  )
}
