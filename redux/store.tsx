import { ShareStoreTypes } from '@/types'
import { IFlightStore } from '@/types/redux/FligthStore'
import { configureStore } from '@reduxjs/toolkit'
import FlightSlices from './flight-store/slice'
import ShareStoreSlice from './share-store/slice'

const store = configureStore({
  reducer: {
    shareStore: ShareStoreSlice.reducer,
    flightStore: FlightSlices.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store

export type RootState = {
  shareStore: ShareStoreTypes
  flightStore: IFlightStore
}
