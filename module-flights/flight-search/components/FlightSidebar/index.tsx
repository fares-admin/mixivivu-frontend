import { Button, Checkbox } from '@/components'
import { flightFilterList } from '@/constants/config'
import styles from './FlightSidebar.module.scss'

export const FlightSidebar = () => {
  return (
    <div className={[styles['side-bar'], 'flex flex-col'].join(' ')}>
      <div className={styles['side-bar__header']}>
        <div className="subheading md flex-grow">Lọc kết quả</div>
        <Button size="sm" label="Đặt lại" typeStyle="link-color" />
      </div>
      <div className={styles['side-bar__content']}>
        {flightFilterList.map((filterItem, index) => (
          <div key={index} className={styles['filter-item']}>
            <label className="md">{filterItem.label}</label>
            {filterItem.items.map((item, index) => (
              <Checkbox key={index} type="checkbox" sizeInput="sm" text={item.label} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
