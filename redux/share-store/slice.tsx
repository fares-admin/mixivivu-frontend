import { ShareStoreTypes, UserRes } from '@/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: ShareStoreTypes = {
  loading: 0,
  breakPoint: 1,
  language: {},
  userInfo: {
    active: true,
    created: '',
    email: '',
    modified: '',
    name: '',
    phone: '',
    twoFactor: true,
    username: '',
    verify: true,
    _id: '',
  },
}

const ShareStoreSlice = createSlice({
  name: 'share_store',
  initialState,
  reducers: {
    setLoading: (state, actions: PayloadAction<boolean>) => {
      if (actions.payload) {
        return { ...state, loading: state.loading + 1 }
      }
      if (state.loading > 0) {
        return { ...state, loading: state.loading - 1 }
      }
      return state
    },
    setUserInfo: (state, actions: PayloadAction<UserRes>) => {
      state.userInfo = actions.payload
    },
    setLanguage: (state, actions: PayloadAction<{ [key: string]: string }>) => {
      state.language = actions.payload
    },
    setBreakPoint: (state, actions: PayloadAction<number>) => {
      state.breakPoint = actions.payload
    },
    resetLoading: (state) => {
      return { ...state, loading: 0 }
    },
    resetShareStore: () => initialState,
  },
})

export const {
  resetShareStore,
  setLoading,
  setLanguage,
  setBreakPoint,
  resetLoading,
  setUserInfo,
} = ShareStoreSlice.actions

export default ShareStoreSlice
