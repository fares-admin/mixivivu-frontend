import { CheckIcon } from '@/components'
import { CloseIcon } from '@/components/SVGIcon/CloseIcon'
import { Table } from '@/components/Table/Table'
import { getEndpoint, internalUserEndpoints } from '@/constants/endpoints'
import { useApiCall } from '@/hooks'
import { CommonListResultType, UserRes } from '@/types'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import styles from './InternalUserList.module.css'

export const InternalUserList = () => {
  const [size, setSize] = useState('0')

  const getList = useApiCall<CommonListResultType<UserRes>, string>({
    callApi: () => axios.get(getEndpoint(internalUserEndpoints, 'getList')),
    handleError(status, message) {
      if (status !== 400) {
        toast.error(message)
      }
    },
  })

  const parseDate = (value: string) => <>{new Date(value).toLocaleDateString('en-GB')}</>
  const parseBoolean = (value: boolean) =>
    value ? <CheckIcon width="17" height="17" /> : <CloseIcon width="17" height="17" />

  useEffect(() => {
    getList.setLetCall(true)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.headContent}>
          <h5>Thống kê</h5>
        </div>
      </div>
      <Table
        headers={[
          { key: 'name', label: 'Tên' },
          { key: 'username', label: 'Tên đăng nhập' },
          { key: 'email', label: 'Email' },
          { key: 'phone', label: 'Số điện thoại' },
          { key: 'created', label: 'Ngày Tạo' },
          { key: 'modified', label: 'Lần cuối chỉnh sửa' },
          {
            key: 'twoFactor',
            label: 'Xác thực hai bước',
          },
          {
            key: 'active',
            label: 'Kích hoạt',
          },
          { key: 'verify', label: 'Đã xác thực' },
        ]}
        data={getList.data?.result?.data || []}
        customStyleCell={{
          email: styles.emailStyle,
        }}
        customDataCell={{
          created: parseDate,
          modified: parseDate,
          twoFactor: parseBoolean,
          active: parseBoolean,
          verify: parseBoolean,
        }}
        paginationProps={{
          totalCount: getList.data?.result?.total || 0,
          pageSize: size,
          setPageSize: setSize,
        }}
      />
    </div>
  )
}
