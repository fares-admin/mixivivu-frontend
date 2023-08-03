import { InputHTMLAttributes, forwardRef, useEffect, useId, useState } from 'react'
import styles from './Checkbox.module.css'
import { CheckIcon } from '../SVGIcon'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  sizeInput: 'sm' | 'md'
  type: 'checkbox' | 'radio'
  text?: string
  supportText?: string
  disabled?: boolean
  checked?: boolean
  checkboxOnly?: boolean
  onChange?: (e: any) => void
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked,
      type,
      sizeInput,
      text,
      supportText,
      disabled,
      checkboxOnly = false,
      onChange = () => {},
      ...props
    },
    ref
  ) => {
    const id = useId()
    const [isChecked, setIsChecked] = useState<boolean>(false)

    useEffect(() => {
      if (typeof checked !== 'undefined') setIsChecked(checked)
    }, [checked])

    const handleChange = (e: any) => {
      setIsChecked(!isChecked)
      onChange(e)
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
        <span className={[styles.checkmark, styles[sizeInput]].join(' ')}>
          {type === 'checkbox' && <CheckIcon />}
        </span>
        {!checkboxOnly && (
          <div className={styles.textGroup}>
            <label className={[sizeInput, styles.title].join(' ')}>{text}</label>
            <p className={sizeInput}>{supportText}</p>
          </div>
        )}
      </label>
    )
  }
)
