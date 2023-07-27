import React, { forwardRef, useState } from 'react'
import DatePicker from 'react-datepicker'
import {
  Button,
  CalendarIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Input,
} from '@/components'
import 'react-datepicker/dist/react-datepicker.css'
import { WEEKDAYS } from '@/constants/dateTime'
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

interface ReactDatePickerCustomHeaderProps {
  monthDate: Date
  date: Date
  changeYear(year: number): void
  changeMonth(month: number): void
  customHeaderCount: number
  decreaseMonth(): void
  increaseMonth(): void
}

export const MixiDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())

  const renderCustomHeader = ({
    monthDate,
    decreaseMonth,
    increaseMonth,
  }: ReactDatePickerCustomHeaderProps) => {
    return (
      <div className={styles.header}>
        <Button
          onClick={decreaseMonth}
          iconOnly={<ChevronLeftIcon />}
          size="sm"
          typeStyle="link-color"
        />
        <div className="subheading sm">
          Tháng {monthDate.getMonth() + 1}, {monthDate.getFullYear()}
        </div>
        <Button
          onClick={increaseMonth}
          iconOnly={<ChevronRightIcon />}
          size="sm"
          typeStyle="link-color"
        />
      </div>
    )
  }

  const formatDay = (day: Day) => {
    if (day === 0) return 'CN'
    return `T${day + 1}`
  }

  return (
    <div className={styles['mixi-date-picker']}>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        calendarStartDay={1}
        selected={selectedDate}
        onChange={(date: Date) => setSelectedDate(date)}
        renderCustomHeader={renderCustomHeader}
        formatWeekDay={(day) => formatDay(WEEKDAYS.indexOf(day) as Day)}
        customInput={<CustomInput />}
        dayClassName={(date: Date) =>
          date.getTime() === selectedDate?.getTime()
            ? [styles.selectedDate, styles.calendarCell].join(' ')
            : styles.calendarCell
        }
      />
    </div>
  )
}
