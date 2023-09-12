import { AuthReq, FLIGHT_API_URL } from './constants'
import { GetBaggageRes } from './flight-types'

import { CommonResponseType } from '@/types'
import axios from 'axios'
import { NextApiRequest } from 'next'
import { flightEndpoints } from './endpoints'

export const getBaggage = async (
  req: NextApiRequest
): Promise<CommonResponseType<GetBaggageRes | string>> => {
  if (req.headers.host?.includes(String(process.env.ACCESS_API_HOST))) {
    try {
      const getBaggages = await axios.post(`${FLIGHT_API_URL}${flightEndpoints.getBaggage}`, {
        ...req.body,
        ...AuthReq(),
      })
      const result: CommonResponseType<GetBaggageRes> = {
        status: 200,
        success: true,
        result: getBaggages.data,
        message: 'ok',
      }
      return result
    } catch (err: any) {
      return {
        status: 500,
        success: true,
        result: 'error',
        message: String(err.message),
      }
    }
  }
  return {
    status: 500,
    success: true,
    result: 'error',
    message: 'ok',
  }
}
