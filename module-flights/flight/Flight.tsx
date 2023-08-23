import { FlightSearchBox, ReviewsSection, PartnerSection, BlogSection } from '@/components'

import styles from './Flight.module.scss'

export const Flight = () => {
  return (
    <div className={styles.flight}>
      <div className={styles.banner}>
        <video className={styles['bg-video']} src="/banner.mp4" autoPlay muted playsInline loop />
        <FlightSearchBox
          className={styles.searchBox}
          title="Mở cánh cửa khám phá cùng Mixivivu"
          description="Mixivivu - Đặt chân lên đỉnh mây với một bước nhảy"
        />
      </div>
      <div className={styles.reviewSection}>
        <ReviewsSection />
      </div>
      <div className={[styles.partnerSection, 'section-bg'].join(' ')}>
        <PartnerSection />
      </div>
      <div>
        <BlogSection />
      </div>
    </div>
  )
}
