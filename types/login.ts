export interface LoginReq {
  username: string
  password: string
}

export interface LoginReqErr {
  username: string
  password: string
}
export interface LoginRes {
  token: string
}
