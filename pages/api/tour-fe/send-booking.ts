import { sendBooking } from '@/services/tour-api/booking'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await sendBooking(req)
  res.status(200).send(result)
}
