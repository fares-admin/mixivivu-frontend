import { ArrowRightIcon, BlogCard, Button, SectionHeader } from '@/components'
import { blogList } from '@/constants/config'
import styles from './BlogSection.module.css'

export const BlogSection = () => {
  return (
    <div className={['container', styles.section].join(' ')}>
      <SectionHeader
        title={
          <>
            Hạ Long: Khám phá Sự đặc sắc <br /> và Cập nhật tin tức mới nhất
          </>
        }
        description="Hạ Long: Bí mật và Cuộc sống trong Vịnh - Khám phá và Cập nhật những tin tức hấp dẫn từ điểm đến tuyệt vời này."
      />
      <div className={styles.cardList}>
        {blogList.slice(0, 3).map((item, index) => (
          <BlogCard {...item} key={index} />
        ))}
      </div>
      <div className={styles.action}>
        <Button label="Xem tất cả" iconTrailing={<ArrowRightIcon />} typeStyle="outline" />
      </div>
    </div>
  )
}
