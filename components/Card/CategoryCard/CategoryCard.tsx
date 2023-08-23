import { Badge, Button, ImageFill, ShipIcon } from '@/components'
import { Card } from '../Card'
import styles from './CategoryCard.module.css'

interface CategoryCardProps {
  url: string
  shipCount: number
  title: string
}

export const CategoryCard = ({ url, shipCount, title }: CategoryCardProps) => {
  return (
    <Card customClass={styles.categoryCard}>
      <div className={styles.imageWrapper}>
        <ImageFill src={url} width="100%" height="100%" />
      </div>
      <div className={styles.body}>
        <Badge
          customClass={styles.location}
          color="default"
          label={`${shipCount} du thuyền`}
          size="sm"
          iconLeading={<ShipIcon width="12" height="12" fillColor="var(--gray-500)" />}
        />
        <h6>{title}</h6>
      </div>
      <div className={styles.footer}>
        <Button label="Xem ngay" size="sm" typeStyle="outline" />
      </div>
    </Card>
  )
}
