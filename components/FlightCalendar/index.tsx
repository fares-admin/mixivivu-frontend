import { getDateFromFlightReq, getFormatDate, getThisDay } from '@/constants/commonValue'

import { SearchFlightReq } from '@/services/flight-api/flight-types'
import { useRouter } from 'next/router'
import styles from './FlightCalendar.module.css'

interface FlightCalendarItemProps {
  active: boolean
  date: Date
  handleSelectDay: () => void
}

export const FlightCalendarItem = ({ active, date, handleSelectDay }: FlightCalendarItemProps) => {
  const dateString = getFormatDate(date).split('/')

  return (
    <div
      className={[
        styles['flight-calendar-item'],
        active ? styles['flight-calendar-item__active'] : '',
      ].join(' ')}
      style={{ cursor: 'pointer' }}
      onClick={handleSelectDay}
    >
      <div className={['detail sm', styles.day].join(' ')}>{getThisDay(date)}</div>
      <div className={['subheading md', styles.date].join(' ')}>{dateString[0]}</div>
      {/* <p className={['sm', styles['min-price']].join(' ')}>860,000</p> */}
    </div>
  )
}

export const FlightCalendar = ({ isDeparting }: { isDeparting?: boolean }) => {
  const router = useRouter()

  const reqString = router?.query.req

  const req = reqString ? (JSON.parse(reqString as string) as SearchFlightReq) : undefined

  const dateList = (): Date[] => {
    if (req) {
      const date = isDeparting ? req?.ListFlight[1].DepartDate : req?.ListFlight[0].DepartDate
      const dateConvert: string = getDateFromFlightReq(date)
      return [
        new Date(new Date(dateConvert).getTime() - 48 * 3600 * 1000),
        new Date(new Date(dateConvert).getTime() - 24 * 3600 * 1000),
        new Date(new Date(dateConvert).getTime()),
        new Date(new Date(dateConvert).getTime() + 24 * 3600 * 1000),
        new Date(new Date(dateConvert).getTime() + 48 * 3600 * 1000),
      ]
    }
    return []
  }

  const handleSelectDay = (date: Date) => {
    if (req) {
      const thisReq: SearchFlightReq = {
        ...req,
        ListFlight: req?.ListFlight.map((item, index) => {
          if (!isDeparting && index === 0) {
            return { ...item, DepartDate: getFormatDate(date).replaceAll('/', '') }
          }
          if (isDeparting && index === 1) {
            return { ...item, DepartDate: getFormatDate(date).replaceAll('/', '') }
          }
          return item
        }),
      }
      router.push({
        pathname: router.pathname,
        query: {
          req: JSON.stringify(thisReq),
        },
      })
    }
  }

  return (
    <div className={styles['flight-calendar']}>
      {dateList().map((item, index) => (
        <FlightCalendarItem
          key={index}
          active={index === 2}
          date={item}
          handleSelectDay={() => handleSelectDay(item)}
        />
      ))}
    </div>
  )
}
