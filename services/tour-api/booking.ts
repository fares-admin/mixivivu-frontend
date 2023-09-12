import { BOOKING_API_URL } from './constants'
import { CommonResponseType } from '@/types'
import axios from 'axios'
import { NextApiRequest } from 'next'
import { tourEndpoints } from './endpoints'

export const sendBooking = async (
  req: NextApiRequest
): Promise<CommonResponseType<any | string>> => {
  if (req.headers.host?.includes(String(process.env.ACCESS_API_HOST))) {
    try {
      const booking = await axios.post(`${BOOKING_API_URL}${tourEndpoints.booking}`, {
        api_key: process.env.BOOKING_API_KEY,
        ...req.body,
      })
      const result: CommonResponseType<any> = {
        status: 200,
        success: true,
        result: booking.data,
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
