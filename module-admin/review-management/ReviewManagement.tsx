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
  const [total, setTotal] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [reviews, setReviews] = useState<ReviewRes[]>([])
  const [searchKey, setSearchKey] = useState('')

  const { setLetCall: fetchReviews } = useApiCall<CommonListResultType<ReviewRes>, string>({
    callApi: () =>
      axios.get(getEndpoint(reviewEndpoints, 'getList'), {
        params: {
          comment: searchKey,
          size: pageSize,
          page: currentPage,
        },
      }),
    handleSuccess: (message, data) => {
      if (message) {
        setReviews(data.data)
        setTotal(data.total)
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
              onChange={(e) => setSearchKey(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  fetchReviews(true)
                }
              }}
            />
          </div>
          <Tabs tabs={tabs} size="sm" activeKey={1} />
        </div>
        <div className="flex flex-col gap-16">
          {reviews.map((item) => (
            <RateCard
              name={item.name}
              comment={item.comment}
              date={item.created}
              score={item.score}
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
