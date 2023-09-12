import { Button, ChevronDownIcon, Input, MinusIcon, PlusIcon } from '@/components'
import { useState } from 'react'
import styles from './RoomPicker.module.css'
import { useOutsideClick } from '@/hooks/useClickOutside'

interface QuantityItemProps {
  name: string
  defaultValue: number
  handleChange: (amount: number) => void
  customClass?: string
}

export const QuantityItem = ({
  defaultValue,
  name,
  handleChange,
  customClass,
}: QuantityItemProps) => {
  const handleMinus = () => {
    if (defaultValue > 0) handleChange(defaultValue - 1)
  }
  const handlePlus = () => {
    handleChange(defaultValue + 1)
  }
  return (
    <div className={[styles.item, 'flex gap-8', customClass].join(' ')}>
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
  const handleSubmit = () => {
    setRoomDetail({
      adults,
      children,
    })
    setShowRoomPicker(false)
  }
  const showRoomPickerRef = useOutsideClick(() => {
    setShowRoomPicker(false)
  })
  return (
    <div className={styles['room-picker']} ref={showRoomPickerRef}>
      <Input
        onClick={() => setShowRoomPicker(true)}
        label="Số lượng"
        type="button"
        value={`${roomDetail.adults} Người lớn - ${roomDetail.children} - Trẻ em`}
        supportIcon={<ChevronDownIcon />}
      />
      {showRoomPicker && (
        <div className={styles['room-picker__dropdown']}>
          <div className={[styles.content, 'flex flex-col gap-16'].join(' ')}>
            <QuantityItem defaultValue={adults} name="Người lớn" handleChange={setAdults} />
            <QuantityItem defaultValue={children} name="Trẻ em" handleChange={setChildren} />
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
