import { Card, Checkbox } from '@/components'
import styles from '../../AddTour.module.scss'

const features = [
  {
    label: 'Miễn phí kayaking',
  },
  {
    label: 'Bao gồm tất cả các bữa ăn',
  },
  {
    label: 'Đi tuyến Lan Hạ',
  },
  {
    label: 'Bể bơi ngoài trời',
  },
  {
    label: 'Quầy bar',
  },
  {
    label: 'Phòng không hút thuốc',
  },
  {
    label: 'Wi-Fi miễn phí',
  },
  {
    label: 'Miễn phí xe đưa đón nữa',
  },
]

export const AddTourFeatures = () => {
  return (
    <Card>
      <div className={styles['card-header']}>
        <div className="subheading md">Đặc điểm nổi bật</div>
      </div>
      <div className={styles['card-content']}>
        <div className="flex flex-col gap-24">
          <label className="lg">Đặc điểm</label>
          <div className="grid grid-cols-2 gap-16">
            {features.map((item) => (
              <Checkbox type="checkbox" text={item.label} sizeInput="sm" />
            ))}
          </div>
        </div>
      </div>
      <div className={styles['card-footer']}>
        <div className="flex flex-col gap-16">
          <label className="lg">Thông tin thêm</label>
        </div>
      </div>
    </Card>
  )
}
