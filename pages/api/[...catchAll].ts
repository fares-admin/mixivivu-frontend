import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '30mb',
    },
  },
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}${req.url}`
  try {
    let result = {}
    // handle method
    switch (req.method) {
      case 'GET': {
        result = (
          await axios.get(url, {
            ...req,
            headers: {
              authorization: req.headers.authorization,
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
              authorization: req.headers.authorization,
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
              authorization: req.headers.authorization,
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
              authorization: req.headers.authorization,
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
