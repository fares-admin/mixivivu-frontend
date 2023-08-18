import { ReactNode, forwardRef } from 'react'
import styles from './Dropdown.module.css'

interface DropdownProps {
  children: ReactNode
  customClass?: string
}
export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ children, customClass }, ref) => {
    return (
      <div ref={ref} className={[styles.dropdown, customClass].join(' ')}>
        {children}
      </div>
    )
  }
)
