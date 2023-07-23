import { Skeleton } from '@/components'
import { Card } from '../Card'
import styles from './ProductCard.module.css'

export interface ProductCardLoadingProps {
  type: 'grid' | 'list'
}

export const ProductLoadingCard = ({ type = 'grid' }: ProductCardLoadingProps) => {
  return (
    <Card customClass={styles[type]}>
      <div className={styles.imageWrapper}>
        <Skeleton
          className={styles.imageWrapper__image}
          width={352}
          height={type === 'grid' ? 216 : 264}
        />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.body}>
          <Skeleton height={22} width={80} />
          <Skeleton width="100%" height={32} />
          <Skeleton height={20} width={240} />
        </div>
        <div className={styles.tags}>
          {[1, 2, 3, 4].map(() => (
            <Skeleton height={22} width={80} />
          ))}
        </div>
        <div className={styles.footer}>
          <div className="flex flex-col gap-4">
            <Skeleton height={28} width={120} />
            <Skeleton height={16} width={72} />
          </div>
          <Skeleton height={40} width={96} />
        </div>
      </div>
    </Card>
  )
}
