import { Button, ChevronDownIcon, Collapse, ImageFill } from '@/components'
import { useState } from 'react'
import styles from './FlightItemCard.module.css'

interface FlightItemCardProps {
  isSelected?: boolean
  handleSelect: () => void
}

export const FlightItemCard = ({ isSelected = false, handleSelect }: FlightItemCardProps) => {
  const [isCollapse, setIsCollapse] = useState(true)

  const handleCollapse = () => {
    setIsCollapse(!isCollapse)
  }

  return (
    <Collapse
      isCollapse={isCollapse}
      header={
        <div
          className={[
            styles.header,
            'flex gap-16 align-center',
            isSelected && isCollapse ? styles['selected-flight'] : ' ',
          ].join(' ')}
          onClick={handleCollapse}
        >
          <div className={styles['img-wrapper']}>
            <ImageFill src="/card-image.png" />
          </div>
          <div className="flex flex-col gap-8 flex-grow">
            <label className="sm">VN116</label>
            <p className="sm">Vietnam Airlines</p>
          </div>
          <div className={styles.destination}>
            <label className="sm">08:40</label>
            <p className="sm">Hồ Chí Minh (SGN)</p>
          </div>
          <div className={styles.destination}>
            <label className="sm">08:40</label>
            <p className="sm">Hồ Chí Minh (SGN)</p>
          </div>
          <div className={styles.price}>
            <label className="sm">1,352,200</label>
            <p className="sm">VND</p>
          </div>
          <Button
            onClick={handleSelect}
            label={isSelected ? 'Chọn lại' : 'Chọn'}
            size="sm"
            typeStyle="outline"
          />
          <div>
            <ChevronDownIcon strokeColor="var(--gray-600)" />
          </div>
        </div>
      }
      content={
        <div className={styles.content}>
          <div className="flex gap-19 flex-grow">
            <div className={styles['vertical-steps']}>
              <div className={styles['vertical-big-dot']} />
              {[1, 2, 3, 4, 5, 6, 7].map((_, idx) => (
                <div className={styles['vertical-small-dot']} key={idx} />
              ))}
              <div className={styles['vertical-big-dot']} />
            </div>
            <div className="flex flex-col gap-12">
              <div className="flex gap-8 align-center">
                <label className="sm">07:20</label>
                <div className={styles.dot} />
                <label className="sm">Cảng hàng không quốc tế Tân Sơn Nhất (SGN)</label>
              </div>
              <p className="sm">Thời gian chuyến đi: 55 phút</p>
              <div className="flex gap-8 align-center">
                <label className="sm">07:20</label>
                <div className={styles.dot} />
                <label className="sm">Cảng hàng không quốc tế Nội Bài (HAN)</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <p className="sm">Chuyến bay: VN116</p>
            <p className="sm">Hạng chỗ: A1_ECO</p>
            <p className="sm">Máy bay: A321</p>
            <p className="sm">Hành lý xách tay: 7kg</p>
            <p className="sm">Hành lý ký gửi: Vui lòng chọn ở bước tiếp theo</p>
          </div>
        </div>
      }
    />
  )
}
