import {
  ArrowRightIcon,
  BlogCard,
  Button,
  CategoryCard,
  ProductCard,
  ReviewQuote,
  SectionHeader,
  SearchBox,
} from '@/components'
import { blogList, categoryList, productList, reviewers } from '@/constants/config'
import Image from 'next/image'
import { NextPageWithLayout } from '@/pages/_app'
import styles from './Home.module.scss'

const HomePage: NextPageWithLayout = () => {
  return (
    <div className={styles.home}>
      <div className={styles.banner}>
        <SearchBox
          className={styles.searchBox}
          title="Bạn lựa chọn du thuyền Hạ Long nào?"
          description="Hơn 100 tour du thuyền hạng sang giá tốt đang chờ bạn"
        />
      </div>
      <div id={styles.popularSections} className="section-bg">
        <section className="container">
          <SectionHeader
            title={
              <>
                Du thuyền mới <br /> và phổ biến nhất
              </>
            }
            description="Tận hưởng sự xa hoa và đẳng cấp tối đa trên du thuyền mới nhất và phổ biến nhất. Khám phá
            một hành trình tuyệt vời đưa bạn vào thế giới của sự sang trọng, tiện nghi và trải nghiệm
            không thể quên."
          />
          <div className={styles.cardList}>
            {productList.slice(0, 6).map((item, index) => (
              <ProductCard {...item} key={index} type="grid" />
            ))}
          </div>
          <div className={styles.action}>
            <Button
              label="Xem tất cả Du thuyền"
              iconTrailing={<ArrowRightIcon />}
              typeStyle="outline"
            />
          </div>
        </section>
      </div>
      <div id={styles.reviewSection} className="section-bg">
        <section className="container">
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
                customClass={styles.reviewBtn}
                key={index}
                typeStyle="outline"
                label={item.name}
                iconLeading={<Image width={40} height={40} src={item.url} />}
              />
            ))}
          </div>
        </section>
      </div>
      <section className="container">
        <SectionHeader
          title={<>Các điểm đến của Mixivivu</>}
          description="Khám phá vẻ đẹp tuyệt vời của Du thuyền Hạ Long: Hành trình đến thiên đường thiên nhiên"
          center
        />
        <div className={styles.cardList}>
          {categoryList.map((item, index) => (
            <CategoryCard {...item} key={index} />
          ))}
        </div>
      </section>
      <div id={styles.partnersSection} className="section-bg">
        <section className="container">
          <SectionHeader
            title={
              <>
                Đối tác Cùng các <br />
                Hãng Du thuyền Lớn
              </>
            }
            description="Đối tác hàng đầu với các hãng du thuyền danh tiếng: Ưu đãi độc quyền dành riêng cho bạn"
          />
          <div className={styles.partnerList}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Image src={`/partners/partner${item}.png`} key={item} width={176} height={64} />
            ))}
          </div>
        </section>
      </div>
      <section className="container">
        <SectionHeader
          title={
            <>
              Hạ Long: Khám phá Sự đặc sắc <br /> và Cập nhật tin tức mới nhất
            </>
          }
          description="Hạ Long: Bí mật và Cuộc sống trong Vịnh - Khám phá và Cập nhật những tin tức hấp dẫn từ điểm đến tuyệt vời này."
        />
        <div className={styles.cardList}>
          {blogList.slice(0, 6).map((item, index) => (
            <BlogCard {...item} key={index} />
          ))}
        </div>
        <div className={styles.action}>
          <Button label="Xem tất cả" iconTrailing={<ArrowRightIcon />} typeStyle="outline" />
        </div>
      </section>
    </div>
  )
}

export default HomePage