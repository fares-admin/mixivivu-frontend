import { ReactNode } from 'react'
import styles from './Card.module.css'

interface CardProps {
  children: ReactNode
  customClass?: string
}

export const Card = ({ customClass, children }: CardProps) => {
  return <div className={[styles.card, customClass].join(' ')}>{children}</div>
}
