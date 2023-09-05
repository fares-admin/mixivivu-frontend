import { ArrowRightIcon, Button, Card, ImageFill } from '@/components'
import styles from './NotFound.module.css'
import Link from 'next/link'

export const NotFound = () => {
  return (
    <Card customClass={styles['not-found']}>
      <div className={styles['img-wrapper']}>
        <ImageFill src="/sad.png" width="100%" height="100%" />
      </div>
      <div className="flex flex-col gap-8">
        <h5>Rất tiếc, Mixivivu không tìm thấy kết quả cho bạn</h5>
        <p className="md" style={{ color: ' var(--gray-600, #475467)' }}>
          Nhấn OK để bắt đầu tìm kiếm mới.
        </p>
      </div>
      <Link href="/">
        <a>
          <Button label="OK" iconTrailing={<ArrowRightIcon />} typeStyle="outline" />
        </a>
      </Link>
    </Card>
  )
}
