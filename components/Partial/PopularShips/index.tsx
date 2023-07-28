import { ArrowRightIcon, Button, ProductCard, SectionHeader } from '@/components'
import { ProductProps } from '@/constants/type'
import styles from './PolularShips.module.css'

export const PopularShips = (props: { ships: ProductProps[] }) => {
  const { ships } = props
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
        {ships?.slice(0, 6).map((item, index) => (
          <ProductCard {...item} key={index} type="grid" />
        ))}
      </div>
      <div className={styles.action}>
        <Button
          label="Xem tất cả Du thuyền"
          iconTrailing={<ArrowRightIcon />}
          typeStyle="outline"
        />
      </div>
    </div>
  )
}
