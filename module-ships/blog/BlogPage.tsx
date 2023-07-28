import { BlogCard, Button, ChevronDownIcon, SectionHeader } from '@/components'
import { blogList } from '@/constants/config'
import styles from './BlogPage.module.css'

export const BlogPage = () => {
  return (
    <div className={[styles['blog-page'], 'container flex flex-col gap-80'].join(' ')}>
      <div className="flex justify-betwee gap-16">
        <SectionHeader
          column
          title={
            <>
              Hạ Long: Khám phá Sự đặc sắc <br /> và Cập nhật tin tức mới nhất
            </>
          }
          description="Hạ Long: Bí mật và Cuộc sống trong Vịnh - Khám phá và Cập nhật những tin tức hấp dẫn từ điểm đến tuyệt vời này."
        />
        <Button label="Đọc nhiều" iconTrailing={<ChevronDownIcon />} typeStyle="outline" />
      </div>
      <div className={styles['blog-list']}>
        {blogList.slice(0, 6).map((item, index) => (
          <BlogCard {...item} key={index} />
        ))}
      </div>
    </div>
  )
}
