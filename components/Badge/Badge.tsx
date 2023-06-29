import { ArrowRightIcon, ArrowUpIcon, XMarkIcon } from '../SVGIcon'
import styles from './Badge.module.css'

interface BadgeProps {
  size: 'sm' | 'md' | 'lg'
  icon: 'false' | 'leading' | 'trailing' | 'only'
  color: 'default' | 'primary' | 'error' | 'success' | 'infomation' | 'warning'
  label: string
}

export const Badge = ({ color, icon, size, label }: BadgeProps) => {
  return (
    <div className={[styles[color], styles[icon], styles[size], styles.container].join(' ')}>
      <ArrowUpIcon />
      <label className={size === 'sm' ? 'xs' : 'sm'}>{label}</label>
      <ArrowRightIcon />
      <XMarkIcon />
    </div>
  )
}
