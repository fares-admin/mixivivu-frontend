import { Card, Skeleton } from '@/components'
import styles from './FlightItemCard.module.css'

export const FlightItemLoadingCard = () => {
  return (
    <Card>
      <div className={[styles.header, 'flex gap-16 align-center'].join(' ')}>
        <div className={styles['img-wrapper']}>
          <Skeleton width={47} height={47} />
        </div>
        <div className="flex flex-col gap-8 flex-grow">
          <Skeleton width={56} height={20} />
          <Skeleton width={160} height={16} />
        </div>
        <div className={styles.destination}>
          <Skeleton width={56} height={20} />
          <Skeleton width={80} height={16} />
        </div>
        <div className={styles.destination}>
          <Skeleton width={56} height={20} />
          <Skeleton width={80} height={16} />
        </div>
        <div className={styles.price}>
          <Skeleton width={56} height={20} />
          <Skeleton width={80} height={16} />
        </div>
        <Skeleton width={80} height={40} />
        <div>
          <Skeleton width={24} height={24} />
        </div>
      </div>
    </Card>
  )
}
