import { TOKEN_AUTHENTICATION } from '@/constants/auth'
import { CommonResponseType } from '@/types'
import { AxiosResponse } from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

export const useApiCall = <T, E>({
  callApi,
  handleError,
  handleSuccess,
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

  const [, , removeCookie] = useCookies([TOKEN_AUTHENTICATION])

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
        const { statusCode } = response.data
        if (statusCode === 400) {
          setData(undefined)
          setError(response.data)
        }
        if (handleError) {
          handleError(statusCode, response.data.message)
        }
        if (statusCode === 401) {
          removeCookie(TOKEN_AUTHENTICATION)
        }
        if (statusCode === 403) {
          router.push('/403')
        }
      }
    } finally {
      setLoading(false)
      setLetCall(false)
    }
  }

  useEffect(() => {
    if (letCall) {
      setLoading(true)
      getData()
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
