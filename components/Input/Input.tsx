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
  customClass?: string
  required?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      hintText,
      iconSwap,
      destructive,
      supportIcon,
      placeHolder,
      customClass,
      disable,
      required,
      ...props
    },
    ref
  ) => {
    const id = useId()
    const isError = destructive
    return (
      <div className={[customClass, isError ? styles.destructive : ''].join(' ')}>
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
          <label htmlFor={id} className={['sm', required ? styles.required : ''].join(' ')}>
            {label}
          </label>
        </label>
        {hintText && <p className={['sm', styles['hint-text']].join(' ')}>{hintText}</p>}
      </div>
    )
  }
)
