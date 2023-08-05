import { ArrowRightIcon, Button, ProductCard, SectionHeader } from '@/components'
import { ProductRes } from '@/types/product'
import styles from './PolularShips.module.css'
import Link from 'next/link'

const test = {
  url: '/card-image.png',
  tags: ['Du thuyền nổi bật', 'Ưu đãi hè 2022', 'Bể bơi ngoài trời', 'Xe đưa đón'],
}
export const PopularShips = ({ ships }: { ships: ProductRes[] }) => {
  return (
    <div className={['container', styles.section].join(' ')}>
      <SectionHeader
        title={
          <>
            Du thuyền mới <br /> và phổ biến nhất
          </>
        }
        description="Tận hưởng sự xa hoa và đẳng cấp tối đa trên du thuyền mới nhất và phổ biến nhất. Khám phá
            một hành trình tuyệt vời đưa bạn vào thế giới của sự sang trọng, tiện nghi và trải nghiệm
            không thể quên."
      />
      <div className={styles.cardList}>
        {ships &&
          ships
            ?.slice(0, 6)
            .map((item, index) => (
              <ProductCard
                slug={item.slug}
                {...test}
                title={item.title}
                desciption={`Hạ thuỷ ${item.spec.ship?.launch} - Tàu vỏ ${item.spec.ship?.shell} - ${item.spec.ship?.cabin} phòng`}
                location={item.address}
                originalPrice={item.defaultPrice}
                rating={item.scoreReview}
                ratingCount={item.numReviews}
                key={index}
                type="grid"
              />
            ))}
      </div>
      <div className={styles.action}>
        <Link href="/tim-du-thuyen">
          <Button
            label="Xem tất cả Du thuyền"
            iconTrailing={<ArrowRightIcon />}
            typeStyle="outline"
          />
        </Link>
      </div>
    </div>
  )
}
