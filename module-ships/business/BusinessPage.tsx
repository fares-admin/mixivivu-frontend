import { ArrowRightIcon, Button, ImageFill, SearchBox, SectionHeader } from '@/components'
import Image from 'next/image'
import styles from './BusinessPage.module.scss'

export const BusinessPage = () => {
  return (
    <div className="section-bg">
      <div className={['flex flex-col gap-80 container', styles.wrapper].join(' ')}>
        <SearchBox
          className={styles['search-box']}
          title="Bạn lựa chọn du thuyền Hạ Long nào?"
          description="Hơn 100 tour du thuyền sang trọng, đẳng cấp 5 sao thăm vịnh Hạ Long và vịnh Lan Hạ đang chờ đón bạn."
        />
        <div className="flex gap-136 ">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-24">
              <SectionHeader title="Mixivivu - Tour Du thuyền Hạ Long: Kết nối doanh nghiệp, khám phá vẻ đẹp tự nhiên" />
              <label className="lg">
                Khám phá sự kết hợp hoàn hảo giữa kinh doanh và thiên nhiên tại Tour Du thuyền Hạ
                Long của Mixivivu. Trải qua những hòn đảo đẹp như tranh vẽ, hang động tuyệt đẹp và
                những hoạt động thú vị như lặn ngắm san hô, tour này mang đến cơ hội tuyệt vời để
                gắn kết đội nhóm trong doanh nghiệp của bạn. Tận hưởng dịch vụ chất lượng cao, cùng
                với không gian thoải mái và giải trí trên du thuyền. Mixivivu cam kết mang đến một
                trải nghiệm không thể quên cho doanh nghiệp của bạn.
              </label>
            </div>
            <Button
              label="Liên hệ với Mixivivu"
              typeStyle="color"
              iconTrailing={<ArrowRightIcon />}
            />
          </div>
          <div className="flex flex-col gap-24">
            {[1, 2, 3].map((item) => (
              <div className={[styles['feature-card'], 'flex gap-24'].join(' ')} key={item}>
                <div className={styles['img-wrapper']}>
                  <ImageFill width="100" height="100%" src="/carousel2.png" />
                </div>
                <div className="flex flex-col gap-16">
                  <h6>Kết nối doanh nghiệp</h6>
                  <p className="sm">
                    Tour Du thuyền Hạ Long dành cho doanh nghiệp giúp gắn kết và xây dựng mối quan
                    hệ tốt hơn giữa các thành viên trong công ty.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={['section-bg', styles.customers].join(' ')}>
        <div className="container flex flex-col gap-80">
          <SectionHeader
            title=" Khách hàng của Mixivivu"
            description="Mixivivu mang đến một trải nghiệm hoàn toàn mới,
            trải nghiệm đẳng cấp 5 sao cho khách hàng"
          />
          <div className={styles['customer-list']}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Image src={`/partners/partner${item}.png`} key={item} width={176} height={64} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
