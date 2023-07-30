import { ArrowRightIcon, Button, Card, HeaderAdmin } from '@/components'
import React, { useState } from 'react'
import { UserReq, UserReqError } from '@/types'
import { getEndpoint, internalUserEndpoints } from '@/constants/endpoints'

import { Routes } from '@/constants/routes'
import { UserForm } from '../user-form/UserForm'
import axios from 'axios'
import styles from './AddInternalUser.module.css'
import { toast } from 'react-toastify'
import { useApiCall } from '@/hooks'
import { useRouter } from 'next/router'

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
        <UserForm changeUser={changeUser} error={addUser.error?.result} user={user} />
      </Card>
    </div>
  )
}
