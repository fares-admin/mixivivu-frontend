import Image from 'next/image'
import { ReactNode } from 'react'
import styles from './SectionHeader.module.css'

interface SectionHeaderProps {
  title: ReactNode
  description: string
  center?: boolean
}

export const SectionHeader = ({ title, description, center = false }: SectionHeaderProps) => {
  return (
    <div className={[styles.sectionHeader, center ? styles.center : ''].join(' ')}>
      <div className={styles.title}>
        <h4>{title}</h4>
        {!center && (
          <div className={styles.headingBorder}>
            <Image src="/heading-border.png" width={80} height={8} />
          </div>
        )}
      </div>
      <label className="lg">{description}</label>
      {center && (
        <div className={styles.headingBorder}>
          <Image src="/heading-border.png" width={80} height={8} />
        </div>
      )}
    </div>
  )
}
