import 'react-datepicker/dist/react-datepicker.css'

import { Button, ChevronLeftIcon, ChevronRightIcon } from '@/components'
import { ReactNode, useEffect, useState } from 'react'

import { getFormatDate } from '@/constants/commonValue'
import { WEEKDAYS } from '@/constants/dateTime'
import DatePicker from 'react-datepicker'
import styles from './DatePicker.module.css'
import moment from 'moment'

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
  onChangDate?: (value: string) => void
  minDate?: Date
}

export const MixiDatePicker = ({ customInput, onChangDate, minDate }: MixiDatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())

  useEffect(() => {
    if (selectedDate && onChangDate) {
      onChangDate(getFormatDate(selectedDate))
    }
  }, [selectedDate])

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
        minDate={minDate || moment().toDate()}
        dateFormat="dd/MM/yyyy"
        calendarStartDay={1}
        selected={selectedDate}
        onChange={(date: Date) => setSelectedDate(date)}
        renderCustomHeader={renderCustomHeader}
        formatWeekDay={(day) => formatDay(WEEKDAYS.indexOf(day) as Day)}
        customInput={customInput}
        dayClassName={(date: Date) =>
          moment(date).date() === moment(selectedDate).date()
            ? [styles.selectedDate, styles.calendarCell].join(' ')
            : styles.calendarCell
        }
      />
    </div>
  )
}
