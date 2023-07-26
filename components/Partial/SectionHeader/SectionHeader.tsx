import Image from 'next/image'
import React, { ReactNode } from 'react'
import styles from './SectionHeader.module.css'

interface SectionHeaderProps {
  title: ReactNode | string
  description?: string
  center?: boolean
  column?: boolean
}

export const SectionHeader = ({
  title,
  description,
  center = false,
  column = false,
}: SectionHeaderProps) => {
  return (
    <div
      className={[
        styles.sectionHeader,
        center ? styles.center : '',
        column ? styles.column : '',
      ].join(' ')}
    >
      <div className={styles.title}>
        <h4>{title}</h4>
        {!center && !column && (
          <div className={styles.headingBorder}>
            <Image src="/heading-border.png" width={80} height={8} />
          </div>
        )}
      </div>
      {description && <label className={['lg', styles.description].join(' ')}>{description}</label>}
      {(center || column) && (
        <div className={styles.headingBorder}>
          <Image src="/heading-border.png" width={80} height={8} />
        </div>
      )}
    </div>
  )
}
