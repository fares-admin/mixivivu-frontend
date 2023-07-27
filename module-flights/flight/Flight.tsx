import { FlightSearchBox } from '@/components'
import styles from './Flight.module.scss'

export const Flight = () => {
  return (
    <div className={styles.flight}>
      <div className={styles.banner}>
        <FlightSearchBox
          className={styles.searchBox}
          title="Mở cánh cửa khám phá cùng Mixivivu"
          description="Mixivivu - Đặt chân lên đỉnh mây với một bước nhảy"
        />
      </div>
    </div>
  )
}
