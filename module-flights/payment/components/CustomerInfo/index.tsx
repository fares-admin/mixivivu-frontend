import { Card } from '@/components'
import styles1 from '../../Payment.module.scss'
import styles from './CustomerInfo.module.scss'

export const CustomerInfo = () => {
  return (
    <Card customClass={styles['ticket-detail']}>
      <div className={styles1['card-header']}>
        <div className="subheading md">Thông tin liên hệ</div>
      </div>
      <div className={styles1['card-content']}>
        <div className="flex gap-16">
          <div className="flex flex-col gap-4 flex-grow">
            <label className="sm">Họ tên</label>
            <p className="md">Nguyen Van Linh</p>
          </div>
          <div className="flex flex-col gap-4 flex-grow">
            <label className="sm">Email</label>
            <p className="md">linh.nguyen@zestif.com</p>
          </div>
          <div className="flex flex-col gap-4 flex-grow">
            <label className="sm">Điện thoại</label>
            <p className="md">0999 999 999</p>
          </div>
          <div className="flex flex-col gap-4 flex-grow">
            <label className="sm">Yêu cầu đặc biệt</label>
            <p className="md">--</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
