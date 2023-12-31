import { Button, Card, PlusIcon } from '@/components'
import styles from '../../AddTour.module.scss'
import { AddRoomCard } from '../AddRoomCard'

interface AddRoomProps {
  rooms: any[]
  // setRooms: any
}

export const AddRooms = ({ rooms }: AddRoomProps) => {
  return (
    <Card>
      <div className={styles['card-header']}>
        <div className="subheading md">Phòng & giá</div>
      </div>
      {/* <div className={styles['card-header']}>
        <div className="flex flex-col gap-24">
          <label className="lg">Dịch vụ</label>
          <div className="flex gap-16">
            <Checkbox customClass="flex-grow" text="2 Ngày 1 Đêm" type="checkbox" sizeInput="sm" />
            <Checkbox customClass="flex-grow" text="3 Ngày 2 Đêm" type="checkbox" sizeInput="sm" />
          </div>
        </div>
      </div> */}
      <div className={styles['card-content']}>
        {rooms.length > 0 &&
          rooms.map((item, index) => <AddRoomCard index={index + 1} room={item} />)}
        <AddRoomCard index={rooms.length + 1} />
      </div>
      <div className={styles['card-footer']}>
        <Button label="Thêm phòng" iconLeading={<PlusIcon />} size="sm" typeStyle="outline" />
      </div>
    </Card>
  )
}
