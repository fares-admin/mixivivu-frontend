import React, { ReactNode } from 'react'
import { HomeLineIcon, ChevronRightIcon } from '@/components'
import styles from './BreadCrumbs.module.css'

interface BreadCrumbItemProps {
  icon?: ReactNode
  children?: ReactNode
  disabled?: boolean
  selected?: boolean
  onClick?: () => void
}

interface BreadCrumbsProps {
  breadcrumbs: ReactNode[]
}

export const BreadCrumbItem = ({
  icon,
  disabled,
  selected,
  onClick,
  children,
}: BreadCrumbItemProps) => {
  return (
    <div
      className={[
        styles.breadcrumb,
        disabled ? styles.disabled : '',
        selected ? styles.selected : '',
      ].join(' ')}
      onClick={onClick}
    >
      {icon && icon}
      {children && !icon && children}
    </div>
  )
}

export const BreadCrumbs = ({ breadcrumbs = [] }: BreadCrumbsProps) => {
  return (
    <div className={styles.breadCrumbsContainer}>
      <BreadCrumbItem icon={<HomeLineIcon />} />
      {breadcrumbs.map((item, index) => (
        <div key={index} className={styles.breadCrumbs}>
          <ChevronRightIcon />
          <BreadCrumbItem selected={index + 1 === breadcrumbs.length}>{item}</BreadCrumbItem>
        </div>
      ))}
    </div>
  )
}
