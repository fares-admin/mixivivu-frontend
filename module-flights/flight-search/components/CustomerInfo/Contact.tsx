import { Card, Checkbox, Input } from '@/components'
import styles from './CustomerInfo.module.scss'

export const CustomerContact = () => {
  return (
    <Card customClass={styles['customer-info']}>
      <div className={styles['customer-info__header']}>
        <div className="subheading md">Thông tin liên hệ</div>
      </div>
      <div className={styles['customer-info__content']}>
        <div className="flex flex-col gap-24">
          <div className="grid grid-cols-2 gap-16">
            <Input label="Quý danh" placeHolder="Quý ông" />
            <Input label="Họ tên" placeHolder="Nhập họ tên" />
          </div>
          <div className="grid grid-cols-3 gap-16">
            <Input label="Điện thoại" placeHolder="Nhập điện thoại" />
            <Input label="Email" placeHolder="Nhập email" />
            <Input label="Ghi chú" placeHolder="Yêu cầu đặc biệt" />
          </div>
        </div>
      </div>
      <div className={styles['customer-info__footer']}>
        <div className="flex gap-8">
          <Checkbox type="checkbox" text="Tôi muốn xuất hóa đơn" sizeInput="sm" />
        </div>
      </div>
    </Card>
  )
}
