import {
  Button,
  Card,
  ChevronDownIcon,
  Input,
  MapPinAltIcon,
  SearchIcon,
  SelectPrice,
} from '@/components'

import Link from 'next/link'
import styles from './SearchBox.module.css'

interface SearchBoxProps {
  title: string
  description: string
  className?: string
}

export const SearchBox = ({ title, description, className }: SearchBoxProps) => {
  return (
    <Card
      customClass={[className, styles.searchBox, 'flex flex-col justify-center gap-40'].join(' ')}
    >
      <div className="flex flex-col gap-16 gray-900">
        <h4 className="text-center">{title}</h4>
        <p className="lg text-center">{description}</p>
      </div>
      <div className="flex gap-20">
        <Input
          customClass={styles.searchInput}
          placeHolder="Nhập tên du thuyền"
          iconSwap={<SearchIcon />}
        />
        <Input
          customClass={styles.selectInput}
          iconSwap={<MapPinAltIcon />}
          supportIcon={<ChevronDownIcon />}
          placeHolder="Tất cả địa điểm"
        />
        <SelectPrice customClass={styles.selectInput} />
        <Link href="/tim-du-thuyen">
          <Button color="color" label="Tìm kiếm" />
        </Link>
      </div>
    </Card>
  )
}
