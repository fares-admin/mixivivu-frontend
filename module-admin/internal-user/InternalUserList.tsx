import { getEndpoint, internalUserEndpoints } from '@/constants/endpoints'
import { useApiCall } from '@/hooks'
import axios from 'axios'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const InternalUserList = () => {
  const getList = useApiCall({
    callApi: () => axios.get(getEndpoint(internalUserEndpoints, 'getList')),
    handleError(status, message) {
      if (status !== 400) {
        toast.error(message)
      }
    },
  })

  useEffect(() => {
    getList.setLetCall(true)
  }, [])

  return <>list</>
}

export default InternalUserList
