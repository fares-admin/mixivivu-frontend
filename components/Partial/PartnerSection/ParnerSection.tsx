import { SectionHeader } from '@/components'
import Image from 'next/image'
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
          <Image src={`/partners/partner${item}.png`} key={item} width={176} height={64} />
        ))}
      </div>
    </div>
  )
}
