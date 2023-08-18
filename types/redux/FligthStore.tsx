import { FaresResponse, SearchFlightResponse } from '@/flight-api/flight-types'

export interface IFlightStore {
  data: SearchFlightResponse | null
  selected: FaresResponse[]
}
