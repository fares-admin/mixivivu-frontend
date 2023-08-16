import { ImageFill, SectionHeader } from '@/components'
import styles from './PartnerSection.module.css'

export const PartnerSection = () => {
  return (
    <div className={['container', styles.section].join(' ')}>
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
          <div className={styles['img-wrapper']}>
            <ImageFill src={`/partners/partner${item}.png`} key={item} width="100%" height="100%" />
          </div>
        ))}
      </div>
    </div>
  )
}
