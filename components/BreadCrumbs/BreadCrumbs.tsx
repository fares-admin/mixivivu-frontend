import React, { ReactNode } from 'react'
import { HomeLineIcon, ChevronRightIcon } from '@/components'
import styles from './BreadCrumbs.module.css'
import Link from 'next/link'
import { Routes } from '@/constants/routes'

interface BreadCrumbItemProps {
  icon?: ReactNode
  children?: ReactNode
  disabled?: boolean
  selected?: boolean
  onClick?: () => void
}

interface BreadCrumbsProps {
  breadcrumbs: {
    label: string
    link?: string
  }[]
  home?: string
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

export const BreadCrumbs = ({ breadcrumbs = [], home }: BreadCrumbsProps) => {
  return (
    <div className={styles.breadCrumbsContainer}>
      <Link href={home || Routes.home}>
        <BreadCrumbItem icon={<HomeLineIcon />} />
      </Link>
      {breadcrumbs.map((item, index) => (
        <Link href={item?.link || ''}>
          <a>
            <div key={index} className={styles.breadCrumbs}>
              <ChevronRightIcon />
              <BreadCrumbItem selected={index + 1 === breadcrumbs.length}>
                {item?.label}
              </BreadCrumbItem>
            </div>
          </a>
        </Link>
      ))}
    </div>
  )
}
