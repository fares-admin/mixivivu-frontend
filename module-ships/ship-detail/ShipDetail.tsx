import {
  Alert,
  ArrowRightIcon,
  BreadCrumbs,
  Button,
  Carousel,
  LightBox,
  SectionHeader,
  Tabs,
} from '@/components'
import { useState } from 'react'
import { overviews, productList, rooms } from '@/constants/config'
import { Features, Navigation, Rating, ShipInfo } from '@/module-ships/ship-detail'
import { useScrollspy } from '@/hooks/useScrollspy'
import styles from './ShipDetail.module.scss'
import { PopularShips } from '../home/components/PopularShips'
import { Rooms } from './components/Rooms'
import { Intro } from './components/Intro'

const features = [
  'Du thuyền Heritage Cruises Bình Chuẩn có kiến trúc độc đáo, thiết kế mang đậm nét truyền thống và lịch sử.',
  'Du thuyền Heritage có nội thất các phòng nghỉ đẳng cấp và tinh xảo. Trên tàu có WIFI miễn phí.',
  'Trên du thuyền nhiều tiện nghi nổi bật mà du thuyền thường không có như phòng tranh, thư viện, gian hàng bán đồ lưu niệm, quầy bar liền kề hồ bơi.',
  'Du thuyền Heritage Cruises cung cấp các hải trình 2 ngày 1 đêm, 3 ngày 2 đêm, 4 ngày 3 đêm, để du khách chọn lựa chương trình tour phù hợp.',
]

const offset = 160

export const ShipDetail = () => {
  const tabItems = [
    {
      id: 'features',
      label: 'Đặc điểm',
    },
    {
      id: 'rooms',
      label: 'Phòng & giá',
    },
    {
      id: 'intro',
      label: 'Giới thiệu',
    },
    {
      id: 'rules',
      label: 'Quy định',
    },
    {
      id: 'reviews',
      label: 'Đánh giá',
      badge: 5,
    },
  ]
  const [openLightBox, setOpenLightBox] = useState(false)
  const handleChangeTab = (key: string) => {
    const section = document.getElementById(key)
    section?.scrollIntoView()
  }

  const activeTab = useScrollspy(
    tabItems.map((item) => item.id),
    offset
  )

  return (
    <>
      <div className={['container', styles.wrapper].join(' ')}>
        <div className={styles.breadcrumbs}>
          <BreadCrumbs breadcrumbs={['Top 10 du thuyền', 'Du thuyền Heritage Bình Chuẩn Cát Bà']} />
        </div>
        <Navigation />
      </div>
      <div className={styles.carousel}>
        <Carousel
          handleClickImg={() => setOpenLightBox(true)}
          imgList={['/banner.jpeg', '/carousel2.png', '/carousel3.png']}
        />
      </div>
      <div className={[styles['ship-detail'], 'container flex flex-col gap-40'].join(' ')}>
        <div className={styles.tabs}>
          <Tabs tabs={tabItems} activeKey={activeTab} onChange={handleChangeTab} />
        </div>
        <div className="flex gap-32 w-full">
          <div className="flex flex-col gap-80 flex-grow">
            <Features features={features} overviews={overviews} />
            <Rooms rooms={rooms} />
            <Intro />
            <div id="rules">
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
      <div className={['section-bg', styles['popular-ships']].join(' ')}>
        <PopularShips ships={productList.slice(0, 3)} />
      </div>
      <LightBox
        imgList={['/banner.jpeg', '/carousel2.png', '/carousel3.png']}
        isOpen={openLightBox}
        setIsOpen={setOpenLightBox}
        shipDetail={{
          title: 'Du thuyền Heritage Bình Chuẩn Cát Bà',
          price: 3350000,
          originalPrice: 5400000,
        }}
      />
    </>
  )
}
