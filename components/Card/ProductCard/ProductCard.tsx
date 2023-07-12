import Image from 'next/image'
import { Badge, StarIcon, MapPinAltIcon, ShipIcon, Button } from '@/components'
import { Card } from '../Card'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  type: 'grid' | 'list'
  url: string
  rating: number
  ratingCount: number
  location: string
  title: string
  desciption: string
  price: number
  originalPrice: number
  tags: string[]
  handleSelect: () => void
}
export const ProductCard = ({
  type = 'grid',
  url,
  rating,
  ratingCount,
  location,
  title,
  desciption,
  price,
  originalPrice,
  tags,
  handleSelect,
}: ProductCardProps) => {
  const formatter = new Intl.NumberFormat('en-US')
  return (
    <Card customClass={styles[type]}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.imageWrapper__image}
          src={url}
          width={352}
          height={type === 'grid' ? 216 : 264}
        />
        <Badge
          customClass={styles.imageWrapper__badge}
          size="sm"
          color="warning"
          iconLeading={<StarIcon width="12" height="12" strokeColor="var(--warning-base)" />}
          label={`${rating} (${ratingCount}) đánh giá`}
        />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.body}>
          <Badge
            customClass={styles.location}
            color="default"
            label={location}
            size="sm"
            iconLeading={<MapPinAltIcon width="12" height="12" strokeColor="var(--gray-500)" />}
          />
          <p className={[styles.title, 'subheading md'].join(' ')}>{title}</p>
          <div className={styles.description}>
            <ShipIcon width="20" height="20" fillColor="var(--gray-600)" />
            <p className="sm">{desciption}</p>
          </div>
        </div>
        {tags && type === 'list' && (
          <div className={styles.tags}>
            {tags.map((item, index) => (
              <Badge key={index} size="sm" color="default" label={item} />
            ))}
          </div>
        )}
        <div className={styles.footer}>
          <div>
            <div>
              <p className={[styles.price, 'subheading md'].join(' ')}>
                {formatter.format(price)}đ
              </p>
              <p className={styles.originalPrice}>{formatter.format(originalPrice)}đ</p>
            </div>
          </div>
          <Button label="Đặt ngay" size="sm" onClick={handleSelect} />
        </div>
      </div>
    </Card>
  )
}
