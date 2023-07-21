import React, { ReactNode } from 'react'
import { Footer, Header } from '@/components'
import styles from './Layout.module.css'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  )
}
