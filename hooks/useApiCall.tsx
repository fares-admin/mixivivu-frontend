import { useEffect, useState } from 'react'

import { COOKIE_TOKEN_KEY } from '@/constants/commonValue'
import { setLoadingGlobal } from '@/redux/share-store'
import { CommonResponseType } from '@/types'
import { AxiosResponse } from 'axios'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'

export const useApiCall = <T, E>({
  callApi,
  handleError,
  handleSuccess,
  preventLoadingGlobal,
}: {
  callApi: () => Promise<AxiosResponse<any, any>>
  handleError?: (status: number, message: string) => void
  handleSuccess?: (message: string, data: T) => void
  preventLoadingGlobal?: boolean
}) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<CommonResponseType<T>>()
  const [error, setError] = useState<CommonResponseType<E>>()
  const [letCall, setLetCall] = useState<boolean>(false)

  const router = useRouter()

  const [, , removeCookie] = useCookies([COOKIE_TOKEN_KEY])

  const dispatch = useDispatch()

  const getData = async () => {
    try {
      const response = await callApi()
      const { success } = response.data
      if (success) {
        setData(response.data)
        setError(undefined)
        if (handleSuccess) {
          handleSuccess(response.data.message, response.data.result)
        }
      } else {
        const { status } = response.data
        if (status === 400) {
          setData(undefined)
          setError(response.data)
        }
        if (handleError) {
          handleError(status, response.data.message)
        }
        if (status === 401) {
          removeCookie(COOKIE_TOKEN_KEY)
        }
        if (status === 403) {
          router.push('/403')
        }
      }
    } finally {
      setLoading(false)
      setLetCall(false)
      dispatch(setLoadingGlobal(false))
    }
  }

  useEffect(() => {
    if (letCall) {
      setLoading(true)
      getData()
      if (!preventLoadingGlobal) dispatch(setLoadingGlobal(true))
    }
  }, [letCall])

  const handleReset = () => {
    setLoading(false)
    setData(undefined)
    setError(undefined)
    setLetCall(false)
  }

  return {
    handleReset,
    setLetCall,
    loading,
    data,
    error,
  }
}
