import { Card, StarIcon } from '@/components'
import styles from './StaticCard.module.css'

interface StaticCardProps {
  rate: number | string
  rateCount: number[]
}

export const StaticCard = ({ rate, rateCount }: StaticCardProps) => {
  const total = rateCount.reduce((a, b) => a + b, 0)
  return (
    <Card customClass={styles.staticCard}>
      <div className={styles.rate}>
        <h4 style={{ color: 'var(--warning-base)' }}>{rate}</h4>
        <StarIcon width="40" height="40" strokeColor="var(--warning-base)" />
      </div>
      <div className={styles.content}>
        {[0, 1, 2, 3, 4].map((item) => (
          <div className={styles.content__item} key={item}>
            <label className="md">{item + 1} sao</label>
            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{ width: `${(rateCount[item] / total) * 100}%` }}
              />
            </div>
            <label className={['md', styles['rating-count']].join(' ')}>
              {rateCount[item]} đánh giá
            </label>
          </div>
        ))}
      </div>
    </Card>
  )
}
