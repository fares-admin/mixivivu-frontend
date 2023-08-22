export interface ReviewRes {
  _id: string
  productId: string
  variantId: string[]
  email: string
  phone: number
  name: string
  comment: string
  score: number
  created: Date
}

export interface ReviewReq {
  productId: string
  variantId: string[]
  email: string
  name: string
  score: number
}

export type ReviewRequestError = Record<keyof ReviewReq, string>
