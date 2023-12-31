/* eslint-disable import/no-extraneous-dependencies */
import { StarIcon, Card, Button, ThumbsUpIcon, TrashIcon } from '@/components'
import moment from 'moment'
import styles from './RateCard.module.css'
import { formatDate } from '@/constants/dateTime'

interface RateCardProps {
  name: string
  comment: string
  date: Date | string
  isAdmin?: boolean
  phone?: number | string
  email?: string
  score: number
}

export const RateCard = ({
  name,
  comment,
  date,
  score,
  isAdmin = false,
  phone,
  email,
}: RateCardProps) => {
  return (
    <Card customClass={styles.rateCard}>
      <div>
        {Array.from({ length: score }, (_, idx) => (
          <StarIcon key={idx} width="24" height="24" strokeColor="var(--warning-base)" />
        ))}
      </div>
      {isAdmin && (
        <>
          <label>{phone}</label>
          <label>{email}</label>
        </>
      )}
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
          <p className={`${styles.date} sm`}>{moment(date).format(formatDate)}</p>
        </div>
      ) : (
        <div className={styles.action}>
          <Button iconLeading={<ThumbsUpIcon />} label="Hữu ích" typeStyle="link-color" size="sm" />
          <div className={styles.dot} />
          <p className={`${styles.date} sm`}>{moment(date).format(formatDate)}</p>
        </div>
      )}
    </Card>
  )
}
