import { Button, Checkbox, ChevronDownIcon, ProductCard, SearchBox } from '@/components'
import { NextPageWithLayout } from '@/pages/_app'
import Image from 'next/image'
import { filterList, productList } from '@/constants/config'
import styles from './SearchPageDetail.module.scss'

const Sidebar = () => {
  return (
    <div className={[styles['side-bar'], 'flex flex-col'].join(' ')}>
      <div className={styles['side-bar__header']}>
        <div className="subheading md flex-grow">Lọc kết quả</div>
        <Button size="sm" label="Đặt lại" typeStyle="link-color" />
      </div>
      <div className={styles['side-bar__content']}>
        {filterList.map((filterItem, index) => (
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

const ShipList = () => {
  return (
    <div className={[styles['ship-list'], 'flex flex-col gap-32'].join(' ')}>
      {productList.map((item, index) => (
        <ProductCard type="list" {...item} key={index} />
      ))}
    </div>
  )
}

const SearchPageDetail: NextPageWithLayout = () => {
  return (
    <div className="section-bg ">
      <div className={[styles['search-page'], 'flex flex-col gap-80 container'].join(' ')}>
        <SearchBox
          className={styles['search-box']}
          title="Bạn lựa chọn du thuyền Hạ Long nào?"
          description="Hơn 100 tour du thuyền hạng sang giá tốt đang chờ bạn"
        />
        <div className={styles.header}>
          <div className={styles.title}>
            <h4>{`Tìm thấy 78 kết quả cho "Vịnh Lan Hạ"`}</h4>
            <div>
              <Image src="/heading-border.png" width={80} height={8} />
            </div>
          </div>
          <Button label="Bán chạy" typeStyle="outline" iconTrailing={<ChevronDownIcon />} />
        </div>
        <div className="flex gap-32">
          <Sidebar />
          <ShipList />
        </div>
      </div>
    </div>
  )
}

export default SearchPageDetail
