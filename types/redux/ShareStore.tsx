import { ThemeKey } from '@/lib'

export interface ShareStoreTypes {
  loading: number
  breakPoint: number
  language: {
    [key: string]: string
  }
  darkTheme: ThemeKey
}
