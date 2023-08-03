import {
  ArrowRightIcon,
  Collapse,
  MinusIcon,
  PlaneArrivalIcon,
  PlaneFlyIcon,
  PlusIcon,
} from '@/components'
import { ReactNode, useState } from 'react'
import styles from './FlightsCard.module.css'

interface FlightsCardProps {
  isDeparting?: boolean
  from: string
  to: string
  date: string
  isSelected?: boolean
  content: ReactNode
}

export const FlightsCard = ({
  isDeparting = true,
  from,
  to,
  date,
  isSelected = false,
  content,
}: FlightsCardProps) => {
  const [isCollapse, setIsCollapse] = useState(false)

  const handleCollapse = () => {
    if (!isSelected) setIsCollapse(!isCollapse)
  }

  return (
    <Collapse
      isCollapse={isCollapse}
      header={
        <div
          onClick={handleCollapse}
          className={[styles.header, 'flex gap-16 align-center'].join(' ')}
        >
          {isDeparting ? (
            <PlaneFlyIcon width="48" height="48" fillColor="var(--primary-base)" />
          ) : (
            <PlaneArrivalIcon width="48" height="48" fillColor="var(--primary-base)" />
          )}
          <div className={[styles.header__details, 'flex flex-col gap-8'].join(' ')}>
            <div className="flex gap-8 align-center">
              <label className="sm">{from}</label>
              <ArrowRightIcon width="20" height="20" strokeColor="var(--black)" />
              <label className="sm">{to}</label>
            </div>
            <p className="sm">{date}</p>
          </div>
          {isCollapse ? (
            <PlusIcon strokeColor="var(--primary-base)" />
          ) : (
            <MinusIcon strokeColor="var(--primary-base)" />
          )}
        </div>
      }
      content={<div className={styles.content}>{content}</div>}
    />
  )
}
