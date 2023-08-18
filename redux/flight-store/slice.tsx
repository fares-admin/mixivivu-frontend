import { FaresResponse, GetBaggageRes, SearchFlightResponse } from '@/flight-api/flight-types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IFlightStore } from '@/types/redux/FligthStore'

const initialState: IFlightStore = {
  data: null,
  selected: [],
  baggage: null,
}

const FlightSlices = createSlice({
  name: 'flight_store',
  initialState,
  reducers: {
    setData: (state, actions: PayloadAction<SearchFlightResponse>) => {
      state.data = actions.payload
    },
    setSelectedFlight: (state, actions: PayloadAction<FaresResponse[]>) => {
      state.selected = actions.payload
    },
    setBaggage: (state, actions: PayloadAction<GetBaggageRes>) => {
      state.baggage = actions.payload
    },
    resetShareStore: () => initialState,
  },
})

export const { resetShareStore, setData, setSelectedFlight, setBaggage } = FlightSlices.actions

export default FlightSlices
