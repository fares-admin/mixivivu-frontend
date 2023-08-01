import { MixiDatePicker } from './DatePicker'
import React, { forwardRef } from 'react'
import { CalendarIcon, Input } from '@/components'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './DatePicker.module.css'

interface CustomInputProps {
  label: string
  value?: string
  onClick?: () => void
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, value, onClick }, ref) => {
    return (
      <Input
        customClass={styles['date-input']}
        ref={ref}
        value={value}
        onClick={onClick}
        iconSwap={<CalendarIcon />}
        label={label}
      />
    )
  }
)

export const FlightDatePicker = ({ label }: { label: string }) => {
  return <MixiDatePicker customInput={<CustomInput label={label} />} />
}
