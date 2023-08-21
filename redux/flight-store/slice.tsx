import {
  FaresResponse,
  GetBaggageRes,
  Passenger,
  PassengerContact,
  SearchFlightResponse,
} from '@/flight-api/flight-types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IFlightStore } from '@/types/redux/FligthStore'

const initialState: IFlightStore = {
  data: null,
  selected: [],
  baggage: null,
  passengers: [],
  contact: {
    Gender: true,
    FirstName: '',
    LastName: '',
    Area: '+84',
    Phone: '',
    Email: '',
  },
}

const FlightSlices = createSlice({
  name: 'flight_store',
  initialState,
  reducers: {
    setData: (state, actions: PayloadAction<SearchFlightResponse>) => {
      state.data = actions.payload
    },
    setContact: (state, actions: PayloadAction<PassengerContact>) => {
      state.contact = actions.payload
    },
    setPassengers: (state, actions: PayloadAction<Passenger[]>) => {
      state.passengers = actions.payload
    },
    setSelectedFlight: (state, actions: PayloadAction<FaresResponse[]>) => {
      state.selected = actions.payload
    },
    setBaggage: (state, actions: PayloadAction<GetBaggageRes>) => {
      state.baggage = actions.payload
    },
    resetFlightStore: (state) => {
      return { ...initialState, data: state.data }
    },
  },
})

export const {
  resetFlightStore,
  setData,
  setSelectedFlight,
  setBaggage,
  setPassengers,
  setContact,
} = FlightSlices.actions

export default FlightSlices
