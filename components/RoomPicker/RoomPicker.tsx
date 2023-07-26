import { Button, ChevronDownIcon, Input, MinusIcon, PlusIcon } from '@/components'
import { useState } from 'react'
import styles from './RoomPicker.module.css'

interface RoomItemProps {
  name: string
  defaultValue: number
  handleChange: (amount: number) => void
}

const RoomItem = ({ defaultValue, name, handleChange }: RoomItemProps) => {
  const handleMinus = () => {
    if (defaultValue > 0) handleChange(defaultValue - 1)
  }
  const handlePlus = () => {
    handleChange(defaultValue + 1)
  }
  return (
    <div className={[styles.item, 'flex gap-8'].join(' ')}>
      <div className={['subheading md', styles['item-value']].join(' ')}>{defaultValue}</div>
      <label className="lg flex-grow">{name}</label>
      <div className={styles['group-btn']}>
        <div className={[styles['item-btn'], styles.minus].join(' ')} onClick={handleMinus}>
          <MinusIcon />
        </div>
        <div className={[styles['item-btn'], styles.plus].join(' ')} onClick={handlePlus}>
          <PlusIcon />
        </div>
      </div>
    </div>
  )
}

interface RoomDetailProps {
  rooms: number
  adults: number
  children: number
}

interface RoomPickerProps {
  roomDetail: RoomDetailProps
  setRoomDetail: (roomDetail: RoomDetailProps) => void
}

export const RoomPicker = ({ roomDetail, setRoomDetail }: RoomPickerProps) => {
  const [showRoomPicker, setShowRoomPicker] = useState(false)
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [rooms, setRooms] = useState(1)
  const handleSubmit = () => {
    setRoomDetail({
      adults,
      rooms,
      children,
    })
    setShowRoomPicker(false)
  }
  return (
    <div className={styles['room-picker']}>
      <Input
        onClick={() => setShowRoomPicker(true)}
        label="Số lượng"
        value={`${roomDetail.rooms} Phòng - ${roomDetail.adults} Người lớn - ${roomDetail.children} - Trẻ em`}
        supportIcon={<ChevronDownIcon />}
      />
      {showRoomPicker && (
        <div className={styles['room-picker__dropdown']}>
          <div className={[styles.content, 'flex flex-col gap-16'].join(' ')}>
            <RoomItem defaultValue={rooms} name="Phòng" handleChange={setRooms} />
            <RoomItem defaultValue={adults} name="Người lớn" handleChange={setAdults} />
            <RoomItem defaultValue={children} name="Trẻ em" handleChange={setChildren} />
          </div>
          <div className={styles.actions}>
            <Button
              onClick={handleSubmit}
              customClass={styles['action-btn']}
              typeStyle="color"
              label="Áp dụng"
              size="sm"
            />
          </div>
        </div>
      )}
    </div>
  )
}
