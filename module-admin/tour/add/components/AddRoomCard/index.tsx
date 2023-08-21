import { Button, Checkbox, Collapse, Input, MinusIcon, PlusIcon } from '@/components'
import { useState } from 'react'
import styles from './AddRoomCard.module.scss'

interface AddRoomCardProps {
  index: number
  room?: any
  // setRooms?: any
}

export const AddRoomCard = ({ index, room }: AddRoomCardProps) => {
  const [collapse, setCollapse] = useState(false)
  return (
    <Collapse
      isCollapse={collapse}
      header={
        <div className={styles.header}>
          <div className="subheading md flex-grow">Phòng {index}</div>
          <Button label="Xoá phòng" typeStyle="link-color" />
          <div onClick={() => setCollapse(!collapse)} className="cursor-pointer">
            {collapse ? <PlusIcon strokeColor="#77DADA" /> : <MinusIcon strokeColor="#77DADA" />}
          </div>
        </div>
      }
      content={
        <div className={styles.content}>
          <div className={styles['room-item']}>
            <label className="lg">Thông tin</label>
            <div className="grid grid-cols-2 gap-24">
              <Input label="Tên" placeHolder="Nhập tên" value={room?.title} />
              <Input label="Giá" placeHolder="Nhập giá" value={room?.price} />
              <Input label="Kích thước (m²)" placeHolder="Nhập kích thước" value={room?.size} />
              <Input label="Sức chứa" placeHolder="Nhập sức chứa" value={room?.maxPersons} />
            </div>
          </div>
          <div className={styles['room-item']}>
            <label className="lg">Đặc điểm</label>
            <div className="grid grid-cols-2 gap-24">
              <Checkbox text="Nhìn ra biển" type="checkbox" />
              <Checkbox text="Nhìn ra biển" type="checkbox" />
              <Checkbox text="Nhìn ra biển" type="checkbox" />
              <Checkbox text="Nhìn ra biển" type="checkbox" />
              <Checkbox text="Nhìn ra biển" type="checkbox" />
              <Checkbox text="Nhìn ra biển" type="checkbox" />
              <Checkbox text="Nhìn ra biển" type="checkbox" />
              <Checkbox text="Nhìn ra biển" type="checkbox" />
            </div>
          </div>
        </div>
      }
    />
  )
}
