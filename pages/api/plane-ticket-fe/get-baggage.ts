import { NextApiRequest, NextApiResponse } from 'next'

import { getBaggage } from '@/flight-api/get-baggage'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await getBaggage(req)
  res.status(200).send(result)
}
