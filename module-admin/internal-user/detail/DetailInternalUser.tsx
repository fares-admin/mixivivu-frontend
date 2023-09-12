import { ArrowRightIcon, Button, Card, HeaderAdmin } from '@/components'
import { getEndpoint, internalUserEndpoints } from '@/constants/endpoints'
import { CommonListResultType, UserReq, UserReqError, UserRes } from '@/types'
import { useEffect, useState } from 'react'

import { Routes } from '@/constants/routes'
import { useApiCall } from '@/hooks'
import axios from 'axios'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { UserForm } from '../user-form/UserForm'
import styles from './DetailInternalUser.module.css'

export const DetailInternalUser = () => {
  const [user, setUser] = useState<UserReq>({
    name: '',
    username: '',
    email: '',
    phone: '',
  })
  const [id, setId] = useState('')

  const router = useRouter()

  const deleteUser = useApiCall<string, string>({
    callApi: () =>
      axios.delete(getEndpoint(internalUserEndpoints, 'delete'), {
        params: {
          ids: id,
        },
      }),
    handleError(status, message) {
      if (status !== 400) {
        toast.error(message)
      }
    },
    handleSuccess(message) {
      toast.success(message)
      router.push(Routes.admin.internalUserList)
    },
  })

  const getDetail = useApiCall<CommonListResultType<UserRes>, string>({
    callApi: () =>
      axios.get(getEndpoint(internalUserEndpoints, 'getList'), {
        params: {
          username: String(router.query.username),
        },
      }),
    handleError(status, message) {
      if (status !== 400) {
        toast.error(message)
      }
    },
    handleSuccess(message, data) {
      if (message) {
        setUser({
          username: data.data[0].username,
          name: data.data[0].name,
          email: data.data[0].email,
          phone: data.data[0].phone,
        })
        setId(data.data[0]._id)
      }
    },
  })

  useEffect(() => {
    if (router && router.query.username) {
      getDetail.setLetCall(true)
    }
  }, [router])

  const changeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.id]: e.target.value })
  }

  const updateUser = useApiCall<string, UserReqError>({
    callApi: () =>
      axios.put(getEndpoint(internalUserEndpoints, 'update'), user, {
        params: {
          id,
        },
      }),
    handleSuccess(message) {
      toast.success(message)
    },
    handleError(status, message) {
      if (status !== 400) {
        toast.error(message)
      }
    },
  })

  const handleUpdate = () => {
    updateUser.setLetCall(true)
  }

  const handleDelete = () => {
    deleteUser.setLetCall(true)
  }

  if (router && !router.query.username) {
    return <>not found</>
  }

  return (
    <div className={styles.container}>
      <HeaderAdmin
        breadCrumbs={[{ label: 'Danh sách tài khoản' }, { label: 'Thông tin tài khoản' }]}
        label="Thông tin tài khoản"
        trailButton={
          <div className={styles.actionStyle}>
            <Button
              iconTrailing={<ArrowRightIcon />}
              label="Xóa tài khoản"
              destructive
              size="sm"
              onClick={handleDelete}
            />
            <Button
              iconTrailing={<ArrowRightIcon />}
              label="Cập nhật tài khoản"
              size="sm"
              onClick={handleUpdate}
            />
          </div>
        }
      />
      <Card customClass={styles.card}>
        <h6 className={styles.cardHeader}>Thông tin tài khoản</h6>
        <UserForm user={user} changeUser={changeUser} error={updateUser.error?.result} />
      </Card>
    </div>
  )
}
