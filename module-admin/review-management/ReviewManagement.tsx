import {
  HeaderAdmin,
  Input,
  Pagination,
  RateCard,
  SearchIcon,
  TabItemProps,
  Tabs,
} from '@/components'
import styles from './ReviewManagement.module.scss'
import { useState } from 'react'

const tabs: TabItemProps[] = [
  {
    id: 1,
    label: 'Chưa phê duyệt',
  },
  {
    id: 2,
    label: 'Đã phê duyệt',
  },
  {
    id: 3,
    label: 'Đã xoá',
  },
]

export const ReviewManagement = () => {
  const [pageSize, setPageSize] = useState(5)
  const [total] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <div className={styles['reviews-wrapper']}>
      <HeaderAdmin label="Review" />
      <div className={styles.container}>
        <div className="flex flex-col gap-20">
          <div className="flex gap-16 align-center">
            <div className="flex flex-col gap-4 flex-grow">
              <div className="subheading md">Tất cả các Review</div>
              <p className="sm">99 review gửi về Mixivivu</p>
            </div>
            <Input
              iconSwap={<SearchIcon />}
              placeHolder="Tìm kiếm"
              customClass={styles['search-input']}
            />
          </div>
          <Tabs tabs={tabs} size="sm" activeKey={1} />
        </div>
        <div className="flex flex-col gap-16">
          <RateCard
            name="Nguyễn Anh Tuấn"
            comment="Tôi đã bị cuốn hút bởi vẻ đẹp kỳ vĩ của các hòn đảo và hang động tại vịnh Hạ Long. Du thuyền sang trọng và dịch vụ tận tâm đã làm cho chuyến đi của tôi trở nên hoàn hảo. Tôi không thể quên những bữa ăn ngon lành trên du thuyền và hoạt động khám phá thú vị như kayak và thăm làng chài truyền thống. Tôi chắc chắn sẽ khuyên bạn bè và gia đình tôi tham gia Tour du lịch Du thuyền Hạ Long."
            date="22/06/2023"
            isAdmin
          />
        </div>
        <Pagination
          totalCount={total}
          pageSize={pageSize}
          setPageSize={setPageSize}
          onPageChange={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  )
}
