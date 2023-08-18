import 'react-datepicker/dist/react-datepicker.css'

import { CalendarIcon, Input } from '@/components'

import { forwardRef } from 'react'
import { MixiDatePicker } from './DatePicker'
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

export const FlightDatePicker = ({
  label,
  onChangDate,
}: {
  label: string
  onChangDate?: (value: string) => void
}) => {
  return <MixiDatePicker onChangDate={onChangDate} customInput={<CustomInput label={label} />} />
}
