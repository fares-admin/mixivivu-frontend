import { Alert, ArrowRightIcon, Button, SectionHeader, Tabs } from '@/components'
import { useState } from 'react'
import { productList, rooms } from '@/constants/config'
import { Features, Navigation, Rating, ShipInfo } from '@/module-ships/ship-detail'
import styles from './ShipDetail.module.scss'
import { PopularShips } from '../home/components/PopularShips'
import { Rooms } from './components/Rooms'

const features = [
  'Du thuyền Heritage Cruises Bình Chuẩn có kiến trúc độc đáo, thiết kế mang đậm nét truyền thống và lịch sử.',
  'Du thuyền Heritage có nội thất các phòng nghỉ đẳng cấp và tinh xảo. Trên tàu có WIFI miễn phí.',
  'Trên du thuyền nhiều tiện nghi nổi bật mà du thuyền thường không có như phòng tranh, thư viện, gian hàng bán đồ lưu niệm, quầy bar liền kề hồ bơi.',
  'Du thuyền Heritage Cruises cung cấp các hải trình 2 ngày 1 đêm, 3 ngày 2 đêm, 4 ngày 3 đêm, để du khách chọn lựa chương trình tour phù hợp.',
]

const overviews = [
  {
    icon: '',
    value: 'Miễn phí kayaking',
  },
  {
    icon: '',
    value: 'Đi tuyến Lan Hạ',
  },
  {
    icon: '',
    value: 'Quầy bar',
  },
  {
    icon: '',
    value: 'Wi-Fi miễn phí',
  },
  {
    icon: '',
    value: 'Bao gồm tất cả các bữa ăn',
  },
  {
    icon: '',
    value: 'Bể bơi ngoài trời',
  },
  {
    icon: '',
    value: 'Phòng không hút thuốc',
  },
]

export const ShipDetail = () => {
  const tabItems = [
    {
      id: '1',
      label: 'Đặc điểm nổi bật',
    },
    {
      id: '2',
      label: 'Phòng & giá',
    },
    {
      id: '3',
      label: 'Giới thiệu',
    },
    {
      id: '4',
      label: 'Quy định',
    },
    {
      id: '5',
      label: 'Đánh giá',
      badge: 5,
    },
  ]
  const [activeTab, setActiveTab] = useState(tabItems[0].id)
  const handleChangeTab = (key: string) => {
    setActiveTab(key)
  }
  return (
    <>
      <div className={['container'].join(' ')}>
        <Navigation />
      </div>
      <div className={[styles['ship-detail'], 'container flex flex-col gap-40'].join(' ')}>
        <Tabs tabs={tabItems} activeKey={activeTab} onChange={handleChangeTab} />
        <div className="flex gap-32 w-full">
          <div className="flex flex-col gap-80 flex-grow">
            <Features features={features} overviews={overviews} />
            <Rooms rooms={rooms} />
            <div>
              <SectionHeader title="Giới thiệu" />
            </div>
            <div>
              <SectionHeader title="Quy định chung và lưu ý" />
              <div className="flex gap-4 align-center">
                <label className="md">Bạn có thể xem Quy định chung và lưu ý:</label>
                <Button typeStyle="link-color" label="Tại đây" iconTrailing={<ArrowRightIcon />} />
              </div>
            </div>
            <div>
              <SectionHeader title="Câu hỏi thường gặp" />
              <div className="flex gap-4 align-center">
                <label className="md">Bạn có thể xem Câu hỏi thường gặp:</label>
                <Button typeStyle="link-color" label="Tại đây" iconTrailing={<ArrowRightIcon />} />
              </div>
            </div>
            <div className="flex flex-col gap-40">
              <SectionHeader title="Bản đồ và lịch trình" />
              <div className="flex flex-col gap-20">
                <Alert
                  title="Thông tin cần biết:"
                  color="gray"
                  content={
                    <ul>
                      <li>
                        Du thuyền Heritage Bình Chuẩn xuất phát từ Lux Cruises, Lô 28 Cảng Quốc Tế
                        Tuần Châu
                      </li>
                      <li>Bạn có thể xem chi tiết lịch trình 2 ngày 1 đêm tại đây.</li>
                    </ul>
                  }
                />
                <iframe
                  title="google-map"
                  width="100%"
                  height="332"
                  style={{ border: 0, borderRadius: 24 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed/v1/place?key=&callback=initMap
    &q=Space+Needle,Seattle+WA"
                />
              </div>
            </div>
            <Rating />
          </div>
          <div className={styles['side-bar']}>
            <ShipInfo />
          </div>
        </div>
      </div>
      <div>
        <PopularShips ships={productList.slice(0, 3)} />
      </div>
    </>
  )
}
