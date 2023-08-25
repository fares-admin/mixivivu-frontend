import React, { useId } from 'react'
import styles from './Input.module.css'

interface TextAreaProps {
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
export const TextArea = ({
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
}: TextAreaProps) => {
  const id = useId()

  return (
    <div className={[customClass, destructive ? styles.destructive : ''].join(' ')}>
      <label htmlFor={id} className={styles['input-group']}>
        {iconSwap && iconSwap}
        <textarea
          id={id}
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
