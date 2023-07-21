import {
  ArrowRightIcon,
  Button,
  ChevronDownIcon,
  RoomCard,
  SectionHeader,
  XMarkIcon,
} from '@/components'
import { RoomProps } from '@/constants/type'
import styles from '../../ShipDetail.module.scss'

interface RoomsProps {
  rooms: RoomProps[]
}

export const Rooms = ({ rooms }: RoomsProps) => {
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
              <Button label="Đặt ngay" typeStyle="color" iconTrailing={<ArrowRightIcon />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
