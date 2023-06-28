import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  size?: 'small' | 'normal'
  type?: 'color' | 'outline' | 'outline-dark' | 'link-color'
  destructive?: boolean
  iconLeading?: string
  iconTrailing?: string
  disable?: boolean
  label: string
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size = 'normal',
  type = 'color',
  destructive,
  iconLeading,
  iconTrailing,
  label,
  disable,
  ...props
}: ButtonProps) => {
  const labelSize = size === 'normal' ? 'regular' : 'small'
  const mode = destructive ? `button-${type}-destructive` : `button-${type}`

  return (
    <button
      type="button"
      className={[styles[`button-${size}`], styles[mode]].join(' ')}
      disabled={disable}
      {...props}
    >
      <label style={{ cursor: 'pointer' }} className={labelSize}>
        {label}
      </label>
      {/* <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style> */}
    </button>
  )
}
