import React, { forwardRef } from 'react'
import styles from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'normal'
  typeStyle?: 'color' | 'outline' | 'outline-dark' | 'link-color'
  destructive?: boolean
  iconLeading?: React.ReactNode
  iconTrailing?: React.ReactNode
  iconOnly?: React.ReactNode
  disable?: boolean
  label?: string
  customClass?: string
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = 'normal',
      typeStyle = 'color',
      destructive,
      iconLeading,
      iconTrailing,
      label,
      disable,
      customClass,
      iconOnly,
      ...props
    },
    ref
  ) => {
    const labelSize = size === 'normal' ? 'md' : 'sm'
    const mode = destructive ? `button-${typeStyle}-destructive` : `button-${typeStyle}`

    return (
      <button
        type="button"
        className={[
          customClass,
          styles[`button-${size}`],
          styles[mode],
          iconOnly ? styles.iconOnly : '',
        ].join(' ')}
        disabled={disable}
        {...props}
        ref={ref}
      >
        {iconLeading && iconLeading}
        <label className={labelSize}>{label}</label>
        {iconTrailing && iconTrailing}
        {iconOnly && iconOnly}
      </button>
    )
  }
)
