import { ImageFill } from '@/components'
import styles from '../FlightSidebar/FlightSidebar.module.scss'

export const TicketDetail = () => {
  return (
    <div className={[styles['side-bar'], 'flex flex-col'].join(' ')}>
      <div className={styles['side-bar__header']}>
        <div className="subheading md flex-grow">Chi tiết giá vé</div>
      </div>
      <div className={styles['filter-item']}>
        <div className="flex flex-col gap-16">
          <div className="flex gap-12">
            <div className={styles['img-wrapper']}>
              <ImageFill src="/carousel1.png" />
            </div>
            <div className="flex flex-col gap-4">
              <label className="sm">HAN → SGN</label>
              <p className="sm">22:50, 17/07</p>
            </div>
          </div>
          <div className="flex gap-12">
            <div className={styles['img-wrapper']}>
              <ImageFill src="/carousel1.png" />
            </div>
            <div className="flex flex-col gap-4">
              <label className="sm">HAN → SGN</label>
              <p className="sm">22:50, 17/07</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['filter-item']}>
        <label className="md">Tóm tắt vé</label>
        <div className="flex gap-16">
          <div className="flex flex-col gap-4">
            <p className="sm">Người lớn</p>
            <label className="sm">1 x 2,812,400</label>
          </div>
          <div className="flex flex-col gap-4 text-right flex-grow">
            <p className="sm">Tổng</p>
            <label className="sm">2,812,400</label>
          </div>
        </div>
      </div>
      <div className={styles['side-bar__footer']}>
        <div className="flex justify-between gap-12 w-full">
          <label className="md">Tổng</label>
          <div className="subheading sm">2,812,400 VND</div>
        </div>
      </div>
    </div>
  )
}
