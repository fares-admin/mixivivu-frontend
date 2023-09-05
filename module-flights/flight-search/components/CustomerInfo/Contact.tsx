import { Card, Checkbox, Input } from '@/components'
import { FlightStoreSelector, setContact } from '@/redux/flight-store'
import { useDispatch, useSelector } from 'react-redux'

import styles from './CustomerInfo.module.scss'
import { GenderDropDown } from './GenderDropdown'

export const CustomerContact = () => {
  const { contact } = useSelector(FlightStoreSelector)

  const dispatch = useDispatch()

  const onChangeContact = (field: string, value: any) => {
    dispatch(
      setContact({
        ...contact,
        [field]: value,
      })
    )
  }

  return (
    <Card customClass={styles['customer-info']}>
      <div className={styles['customer-info__header']}>
        <div className="subheading md">Thông tin liên hệ</div>
      </div>
      <div className={styles['customer-info__content']}>
        <div className="flex flex-col gap-24">
          <div className={['grid grid-cols-2 gap-16', styles['input-group']].join(' ')}>
            <GenderDropDown
              labelMale="Ông"
              labelFemale="Bà"
              thisValue={contact.Gender}
              onChangeValue={(v) => onChangeContact('Gender', v)}
            />
            <Input
              value={contact.LastName}
              onChange={(e) => onChangeContact('LastName', e.target.value)}
              label="Họ"
              placeHolder="Nhập họ"
            />
          </div>
          <div className={['grid grid-cols-3 gap-16', styles['input-group']].join(' ')}>
            <Input
              value={contact.FirstName}
              onChange={(e) => onChangeContact('FirstName', e.target.value)}
              label="Đệm và tên"
              placeHolder="Nhập đệm & tên"
            />
            <Input
              label="Điện thoại"
              placeHolder="Nhập điện thoại"
              value={contact.Phone}
              onChange={(e) => onChangeContact('Phone', e.target.value)}
            />
            <Input
              label="Email"
              placeHolder="Nhập email"
              value={contact.Email}
              onChange={(e) => onChangeContact('Email', e.target.value)}
            />
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
