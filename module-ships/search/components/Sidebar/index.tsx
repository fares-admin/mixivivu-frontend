import { Button, Checkbox } from '@/components'
import styles from '../../SearchPageDetail.module.scss'
import { IFilter } from '@/module-ships/search'
import { FeatureRes } from '@/types/feature'
import { Dispatch, SetStateAction } from 'react'

interface SidebarProps {
  filter: IFilter
  setFilter: (filter: IFilter) => void
  features: FeatureRes[]
  setOpenFilter?: Dispatch<SetStateAction<boolean>>
  isMobile?: boolean
}

export const Sidebar = ({ filter, setFilter, features, setOpenFilter, isMobile }: SidebarProps) => {
  const onFeaturesChecked = (checked: boolean, id: string) => {
    if (checked) setFilter({ ...filter, features: [...filter.features, id] })
    else setFilter({ ...filter, features: filter.features.filter((item) => item !== id) })
  }

  const onScoreReviewChecked = (checked: boolean, star: number) => {
    if (checked) setFilter({ ...filter, scoreReview: [...filter.scoreReview, star] })
    else setFilter({ ...filter, scoreReview: filter.scoreReview.filter((item) => item !== star) })
  }

  const resetFilter = () => {
    setFilter({
      ...filter,
      features: [],
      scoreReview: [],
    })
  }

  return (
    <div
      className={[
        styles['side-bar'],
        'flex flex-col',
        isMobile ? styles['side-bar-mobile'] : '',
      ].join(' ')}
    >
      <div className={styles['side-bar__header']}>
        <div className="subheading md flex-grow">Lọc kết quả</div>
        <div className="flex gap-10 align-center">
          <Button size="sm" label="Đặt lại" typeStyle="link-color" onClick={resetFilter} />
          <Button
            customClass={styles['apply-mb-btn']}
            size="sm"
            label="Áp dụng"
            typeStyle="link-color"
            onClick={() => setOpenFilter(false)}
          />
        </div>
      </div>
      <div className={styles['side-bar__content']}>
        <div className={styles['filter-item']}>
          <label className="md">Xếp hạng sao</label>
          {[3, 4, 5].map((item, index) => (
            <Checkbox
              key={index}
              type="checkbox"
              sizeInput="sm"
              text={`${item} sao`}
              checked={filter.scoreReview.includes(item)}
              onChange={(e) => onScoreReviewChecked(e.target.checked, item)}
            />
          ))}
        </div>
        <div className={styles['filter-item']}>
          <label className="md">Tiện ích</label>
          {features.map((item, index) => (
            <Checkbox
              checked={filter.features.includes(item._id)}
              key={index}
              type="checkbox"
              sizeInput="sm"
              text={item.text}
              onChange={(e) => onFeaturesChecked(e.target.checked, item._id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
