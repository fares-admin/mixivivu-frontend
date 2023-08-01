import { getEndpoint, internalUserEndpoints } from '@/constants/endpoints'
import { CommonListResultType, UserRes } from '@/types'
import { ReactNode, useEffect, useState } from 'react'

import { COOKIE_TOKEN_KEY } from '@/constants/commonValue'
import { useApiCall } from '@/hooks'
import { setUserInfo } from '@/redux/share-store'
import axios from 'axios'
import { decode } from 'jsonwebtoken'
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { LoginAdmin } from '../Partial/LoginAdmin/LoginAdmin'
import { SidebarAdmin } from '../Partial/SidebarAdmin/SidebarAdmin'
import styles from './LayoutAdmin.module.css'

export const LayoutAdmin = ({ children }: { children: ReactNode }) => {
  const [cookies] = useCookies([COOKIE_TOKEN_KEY])
  const [userId, setUserId] = useState('')

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(false)
  }, [])

  const dispatch = useDispatch()

  const getList = useApiCall<CommonListResultType<UserRes>, string>({
    callApi: () =>
      axios.get(getEndpoint(internalUserEndpoints, 'getList'), {
        params: {
          _id: userId,
        },
      }),
    handleError(status, message) {
      if (status !== 400) {
        toast.error(message)
      }
    },
    handleSuccess(message, data) {
      if (message) {
        dispatch(setUserInfo(data.data[0]))
      }
    },
  })

  useEffect(() => {
    if (userId.length > 0) {
      getList.setLetCall(true)
    }
  }, [userId])

  useEffect(() => {
    if (cookies.token) {
      const tokenInfo = decode(cookies.token.split(' ')[1]) as any
      if (tokenInfo.userId) {
        setUserId(tokenInfo.userId)
      }
    }
  }, [cookies])

  return (
    <div className={styles.container}>
      {cookies.token && !mounted ? (
        <>
          <SidebarAdmin />
          {children}
        </>
      ) : (
        <LoginAdmin />
      )}
    </div>
  )
}
