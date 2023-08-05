import { Button, ChevronDownIcon } from '@/components'
import Image from 'next/image'

import styles from '../../SearchPageDetail.module.scss'
import { useState } from 'react'
import { IFilter } from '../..'
import { useOutsideClick } from '@/hooks/useClickOutside'

interface ISorts {
  label: string
  value?: string
}

const sorts: ISorts[] = [
  {
    label: 'Không sắp xếp',
  },
  {
    label: 'Giá thấp đến cao',
    value: 'ASC',
  },
  {
    label: 'Giá cao đến thấp',
    value: 'DESC',
  },
]

interface HeaderProps {
  totalShips: number
  filter: IFilter
  setFilter: (filter: IFilter) => void
}

export const Header = ({ totalShips, filter, setFilter }: HeaderProps) => {
  const [showSortList, setShowSortList] = useState(false)
  const [selectedSort, setSelectedSort] = useState(sorts[0])
  const handleSelectSortItem = (item: ISorts) => {
    setSelectedSort(item)
    setFilter({ ...filter, sort_defaultPrice: item.value })
    setShowSortList(false)
  }
  const ref = useOutsideClick(() => {
    setShowSortList(false)
  })
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h4>{`Tìm thấy ${totalShips} kết quả`}</h4>
        <div>
          <Image src="/heading-border.png" width={80} height={8} />
        </div>
      </div>
      <div className={styles['sort-btn']}>
        <Button
          label={selectedSort.label}
          typeStyle="outline"
          iconTrailing={<ChevronDownIcon />}
          onClick={() => setShowSortList(!showSortList)}
        />
        {showSortList && (
          <div className={styles.dropdown} ref={ref}>
            {sorts.map((item, index) => (
              <div
                key={index}
                className={styles['dropdown-item']}
                onClick={() => handleSelectSortItem(item)}
              >
                {item.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
