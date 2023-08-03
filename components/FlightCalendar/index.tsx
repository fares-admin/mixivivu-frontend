import styles from './FlightCalendar.module.css'

interface FlightCalendarItemProps {
  active: boolean
}

export const FlightCalendarItem = ({ active }: FlightCalendarItemProps) => {
  return (
    <div
      className={[
        styles['flight-calendar-item'],
        active ? styles['flight-calendar-item__active'] : '',
      ].join(' ')}
    >
      <div className={['detail sm', styles.day].join(' ')}>Thứ 7</div>
      <div className={['subheading md', styles.date].join(' ')}>15</div>
      <p className={['sm', styles['min-price']].join(' ')}>860,000</p>
    </div>
  )
}

export const FlightCalendar = () => {
  return (
    <div className={styles['flight-calendar']}>
      {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
        <FlightCalendarItem key={index} active={item === 4} />
      ))}
    </div>
  )
}
