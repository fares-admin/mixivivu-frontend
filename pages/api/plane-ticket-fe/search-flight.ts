import { NextApiRequest, NextApiResponse } from 'next'

import { searchFlight } from '@/flight-api/search-flight'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await searchFlight(req)
  res.status(200).send(result)
}
