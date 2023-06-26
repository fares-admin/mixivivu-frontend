import { ShareStoreTypes } from '@/types'
import { configureStore } from '@reduxjs/toolkit'
import ShareStoreSlice from './share-store/slice'

const store = configureStore({
  reducer: {
    shareStore: ShareStoreSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store

export type RootState = {
  shareStore: ShareStoreTypes
}
