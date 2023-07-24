import { COOKIE_TOKEN_KEY } from '@/constants/commonValue'
import { ReactNode } from 'react'
import { useCookies } from 'react-cookie'
import LoginAdmin from '../Partial/LoginAdmin/LoginAdmin'
import SidebarAdmin from '../Partial/SidebarAdmin/SidebarAdmin'
import styles from './LayoutAdmin.module.css'

const LayoutAdmin = ({ children }: { children: ReactNode }) => {
  const [cookies] = useCookies([COOKIE_TOKEN_KEY])

  return (
    <div className={styles.container}>
      {cookies.token ? (
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

export default LayoutAdmin
