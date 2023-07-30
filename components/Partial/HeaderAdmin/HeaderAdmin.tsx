import { BreadCrumbs } from '@/components/BreadCrumbs'
import { ReactNode } from 'react'
import styles from './HeaderAdmin.module.css'

interface IHeaderAdmin {
  label: string
  trailButton: ReactNode
  breadCrumbs?: ReactNode[]
}

export const HeaderAdmin = ({ label, trailButton, breadCrumbs }: IHeaderAdmin) => {
  return (
    <div className={styles.head}>
      {breadCrumbs && breadCrumbs?.length > 0 && <BreadCrumbs breadcrumbs={breadCrumbs} />}
      <div className={styles.headContent}>
        <h4>{label}</h4>
        {trailButton}
      </div>
    </div>
  )
}
