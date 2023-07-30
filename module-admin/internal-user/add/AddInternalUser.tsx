import { ArrowRightIcon, Button, Card, HeaderAdmin } from '@/components'
import { getEndpoint, internalUserEndpoints } from '@/constants/endpoints'
import { UserReq, UserReqError } from '@/types'
import React, { useState } from 'react'

import { Routes } from '@/constants/routes'
import { useApiCall } from '@/hooks'
import axios from 'axios'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { UserForm } from '../user-form/UserForm'
import styles from './AddInternalUser.module.css'

export const AddInternalUser = () => {
  const [user, setUser] = useState<UserReq>({
    name: '',
    username: '',
    email: '',
    phone: '',
  })

  const changeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.id]: e.target.value })
  }

  const router = useRouter()

  const addUser = useApiCall<string, UserReqError>({
    callApi: () => axios.post(getEndpoint(internalUserEndpoints, 'add'), user),
    handleSuccess(message) {
      toast.success(message)
      router.push(Routes.admin.internalUserList)
    },
    handleError(status, message) {
      if (status !== 400) {
        toast.error(message)
      }
    },
  })

  const handleAdd = () => {
    addUser.setLetCall(true)
  }

  return (
    <div className={styles.container}>
      <HeaderAdmin
        breadCrumbs={['Danh sách tài khoản', 'Tạo tài khoản']}
        label="Tạo tài khoản"
        trailButton={
          <Button
            iconTrailing={<ArrowRightIcon />}
            label="Tạo tài khoản"
            size="sm"
            onClick={handleAdd}
          />
        }
      />
      <Card customClass={styles.card}>
        <h6 className={styles.cardHeader}>Thông tin tài khoản</h6>
        <UserForm changeUser={changeUser} error={addUser.error?.result} />
      </Card>
    </div>
  )
}
