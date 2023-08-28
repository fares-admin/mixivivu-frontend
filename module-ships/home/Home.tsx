import {
  CategoryCard,
  SectionHeader,
  SearchBox,
  PopularShips,
  ReviewsSection,
  PartnerSection,
  BlogSection,
} from '@/components'
import styles from './Home.module.scss'
import { ProductRes } from '@/types/product'
import { CategoryRes } from '@/types/category'
import Link from 'next/link'

interface HomePageProps {
  popularShips: ProductRes[]
  categories: CategoryRes[]
}

export const HomePage = ({ popularShips, categories }: HomePageProps) => {
  return (
    <div className={styles.home}>
      <div className={styles.banner}>
        <video
          className={styles['bg-video']}
          src="https://minio.fares.vn/mixivivu-dev/video/banner.mp4"
          autoPlay
          muted
          playsInline
          loop
        />
        <SearchBox
          className={styles.searchBox}
          title="Bạn lựa chọn du thuyền Hạ Long nào?"
          description="Hơn 100 tour du thuyền hạng sang giá tốt đang chờ bạn"
          categories={categories}
        />
      </div>
      <div id={styles.popularSections}>
        <PopularShips ships={popularShips} categories={categories} />
      </div>
      <div id={styles.reviewSection} className="section-bg">
        <ReviewsSection />
      </div>
      <div className={['container', styles.section].join(' ')}>
        <SectionHeader
          title={<>Các điểm đến của Mixivivu</>}
          description="Khám phá vẻ đẹp tuyệt vời của Du thuyền Hạ Long: Hành trình đến thiên đường thiên nhiên"
          center
        />
        <div className={styles.cardList}>
          {categories.map((item, index) => (
            <Link href={`/tim-du-thuyen?category=${item._id}`}>
              <a>
                <CategoryCard url={item.image} title={item.name} shipCount={0} key={index} />
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div id={styles.partnersSection} className="section-bg">
        <PartnerSection />
      </div>
      <BlogSection />
    </div>
  )
}
