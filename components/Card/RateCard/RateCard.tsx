import { StarIcon, Card, Button, ThumbsUpIcon, TrashIcon } from '@/components'
import styles from './RateCard.module.css'

interface RateCardProps {
  name: string
  comment: string
  date: string
  isAdmin?: boolean
}

export const RateCard = ({ name, comment, date, isAdmin = false }: RateCardProps) => {
  return (
    <Card customClass={styles.rateCard}>
      <div>
        {[1, 2, 3, 4, 5].map((item) => (
          <StarIcon key={item} width="24" height="24" strokeColor="var(--warning-base)" />
        ))}
      </div>
      <label className="md">{name}</label>
      <p className="sm">{comment}</p>
      {isAdmin ? (
        <div className={styles.action}>
          <Button label="Phê duyệt" size="sm" typeStyle="outline" />
          <div className={styles.dot} />
          <Button
            iconLeading={<TrashIcon width="20" height="20" />}
            label="Xoá"
            size="sm"
            typeStyle="link-color"
            customClass={styles['delete-btn']}
            destructive
          />
          <div className={styles.dot} />
          <p className={`${styles.date} sm`}>{date}</p>
        </div>
      ) : (
        <div className={styles.action}>
          <Button iconLeading={<ThumbsUpIcon />} label="Hữu ích" typeStyle="link-color" size="sm" />
          <div className={styles.dot} />
          <p className={`${styles.date} sm`}>{date}</p>
        </div>
      )}
    </Card>
  )
}
