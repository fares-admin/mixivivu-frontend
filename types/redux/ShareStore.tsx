import { UserRes } from '../user'

export interface ShareStoreTypes {
  loading: number
  breakPoint: number
  language: {
    [key: string]: string
  }
  userInfo: UserRes
}
