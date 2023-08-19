import {
  HeaderAdmin,
  Input,
  Pagination,
  RateCard,
  SearchIcon,
  TabItemProps,
  Tabs,
} from '@/components'
import axios from 'axios'
import { getEndpoint, reviewEndpoints } from '@/constants/endpoints'
import { CommonListResultType } from '@/types'
import { useApiCall } from '@/hooks'

import styles from './ReviewManagement.module.scss'
import { useEffect, useState } from 'react'
import { ReviewRes } from '@/types/review'

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
  const [reviews, setReviews] = useState<ReviewRes[]>([])
  // const [searchKey, setSearchKey] = useState('')

  const { setLetCall: fetchReviews } = useApiCall<CommonListResultType<ReviewRes>, string>({
    callApi: () => axios.get(getEndpoint(reviewEndpoints, 'getList')),
    handleSuccess: (message, data) => {
      if (message) {
        setReviews(data.data)
      }
    },
  })

  useEffect(() => {
    fetchReviews(true)
  }, [fetchReviews])

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
              // onChange={(e) => setSearchKey(e.target.value)}
            />
          </div>
          <Tabs tabs={tabs} size="sm" activeKey={1} />
        </div>
        <div className="flex flex-col gap-16">
          {reviews.map((item) => (
            <RateCard
              name="Nguyễn Anh Tuấn"
              comment="Tôi đã bị cuốn hút bởi vẻ đẹp kỳ vĩ của các hòn đảo và hang động tại vịnh Hạ Long. Du thuyền sang trọng và dịch vụ tận tâm đã làm cho chuyến đi của tôi trở nên hoàn hảo. Tôi không thể quên những bữa ăn ngon lành trên du thuyền và hoạt động khám phá thú vị như kayak và thăm làng chài truyền thống. Tôi chắc chắn sẽ khuyên bạn bè và gia đình tôi tham gia Tour du lịch Du thuyền Hạ Long."
              date={item.created}
              isAdmin
            />
          ))}
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