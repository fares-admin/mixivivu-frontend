import { AnchorIcon, Badge, SectionHeader, StarIcon, UsersIcon } from '@/components'
import styles from '../../ShipDetail.module.scss'
import Link from 'next/link'

interface NavigationProps {
  title?: string
  review?: number
  reviewCount?: number
  location?: string
  map?: string
}

export const Navigation = ({
  title = '',
  review = 0,
  reviewCount = 0,
  location = '',
  map = '',
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
                label={`${(review / reviewCount).toFixed(1)} (${reviewCount} đánh giá)`}
              />
              <Link href={map}>
                <a target="_blank">
                  <Badge
                    customClass={styles.imageWrapper__badge}
                    size="lg"
                    color="default"
                    iconLeading={<AnchorIcon strokeColor="var(--gray-500)" />}
                    label={location}
                    iconTrailing={<a className={styles.mapLink}>Xem bản đồ và lịch trình</a>}
                  />
                </a>
              </Link>

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
