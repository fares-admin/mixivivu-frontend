import { Button, ReviewQuote, SectionHeader } from '@/components'
import { reviewers } from '@/constants/config'
import Image from 'next/image'
import styles from './ReviewsSection.module.css'

export const ReviewsSection = () => {
  return (
    <div className={['container', styles.section].join(' ')}>
      <SectionHeader
        title={
          <>
            Đánh giá từ những <br /> người đã trải nghiệm
          </>
        }
        description="Khách hàng chia sẻ về những kỷ niệm tuyệt vời trên chuyến du lịch với chúng tôi."
      />
      <ReviewQuote
        title="Tour du lịch Du thuyền Hạ Long thực sự là một trải nghiệm tuyệt vời."
        description="Tôi đã bị cuốn hút bởi vẻ đẹp kỳ vĩ của các hòn đảo và hang động tại vịnh Hạ Long. Du thuyền sang trọng và dịch vụ tận tâm đã làm cho chuyến đi của tôi trở nên hoàn hảo. Tôi không thể quên những bữa ăn ngon lành trên du thuyền và hoạt động khám phá thú vị như kayak và thăm làng chài truyền thống. Tôi chắc chắn sẽ khuyên bạn bè và gia đình tôi tham gia Tour du lịch Du thuyền Hạ Long."
        name="Nguyễn Anh Tuấn"
        time="20/06/2023"
      />
      <div className={styles.reviewList}>
        {reviewers.map((item, index) => (
          <Button
            customClass={[styles.reviewBtn, item.isActive ? '' : styles.defaultBtn].join(' ')}
            key={index}
            typeStyle="outline"
            label={item.name}
            iconLeading={<Image width={40} height={40} src={item.url} />}
          />
        ))}
      </div>
    </div>
  )
}
