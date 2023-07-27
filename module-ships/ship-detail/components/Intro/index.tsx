import { ImageFill, SectionHeader } from '@/components'
import styles from '../../ShipDetail.module.scss'

export const Intro = () => {
  return (
    <div id="intro" className="flex flex-col gap-40">
      <SectionHeader title="Giới thiệu" />
      <p className="md">
        Du thuyền Heritage Bình Chuẩn với hải trình mới lạ đưa du khách thăm quan vịnh Lan Hạ, nơi
        đây nổi tiếng với quần đảo Cát Bà yên bình, thơ mộng và những địa điểm còn hoang sơ như hang
        Sáng Tối, khu vực Ba Trái Đào. Với hải trình 2 ngày 1 đêm hoặc 3 ngày 2 đêm trên vịnh, du
        khách sẽ có những trải nghiệm đáng nhớ như chèo kayak, tắm ở một trong những bãi biển sạch
        nhất và lạc mình vào thiên đường hang động kỳ vĩ. Du thuyền Heritage Cruises Bình Chuẩn mang
        vẻ đẹp cổ điển truyền thống, được lấy cảm hứng từ thiết kế của “vua tàu thủy” Bạch Thái
        Bưởi. Nội thất các phòng nghỉ đẳng cấp và tinh xảo, ánh đèn lung linh cùng các bức tranh cổ
        được trang trí tại mỗi phòng. Mỗi phòng đều có quầy ba mini và ban công riêng thoáng đãng,
        riêng tư. Đối với hạng phòng Regal và Captain còn được ưu tiên đặt bàn ăn tại ban công trong
        phòng hoặc hầm rượu.
      </p>
      <ImageFill className={styles['blog-img']} height="452px" width="100%" src="/banner.jpeg" />
      <p className="md">
        Trên tàu, du khách được thưởng thức đồ uống tại quầy bar La Piscine cạnh hồ bơi, thư giãn
        với sân sundeck không khí trong lành, đọc sách trong thư viện Bạch Thái Bưởi, hoặc trải
        nghiệm dịch vụ massage tại spa ngay trên du thuyền. Đặc biệt, Heritage Cruises Bình Chuẩn có
        phòng triển lãm tranh L’Art de l’Annam độc nhất vô nhị trên vịnh Hạ Long.
      </p>
      <ImageFill className={styles['blog-img']} height="452px" width="100%" src="/banner.jpeg" />
    </div>
  )
}
