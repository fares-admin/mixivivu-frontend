import React, { InputHTMLAttributes, forwardRef, useId } from 'react'
import styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hintText?: string
  iconSwap?: React.ReactNode
  supportIcon?: React.ReactNode
  destructive?: boolean
  placeHolder?: string
  disable?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, hintText, iconSwap, destructive, supportIcon, placeHolder, disable, ...props },
    ref
  ) => {
    const id = useId()

    return (
      <div className={destructive ? styles.destructive : ''}>
        <label htmlFor={id} className={styles['input-group']}>
          {iconSwap && iconSwap}
          <input
            id={id}
            ref={ref}
            className="p-md"
            placeholder={placeHolder}
            disabled={disable}
            {...props}
          />
          {supportIcon && supportIcon}
          <label htmlFor={id} className="sm">
            {label}
          </label>
        </label>
        {hintText && <p className={['sm', styles['hint-text']].join(' ')}>{hintText}</p>}
      </div>
    )
  }
)
