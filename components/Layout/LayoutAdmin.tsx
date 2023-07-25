import { COOKIE_TOKEN_KEY } from '@/constants/commonValue'
import { ReactNode, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { LoginAdmin } from '../Partial/LoginAdmin/LoginAdmin'
import { SidebarAdmin } from '../Partial/SidebarAdmin/SidebarAdmin'
import styles from './LayoutAdmin.module.css'

export const LayoutAdmin = ({ children }: { children: ReactNode }) => {
  const [cookies] = useCookies([COOKIE_TOKEN_KEY])

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(false)
  }, [])

  return (
    <div className={styles.container}>
      {cookies.token && !mounted ? (
        <>
          <SidebarAdmin />
          {children}
        </>
      ) : (
        <LoginAdmin />
      )}
    </div>
  )
}
