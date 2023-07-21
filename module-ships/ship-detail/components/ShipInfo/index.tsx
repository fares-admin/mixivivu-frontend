import {
  AnchorIcon,
  BedDoubleIcon,
  BriefCaseIcon,
  Card,
  MapPinAltIcon,
  ShipIcon,
} from '@/components'
import styles from '../../ShipDetail.module.scss'

export const ShipInfo = () => {
  const shipInfo = [
    {
      icon: <AnchorIcon strokeColor="var(--gray-600)" />,
      label: 'Hạ thuỷ',
      value: 2019,
    },
    {
      icon: <BedDoubleIcon fillColor="var(--gray-600)" />,
      label: 'Cabin',
      value: 20,
    },
    {
      icon: <ShipIcon fillColor="var(--gray-600)" />,
      label: 'Thân vỏ',
      value: 'Kim loại',
    },
    {
      icon: <MapPinAltIcon strokeColor="var(--gray-600)" />,
      label: 'Hành trình',
      value: 'Vịnh Lan Hạ - Bãi tắm Ba Trái Đào - Hang Sáng Tối',
    },
    {
      icon: <BriefCaseIcon strokeColor="var(--gray-600)" />,
      label: 'Điều hành',
      value: 'Công ty cổ phần Heritage Cruises',
    },
  ]
  return (
    <Card customClass={styles['ship-info']}>
      <div className={styles['ship-info__header']}>Thông tin du thuyền</div>
      <div className={[styles['ship-info__content'], 'flex flex-col gap-16'].join(' ')}>
        {shipInfo.map((item, index) => (
          <div className="flex gap-24 align-start" key={index}>
            <div
              className={[styles['ship-info__content__label'], 'flex align-center gap-8'].join(' ')}
            >
              {item.icon}
              <p className="md">{item.label}</p>
            </div>
            <label className="md">{item.value}</label>
          </div>
        ))}
      </div>
    </Card>
  )
}
