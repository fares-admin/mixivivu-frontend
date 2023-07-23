import {
  Alert,
  ArrowRightIcon,
  BreadCrumbs,
  Button,
  Carousel,
  ImageFill,
  SectionHeader,
  Tabs,
} from '@/components'
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
        <div className={styles.breadcrumbs}>
          <BreadCrumbs breadcrumbs={['Top 10 du thuyền', 'Du thuyền Heritage Bình Chuẩn Cát Bà']} />
        </div>
        <Navigation />
      </div>
      <div className={styles.carousel}>
        <Carousel imgList={['/banner.jpeg', '/carousel2.png', '/carousel3.png']} />
      </div>
      <div className={[styles['ship-detail'], 'container flex flex-col gap-40'].join(' ')}>
        <Tabs tabs={tabItems} activeKey={activeTab} onChange={handleChangeTab} />
        <div className="flex gap-32 w-full">
          <div className="flex flex-col gap-80 flex-grow">
            <Features features={features} overviews={overviews} />
            <Rooms rooms={rooms} />
            <div className="flex flex-col gap-40">
              <SectionHeader title="Giới thiệu" />
              <p className="md">
                Du thuyền Heritage Bình Chuẩn với hải trình mới lạ đưa du khách thăm quan vịnh Lan
                Hạ, nơi đây nổi tiếng với quần đảo Cát Bà yên bình, thơ mộng và những địa điểm còn
                hoang sơ như hang Sáng Tối, khu vực Ba Trái Đào. Với hải trình 2 ngày 1 đêm hoặc 3
                ngày 2 đêm trên vịnh, du khách sẽ có những trải nghiệm đáng nhớ như chèo kayak, tắm
                ở một trong những bãi biển sạch nhất và lạc mình vào thiên đường hang động kỳ vĩ. Du
                thuyền Heritage Cruises Bình Chuẩn mang vẻ đẹp cổ điển truyền thống, được lấy cảm
                hứng từ thiết kế của “vua tàu thủy” Bạch Thái Bưởi. Nội thất các phòng nghỉ đẳng cấp
                và tinh xảo, ánh đèn lung linh cùng các bức tranh cổ được trang trí tại mỗi phòng.
                Mỗi phòng đều có quầy ba mini và ban công riêng thoáng đãng, riêng tư. Đối với hạng
                phòng Regal và Captain còn được ưu tiên đặt bàn ăn tại ban công trong phòng hoặc hầm
                rượu.
              </p>
              <ImageFill
                className={styles['blog-img']}
                height="452px"
                width="100%"
                src="/banner.jpeg"
              />
              <p className="md">
                Trên tàu, du khách được thưởng thức đồ uống tại quầy bar La Piscine cạnh hồ bơi, thư
                giãn với sân sundeck không khí trong lành, đọc sách trong thư viện Bạch Thái Bưởi,
                hoặc trải nghiệm dịch vụ massage tại spa ngay trên du thuyền. Đặc biệt, Heritage
                Cruises Bình Chuẩn có phòng triển lãm tranh L’Art de l’Annam độc nhất vô nhị trên
                vịnh Hạ Long.
              </p>
              <ImageFill
                className={styles['blog-img']}
                height="452px"
                width="100%"
                src="/banner.jpeg"
              />
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
