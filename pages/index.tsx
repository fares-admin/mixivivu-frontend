import { ArrowRightIcon, Button, ProductCard } from '@/components'
import { productList } from '@/constants/config'
import { Layout } from '@/components/Layout'
import { NextPageWithLayout } from './_app'
import styles from './index.module.scss'

const Dashboard: NextPageWithLayout = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className={`container ${styles.popularShips}`}>
        <div className={styles.header}>
          <h4>Du thuyền mới và phổ biến nhất</h4>
          <label className="lg">
            Tận hưởng sự xa hoa và đẳng cấp tối đa trên du thuyền mới nhất và phổ biến nhất. Khám
            phá một hành trình tuyệt vời đưa bạn vào thế giới của sự sang trọng, tiện nghi và trải
            nghiệm không thể quên.
          </label>
        </div>
        <div className={styles.shipList}>
          {productList.slice(0, 6).map((item, index) => (
            <ProductCard {...item} key={index} type="grid" />
          ))}
        </div>
        <div className={styles.action}>
          <Button
            label="Xem tất cả Du thuyền"
            iconTrailing={<ArrowRightIcon width="20" height="20" />}
            typeStyle="outline"
          />
        </div>
      </div>
    </div>
  )
}

Dashboard.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default Dashboard
