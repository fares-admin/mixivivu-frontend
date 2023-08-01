export interface UserRes {
  active: boolean
  created: string
  email: string
  modified: string
  name: string
  phone: string
  twoFactor: boolean
  username: string
  verify: boolean
  _id: string
}

export interface UserReq {
  name: string
  username: string
  email: string
  phone: string
}

export type UserReqError = Record<keyof UserReq, string>
