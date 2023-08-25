import { Button, Checkbox } from '@/components'
import styles from '../../SearchPageDetail.module.scss'
import { IFilter } from '@/module-ships/search'
import { FeatureRes } from '@/types/feature'

interface SidebarProps {
  filter: IFilter
  setFilter: (filter: IFilter) => void
  features: FeatureRes[]
}

export const Sidebar = ({ filter, setFilter, features }: SidebarProps) => {
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
    <div className={[styles['side-bar'], 'flex flex-col'].join(' ')}>
      <div className={styles['side-bar__header']}>
        <div className="subheading md flex-grow">Lọc kết quả</div>
        <Button size="sm" label="Đặt lại" typeStyle="link-color" onClick={resetFilter} />
      </div>
      <div className={styles['side-bar__content']}>
        <div className={styles['filter-item']}>
          <label className="md">Xếp hạng sao</label>
          {[1, 2, 3, 4, 5].map((item, index) => (
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
