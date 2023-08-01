import { MixiDatePicker } from './DatePicker'
import React, { forwardRef } from 'react'
import { CalendarIcon, ChevronDownIcon, Input } from '@/components'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './DatePicker.module.css'

interface CustomInputProps {
  value?: string
  onClick?: () => void
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(({ value, onClick }, ref) => {
  return (
    <Input
      customClass={styles['date-input']}
      ref={ref}
      value={value}
      onClick={onClick}
      iconSwap={<CalendarIcon />}
      supportIcon={<ChevronDownIcon />}
      label="Ngày nhận phòng"
    />
  )
})

export const RoomDatePicker = () => {
  return <MixiDatePicker customInput={<CustomInput />} />
}
