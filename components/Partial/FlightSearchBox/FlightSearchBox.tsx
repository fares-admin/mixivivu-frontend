import {
  Button,
  Card,
  Checkbox,
  ChevronDownIcon,
  FlightDatePicker,
  Input,
  PlaneArrivalIcon,
  PlaneFlyIcon,
  UserIcon,
} from '@/components'

import styles from './FlightSearchBox.module.css'
import Link from 'next/link'

interface SearchBoxProps {
  title: string
  description: string
  className?: string
}

export const FlightSearchBox = ({ title, description, className }: SearchBoxProps) => {
  return (
    <Card
      customClass={[className, styles.searchBox, 'flex flex-col justify-center gap-40'].join(' ')}
    >
      <div className="flex flex-col gap-16 gray-900">
        <h4 className="text-center">{title}</h4>
        <p className="lg text-center">{description}</p>
      </div>
      <div className="flex gap-16">
        <Checkbox name="type" type="radio" text="Một chiều" sizeInput="sm" />
        <Checkbox name="type" type="radio" text="Khứ hồi" sizeInput="sm" />
      </div>
      <div className={[styles.grid, styles.distance].join(' ')}>
        <Input
          iconSwap={<PlaneFlyIcon />}
          label="Điểm đi"
          placeHolder="Nhập thành phố / mã sân bay"
        />
        <Input
          iconSwap={<PlaneArrivalIcon />}
          label="Điểm đến"
          placeHolder="Nhập thành phố / mã sân bay"
        />
      </div>
      <div className={styles.grid}>
        <FlightDatePicker label="Ngày đi" />
        <FlightDatePicker label="Ngày về" />
      </div>
      <div className={styles.grid}>
        <div className={styles.grid}>
          <Input
            label="Người lớn"
            value={1}
            iconSwap={<UserIcon />}
            supportIcon={<ChevronDownIcon />}
          />
          <Input
            label="Trẻ em"
            value={0}
            iconSwap={<UserIcon />}
            supportIcon={<ChevronDownIcon />}
          />
        </div>
        <div className={styles.grid}>
          <Input
            label="Em bé"
            value={0}
            iconSwap={<UserIcon />}
            supportIcon={<ChevronDownIcon />}
          />
          <Link href="/tim-ve-may-bay/ket-qua">
            <Button
              label="Tìm chuyến bay"
              typeStyle="color"
              customClass={styles['search-btn']}
              fullWidth
            />
          </Link>
        </div>
      </div>
    </Card>
  )
}
