import { Card } from '@/components'
import styles1 from '../../Payment.module.scss'
import styles from './PackageDetail.module.scss'

export const PackageDetail = () => {
  return (
    <Card customClass={styles['ticket-detail']}>
      <div className={styles1['card-header']}>
        <div className="subheading md">Hành lý ký gửi</div>
      </div>
      <div className={styles1['card-content']}>
        <div className={[styles['input-group'], 'flex gap-16'].join(' ')}>
          <div className="flex flex-col gap-4 flex-grow">
            <label className="sm">Hành khách</label>
            <p className="md">Nguyen Van Linh</p>
          </div>
          <div className="flex flex-col gap-4 flex-grow">
            <label className="sm">Dịch vụ</label>
            <p className="md">Hà Nội → Hồ Chí Minh: Hành lý ký gửi 20kg</p>
          </div>
          <div className="flex flex-col align-end gap-4 text-right">
            <label className="sm">Phí</label>
            <p className="md">0</p>
          </div>
        </div>
      </div>
      <div className={styles1['card-footer']}>
        <div className="flex justify-between gap-12">
          <label className="md">Tổng</label>
          <div className="subheading sm" style={{ color: 'var(--success-dark)' }}>
            0 VND
          </div>
        </div>
      </div>
    </Card>
  )
}
