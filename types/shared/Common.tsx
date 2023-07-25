export interface CommonResponseType<T> {
  success: boolean
  result: T
  message: string
  status: number
}

export interface CommonListResultType<T> {
  data: T[]
  page: number
  size: number
  total: number
}

export type QueryParams = {
  id?: string
  page?: string
  pageSize?: string
  allParams?: { [key: string]: string }
  keySort?: string
  sortField?: string
} & { [key: string]: string | number }
