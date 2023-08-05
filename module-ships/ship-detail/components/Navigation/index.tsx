import { AnchorIcon, Badge, SectionHeader, StarIcon, UsersIcon } from '@/components'
import styles from '../../ShipDetail.module.scss'

interface NavigationProps {
  title?: string
  review?: number
  reviewCount?: number
  location?: string
}

export const Navigation = ({
  title = '',
  review = 0,
  reviewCount = 0,
  location = '',
}: NavigationProps) => {
  return (
    <div className={styles.navigation}>
      <SectionHeader
        title={
          <div className="flex flex-col gap-16">
            <h4>{title}</h4>
            <div className="flex gap-8">
              <Badge
                customClass={styles.imageWrapper__badge}
                size="lg"
                color="warning"
                iconLeading={<StarIcon strokeColor="var(--warning-base)" />}
                label={`${review} (${reviewCount} đánh giá)`}
              />
              <Badge
                customClass={styles.imageWrapper__badge}
                size="lg"
                color="default"
                iconLeading={<AnchorIcon strokeColor="var(--gray-500)" />}
                label={location}
                iconTrailing={<a className={styles.mapLink}>Xem bản đồ và lịch trình</a>}
              />
              <Badge
                size="lg"
                label="6 khách đặt trong 24h qua"
                color="default"
                iconLeading={<UsersIcon />}
              />
            </div>
          </div>
        }
      />
    </div>
  )
}
