import { Button, RateCard, SearchIcon, SectionHeader, StarIcon, StaticCard } from '@/components'

export const Rating = () => {
  return (
    <div>
      <div className="flex gap-16">
        <SectionHeader title="Đánh giá (66)" />
        <div className="flex gap-16">
          <Button size="sm" label="Tìm đánh giá" typeStyle="outline" iconLeading={<SearchIcon />} />
          <Button size="sm" label="Gửi đánh giá" typeStyle="color" iconLeading={<StarIcon />} />
        </div>
      </div>
      <div className="flex flex-col gap-20">
        <StaticCard rate={4.8} rateCount={[52, 14, 0, 0, 0]} />
        {[1, 2, 3].map((_, index) => (
          <RateCard
            key={index}
            name="Nguyễn Anh Tuấn"
            comment="Tôi đã bị cuốn hút bởi vẻ đẹp kỳ vĩ của các hòn đảo và hang động tại vịnh Hạ Long. Du thuyền sang trọng và dịch vụ tận tâm đã làm cho chuyến đi của tôi trở nên hoàn hảo. Tôi không thể quên những bữa ăn ngon lành trên du thuyền và hoạt động khám phá thú vị như kayak và thăm làng chài truyền thống. Tôi chắc chắn sẽ khuyên bạn bè và gia đình tôi tham gia Tour du lịch Du thuyền Hạ Long."
            date="22/06/2023"
          />
        ))}
      </div>
    </div>
  )
}
