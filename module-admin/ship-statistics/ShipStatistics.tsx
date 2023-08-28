import { HeaderAdmin, Input, SearchIcon, TabItemProps, Table, Tabs } from '@/components'
import styles from './ShipStatistics.module.scss'
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

export const ShipStatistics = () => {
  const [pageSize, setPageSize] = useState(5)
  const [total] = useState(10)
  return (
    <div className={styles['reviews-wrapper']}>
      <HeaderAdmin label="Thống kê" />
      <div className={styles.container}>
        <div className="flex flex-col gap-20">
          <div className="flex gap-16 align-center">
            <div className="flex flex-col gap-4 flex-grow">
              <div className="subheading md">Tất cả các khách hàng đặt tour</div>
              <p className="sm">99 khách hàng đặt tour tại Mixivivu</p>
            </div>
            <Input
              iconSwap={<SearchIcon />}
              placeHolder="Tìm kiếm"
              customClass={styles['search-input']}
            />
          </div>
          <Tabs tabs={tabs} size="sm" activeKey={1} />
        </div>
        <Table
          loading={false}
          headers={[
            { key: 'name', label: 'Tên' },
            { key: 'username', label: 'Dịch vụ' },
            { key: 'email', label: 'Room' },
            { key: 'phone', label: 'Ngày nhận phòng' },
            { key: 'created', label: 'Số điện thoại' },
            { key: 'modified', label: 'Phòng' },
          ]}
          customStyleCell={{
            email: styles.emailStyle,
          }}
          paginationProps={{
            totalCount: total || 0,
            pageSize,
            setPageSize,
          }}
          data={[]}
        />
      </div>
    </div>
  )
}
