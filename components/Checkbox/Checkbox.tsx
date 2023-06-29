import { InputHTMLAttributes, forwardRef, useId } from 'react'
import styles from './Checkbox.module.css'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  sizeInput: 'sm' | 'md'
  type: 'checkbox' | 'radio'
  text?: string
  supportText?: string
  disabled?: boolean
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, type, sizeInput, text, supportText, disabled, ...props }, ref) => {
    const id = useId()

    return (
      <label htmlFor={id} className={styles.container}>
        <input ref={ref} disabled={disabled} id={id} type={type} {...props} />
        <span className={[styles.checkmark, styles[sizeInput]].join(' ')} />
        <div>
          <label className={sizeInput}>{text}</label>
          <p className={sizeInput}>{supportText}</p>
        </div>
      </label>
    )
  }
)
