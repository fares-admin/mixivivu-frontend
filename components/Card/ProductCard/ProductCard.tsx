import { Badge, StarIcon, MapPinAltIcon, ShipIcon, Button, ImageFill } from '@/components'
import { Card } from '../Card'
import styles from './ProductCard.module.css'

export interface ProductCardProps {
  type: 'grid' | 'list'
  url: string
  rating: number
  ratingCount: number
  location: string
  title: string
  desciption: string
  price?: number
  originalPrice: number
  tags: string[]
  handleSelect?: () => void
  isAdmin?: boolean
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
  isAdmin = false,
  handleSelect,
}: ProductCardProps) => {
  const formatter = new Intl.NumberFormat('en-US')
  return (
    <Card customClass={styles[type]}>
      <div className={styles.imageWrapper}>
        <ImageFill
          className={styles.imageWrapper__image}
          src={url || '/carousel2.png'}
          width="352px"
          height={type === 'grid' ? '216px' : '264px'}
        />
        <Badge
          customClass={styles.imageWrapper__badge}
          size="sm"
          color="warning"
          iconLeading={<StarIcon width="12" height="12" strokeColor="var(--warning-base)" />}
          label={`${(rating / ratingCount || 0).toFixed(1)} (${ratingCount}) đánh giá`}
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
              <p
                className={[styles.price, 'subheading md'].join(' ')}
                style={{ color: 'var(--primary-dark, #0E4F4F)' }}
              >
                {formatter.format(price || originalPrice)}đ
              </p>
              {price && <p className={styles.originalPrice}>{formatter.format(originalPrice)}đ</p>}
            </div>
          </div>
          {!isAdmin && <Button label="Đặt ngay" size="sm" onClick={handleSelect} />}
        </div>
      </div>
    </Card>
  )
}
