import {
  FaresResponse,
  GetBaggageRes,
  Passenger,
  PassengerContact,
  SearchFlightResponse,
} from '@/flight-api/flight-types'

export interface IFlightStore {
  data: SearchFlightResponse | null
  selected: FaresResponse[]
  baggage: GetBaggageRes | null
  passengers: Passenger[]
  contact: PassengerContact
}
