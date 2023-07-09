import React, { ReactNode, useState } from 'react'
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
  const [selected, setSelected] = useState(0)
  return (
    <div className={styles.breadCrumbsContainer}>
      <BreadCrumbItem
        selected={selected === 0}
        icon={<HomeLineIcon />}
        onClick={() => setSelected(0)}
      />
      {breadcrumbs.map((item, index) => (
        <div key={index} className={styles.breadCrumbs}>
          <ChevronRightIcon />
          <BreadCrumbItem selected={selected === index + 1} onClick={() => setSelected(index + 1)}>
            {item}
          </BreadCrumbItem>
        </div>
      ))}
    </div>
  )
}
