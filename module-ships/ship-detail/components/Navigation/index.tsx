import { AnchorIcon, Badge, SectionHeader, StarIcon, UsersIcon } from '@/components'
import styles from '../../ShipDetail.module.scss'

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <SectionHeader
        title={
          <div className="flex flex-col gap-16">
            <h4>Du thuyền Heritage Bình Chuẩn Cát Bà</h4>
            <div className="flex gap-8">
              <Badge
                customClass={styles.imageWrapper__badge}
                size="lg"
                color="warning"
                iconLeading={<StarIcon strokeColor="var(--warning-base)" />}
                label="5.0 (99 đánh giá)"
              />
              <Badge
                customClass={styles.imageWrapper__badge}
                size="lg"
                color="default"
                iconLeading={<AnchorIcon strokeColor="var(--gray-500)" />}
                label="Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu"
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
