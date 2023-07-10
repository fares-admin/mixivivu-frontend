import { StarIcon, Card, Button, ThumbsUpIcon } from '@/components'
import styles from './RateCard.module.css'

interface RateCardProps {
  name: string
  comment: string
  date: string
}

export const RateCard = ({ name, comment, date }: RateCardProps) => {
  return (
    <Card customClass={styles.rateCard}>
      <div>
        {[1, 2, 3, 4, 5].map((item) => (
          <StarIcon key={item} width="24" height="24" strokeColor="var(--warning-base)" />
        ))}
      </div>
      <label className="md">{name}</label>
      <p className="sm">{comment}</p>
      <div className={styles.action}>
        <Button
          iconLeading={<ThumbsUpIcon width="20" height="20" strokeColor="var(--primary-dark)" />}
          label="Hữu ích"
          typeStyle="link-color"
          size="sm"
        />
        <div className={styles.dot} />
        <p className={`${styles.date} sm`}>{date}</p>
      </div>
    </Card>
  )
}
