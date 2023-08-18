import { AuthReq, FLIGHT_API_URL } from './constants'

import { CommonResponseType } from '@/types'
import axios from 'axios'
import { NextApiRequest } from 'next'
import { flightEndpoints } from './endpoints'
import { SearchFlightResponse } from './flight-types'

export const searchFlight = async (
  req: NextApiRequest
): Promise<CommonResponseType<SearchFlightResponse[] | string>> => {
  if (req.headers.host?.includes(String(process.env.ACCESS_API_HOST))) {
    try {
      const getFlights = await axios.post(`${FLIGHT_API_URL}${flightEndpoints.searchFlight}`, {
        ...req.body,
        ...AuthReq(),
      })
      const result: CommonResponseType<SearchFlightResponse[]> = {
        status: 200,
        success: true,
        result: getFlights.data,
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
