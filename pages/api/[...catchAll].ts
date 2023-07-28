import { NextApiRequest, NextApiResponse } from 'next'

import { COOKIE_TOKEN_KEY } from '@/constants/commonValue'
import axios from 'axios'

export const config = {
  runtime: 'experimental-edge',
  api: {
    bodyParser: {
      sizeLimit: '30mb',
    },
  },
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const url = `${process.env.API_BASE_URL}${req.url}`
  try {
    let result = {}
    // handle method
    switch (req.method) {
      case 'GET': {
        result = (
          await axios.get(url, {
            ...req,
            headers: {
              authorization: req.cookies[COOKIE_TOKEN_KEY],
            },
          })
        ).data
        break
      }
      case 'POST': {
        result = (
          await axios.post(url, req.body, {
            ...req,
            headers: {
              authorization: req.cookies[COOKIE_TOKEN_KEY],
            },
          })
        ).data
        break
      }
      case 'PUT': {
        result = (
          await axios.put(url, req.body, {
            ...req,
            headers: {
              authorization: req.cookies[COOKIE_TOKEN_KEY],
            },
          })
        ).data
        break
      }
      case 'DELETE': {
        result = (
          await axios.delete(url, {
            ...req,
            headers: {
              authorization: req.cookies[COOKIE_TOKEN_KEY],
            },
          })
        ).data
        break
      }
      default: {
        res.status(500).json({ message: 'error' })
      }
    }
    res.status(200).json(result)
  } catch (error: any) {
    // handle error
    res.status(500).json({ message: error.message, url })
  }
}
