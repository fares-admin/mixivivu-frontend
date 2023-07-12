import { InputHTMLAttributes, forwardRef, useEffect, useId, useState } from 'react'
import styles from './Checkbox.module.css'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  sizeInput: 'sm' | 'md'
  type: 'checkbox' | 'radio'
  text?: string
  supportText?: string
  disabled?: boolean
  checked?: boolean
  onChange?: () => {}
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { checked, type, sizeInput, text, supportText, disabled, onChange = () => {}, ...props },
    ref
  ) => {
    const id = useId()
    const [isChecked, setIsChecked] = useState<boolean>(false)

    useEffect(() => {
      if (typeof checked !== 'undefined') setIsChecked(checked)
    }, [checked])

    const handleChange = () => {
      setIsChecked(!isChecked)
      onChange()
    }
    return (
      <label htmlFor={id} className={styles.container}>
        <input
          ref={ref}
          disabled={disabled}
          checked={isChecked}
          onChange={handleChange}
          id={id}
          type={type}
          {...props}
        />
        <span className={[styles.checkmark, styles[sizeInput]].join(' ')} />
        <div>
          <label className={sizeInput}>{text}</label>
          <p className={sizeInput}>{supportText}</p>
        </div>
      </label>
    )
  }
)
