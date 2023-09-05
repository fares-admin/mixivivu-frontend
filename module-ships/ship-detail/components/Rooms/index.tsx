import {
  ArrowRightIcon,
  Button,
  ChevronDownIcon,
  RoomCard,
  SectionHeader,
  XMarkIcon,
} from '@/components'
import { useEffect, useState } from 'react'
import { InfoModal } from '@/components/Modal/InfoModal'
import styles from '../../ShipDetail.module.scss'
import { BookingTourModal } from '../BookingTourModal'
import { RoomRes } from '@/types/room'
import { useApiCall } from '@/hooks'
import axios from 'axios'
import { getEndpoint, roomEndpoints } from '@/constants/endpoints'
import { CommonListResultType } from '@/types'
import { rooms as room1 } from '@/constants/config'

export interface RoomsProps {
  id: string
}

export const Rooms = ({ id }: RoomsProps) => {
  const [, setRooms] = useState<RoomRes[]>([])
  const [openModal, setOpenModal] = useState(false)
  const [openSuccessModal, setOpenSuccessModal] = useState(false)
  const { setLetCall: fetchRooms } = useApiCall<CommonListResultType<RoomRes>, string>({
    callApi: () =>
      axios.get(getEndpoint(roomEndpoints, 'getList'), {
        params: {
          productId: id,
        },
      }),
    handleSuccess: (message, data) => {
      if (message) {
        setRooms(data.data)
      }
    },
  })

  useEffect(() => {
    fetchRooms(true)
  }, [fetchRooms])

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
        <div className={['flex flex-col gap-16 ', styles['rooms-list']].join(' ')}>
          {room1.map((item, index) => (
            <RoomCard {...item} key={index} />
          ))}
        </div>
        <div
          className={['flex align-center gap-40 justify-between', styles['rooms-footer']].join(' ')}
        >
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
        rooms={room1}
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
