import React, { ReactNode, useState } from 'react'
import DatePicker from 'react-datepicker'
import { Button, ChevronLeftIcon, ChevronRightIcon } from '@/components'
import 'react-datepicker/dist/react-datepicker.css'
import { WEEKDAYS } from '@/constants/dateTime'
import styles from './DatePicker.module.css'

interface ReactDatePickerCustomHeaderProps {
  monthDate: Date
  date: Date
  changeYear(year: number): void
  changeMonth(month: number): void
  customHeaderCount: number
  decreaseMonth(): void
  increaseMonth(): void
}

interface MixiDatePickerProps {
  customInput: ReactNode
}

export const MixiDatePicker = ({ customInput }: MixiDatePickerProps) => {
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
        customInput={customInput}
        dayClassName={(date: Date) =>
          date.getTime() === selectedDate?.getTime()
            ? [styles.selectedDate, styles.calendarCell].join(' ')
            : styles.calendarCell
        }
      />
    </div>
  )
}
