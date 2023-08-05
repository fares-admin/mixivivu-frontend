import { FlightItemCard, FlightsCard, FlightItemLoadingCard } from '@/components'
import styles from './FlightList.module.scss'
import { FlightCalendar } from '@/components/FlightCalendar'
import { useState } from 'react'

export const FlightList = () => {
  const [departureFlight, setDepartureFlight] = useState<number | null>(null)
  const [returnFlight, setReturnFlight] = useState<number | null>(null)

  return (
    <div className={[styles['flight-list'], 'flex-grow flex flex-col gap-16'].join(' ')}>
      <FlightsCard
        from="Cảng hàng không quốc tế Hồ Chí Minh (SGN)"
        to="Cảng hàng không quốc tế Hà Nội (HAN)"
        date="Thứ 3, 18/02/2023"
        content={
          <>
            {departureFlight ? (
              <div className={[styles['flight-card-list']].join(' ')}>
                <FlightItemCard isSelected handleSelect={() => setDepartureFlight(null)} />
              </div>
            ) : (
              <>
                <FlightCalendar />
                <div className={['flex flex-col gap-16', styles['flight-card-list']].join(' ')}>
                  <FlightItemLoadingCard />
                  {[1, 2, 3].map((item) => (
                    <FlightItemCard handleSelect={() => setDepartureFlight(item)} key={item} />
                  ))}
                </div>
              </>
            )}
          </>
        }
      />
      <FlightsCard
        isDeparting={false}
        from="Cảng hàng không quốc tế Hồ Chí Minh (SGN)"
        to="Cảng hàng không quốc tế Hà Nội (HAN)"
        date="Thứ 3, 18/02/2023"
        content={
          <>
            {returnFlight ? (
              <div className={[styles['flight-card-list']].join(' ')}>
                <FlightItemCard isSelected handleSelect={() => setReturnFlight(null)} />
              </div>
            ) : (
              <>
                <FlightCalendar />
                <div className={['flex flex-col gap-16', styles['flight-card-list']].join(' ')}>
                  <FlightItemLoadingCard />
                  {[1, 2, 3].map((item) => (
                    <FlightItemCard handleSelect={() => setReturnFlight(item)} key={item} />
                  ))}
                </div>
              </>
            )}
          </>
        }
      />
    </div>
  )
}
