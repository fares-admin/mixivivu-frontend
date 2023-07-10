import styles from './Badge.module.css'

interface BadgeProps {
  size: 'sm' | 'md' | 'lg'
  iconLeading?: React.ReactNode
  iconTrailing?: React.ReactNode
  iconOnly?: React.ReactNode
  color: 'default' | 'primary' | 'error' | 'success' | 'infomation' | 'warning'
  label: string
  customClass?: string
}

export const Badge = ({
  color,
  iconLeading,
  iconTrailing,
  iconOnly,
  size,
  label,
  customClass,
}: BadgeProps) => {
  return (
    <div
      className={[
        styles[color],
        iconOnly ? styles.only : '',
        styles[size],
        styles.container,
        customClass,
      ].join(' ')}
    >
      {iconLeading && iconLeading}
      <label className={size === 'sm' ? 'xs' : 'sm'}>{label}</label>
      {iconTrailing && iconTrailing}
      {iconOnly && iconOnly}
    </div>
  )
}
