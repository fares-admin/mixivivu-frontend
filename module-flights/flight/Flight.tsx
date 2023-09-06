import {
  FlightSearchBox,
  ReviewsSection,
  PartnerSection,
  BlogSection,
  FlightSearchNavigation,
} from '@/components'

import styles from './Flight.module.scss'
import { Media, MediaContextProvider } from '@/media-query'

export const Flight = () => {
  return (
    <div className={styles.flight}>
      <div className={styles.banner}>
        <MediaContextProvider>
          <Media lessThan="md">
            <FlightSearchNavigation />
          </Media>
          <Media greaterThan="mdless">
            <video
              className={styles['bg-video']}
              src="https://minio.fares.vn/mixivivu-dev/video/banner.mp4"
              autoPlay
              muted
              playsInline
              loop
            />
            <FlightSearchBox
              className={styles.searchBox}
              title="Mở cánh cửa khám phá cùng Mixivivu"
              description="Mixivivu - Đặt chân lên đỉnh mây với một bước nhảy"
            />
          </Media>
        </MediaContextProvider>
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
