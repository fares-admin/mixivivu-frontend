import { Card } from '@/components'
import styles1 from '../../Payment.module.scss'
import styles from './TicketDetail.module.scss'

export const TicketDetail = () => {
  return (
    <Card customClass={styles['ticket-detail']}>
      <div className={styles1['card-header']}>
        <div className="subheading md">Chi tiết giá vé</div>
      </div>
      <div className={styles1['card-content']}>
        <div className="flex gap-16">
          <div className="flex flex-col gap-4 flex-grow">
            <label className="sm">Hành khách</label>
            <p className="md">Nguyen Van Linh</p>
          </div>
          <div className="flex flex-col gap-4">
            <label className="sm">Giới tính</label>
            <p className="md">Nam</p>
          </div>
          <div className="flex flex-col gap-4">
            <label className="sm">Năm sinh</label>
            <p className="md">1995</p>
          </div>
          <div className="flex flex-col align-end gap-4 text-right">
            <label className="sm">Tổng</label>
            <p className="md">2,812,400 VND</p>
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
