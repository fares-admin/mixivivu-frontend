import { BreadCrumbs } from '@/components/BreadCrumbs'
import { ReactNode } from 'react'
import styles from './HeaderAdmin.module.css'
import { Routes } from '@/constants/routes'

interface IHeaderAdmin {
  label: string
  trailButton?: ReactNode
  breadCrumbs?: {
    label: string
    link?: string
  }[]
}

export const HeaderAdmin = ({ label, trailButton, breadCrumbs }: IHeaderAdmin) => {
  return (
    <div className={styles.head}>
      {breadCrumbs && breadCrumbs?.length > 0 && (
        <BreadCrumbs home={Routes.admin.home} breadcrumbs={breadCrumbs} />
      )}
      <div className={styles.headContent}>
        <h4>{label}</h4>
        {trailButton}
      </div>
    </div>
  )
}
