import { FlightItemCard, FlightsCard } from '@/components'
import styles from './FlightList.module.scss'
import { FlightCalendar } from '@/components/FlightCalendar'

export const FlightList = () => {
  return (
    <div className={[styles['flight-list'], 'flex-grow'].join(' ')}>
      <FlightsCard
        from="Cảng hàng không quốc tế Hồ Chí Minh (SGN)"
        to="Cảng hàng không quốc tế Hà Nội (HAN)"
        date="Thứ 3, 18/02/2023"
        content={
          <>
            <FlightCalendar />
            <div className={['flex flex-col gap-16', styles['flight-card-list']].join(' ')}>
              <FlightItemCard />
              <FlightItemCard />
              <FlightItemCard />
            </div>
          </>
        }
      />
    </div>
  )
}
