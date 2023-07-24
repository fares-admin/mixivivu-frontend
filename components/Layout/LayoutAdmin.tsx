import { ReactNode } from 'react'
import SidebarAdmin from '../Partial/SidebarAdmin/SidebarAdmin'
import styles from './LayoutAdmin.module.css'

const LayoutAdmin = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.container}>
      <SidebarAdmin />
      {children}
    </div>
  )
}

export default LayoutAdmin
