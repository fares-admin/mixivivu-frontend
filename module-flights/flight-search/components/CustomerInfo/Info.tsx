import { Button, Card, ChevronDownIcon, ImageFill, Input, UserIcon } from '@/components'
import styles from './CustomerInfo.module.scss'

export const CustomerInfo = () => {
  return (
    <Card customClass={styles['customer-info']}>
      <div className={styles['customer-info__header']}>
        <div className="subheading md">Thông tin Hành khách</div>
      </div>
      <div className={styles['customer-info__content']}>
        <div className="flex flex-col gap-24">
          <div className="flex gap-16 align-center">
            <UserIcon />
            <div className="flex flex-col gap-4">
              <label className="sm">Người lớn</label>
              <p className="md">Hành khách 1</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-16">
            <Input label="Giới tính" supportIcon={<ChevronDownIcon />} />
            <Input label="Họ" placeHolder="Nhập họ" />
            <Input label="Đệm và tên" placeHolder="Nhập đệm & tên" />
          </div>
        </div>
      </div>
      <div className={styles['customer-info__footer']}>
        <div className="grid grid-cols-2 gap-24">
          <div className="flex gap-24">
            <div className={styles['img-wrapper']}>
              <ImageFill src="/carousel1.png" />
            </div>
            <div className="flex flex-col gap-4">
              <label className="sm">HAN → SGN</label>
              <p className="sm">22:50, 17/07</p>
            </div>
          </div>
          <div>
            <Button
              fullWidth
              customClass={styles['dropdown-btn']}
              label="Chọn hành lý ký gửi"
              size="sm"
              typeStyle="outline"
              iconTrailing={<ChevronDownIcon />}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-24">
          <div className="flex gap-24">
            <div className={styles['img-wrapper']}>
              <ImageFill src="/carousel1.png" />
            </div>
            <div className="flex flex-col gap-4">
              <label className="sm">HAN → SGN</label>
              <p className="sm">22:50, 17/07</p>
            </div>
          </div>
          <div>
            <Button
              fullWidth
              customClass={styles['dropdown-btn']}
              label="Chọn hành lý ký gửi"
              size="sm"
              typeStyle="outline"
              iconTrailing={<ChevronDownIcon />}
            />
          </div>
        </div>
      </div>
    </Card>
  )
}
