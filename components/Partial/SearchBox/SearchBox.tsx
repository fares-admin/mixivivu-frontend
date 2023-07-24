import {
  Button,
  Card,
  ChevronDownIcon,
  CircleDolarIcon,
  Input,
  MapPinAltIcon,
  SearchIcon,
} from '@/components'

import Link from 'next/link'
import styles from './SearchBox.module.css'

interface SearchBoxProps {
  title: string
  description: string
  className: string
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
        <Input
          customClass={styles.selectInput}
          iconSwap={<CircleDolarIcon />}
          supportIcon={<ChevronDownIcon />}
          placeHolder="Tất cả địa điểm"
        />
        <Link href="/tim-du-thuyen">
          <Button color="color" label="Tìm kiếm" />
        </Link>
      </div>
    </Card>
  )
}
