export interface RoomRes {
  _id: string
  title: string
  size: number
  maxPersons: number
  price: number
  salePrices: number
  features: string[]
  productId: string
}

export interface RoomReq {
  productId: string
  title: string
  size: number
  maxPersons: number
  price: number
  salePrices: number
  features: string[]
}

export type RoomReqError = Record<keyof RoomReq, string>
