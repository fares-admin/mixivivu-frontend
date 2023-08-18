import { Button, Checkbox, SelectTime } from '@/components'

import { flightFilterList } from '@/constants/config'
import { SearchFlightReq } from '@/flight-api/flight-types'
import { useRouter } from 'next/router'
import styles from './FlightSidebar.module.scss'

export const FlightSidebar = () => {
  const router = useRouter()

  const reqString = router?.query.req

  const thisReq = reqString ? (JSON.parse(reqString as string) as SearchFlightReq) : undefined

  const handleSelectAirline = (code: string) => {
    if (thisReq) {
      const newReq: SearchFlightReq = {
        ...thisReq,
        ListFlight: thisReq.ListFlight.map((item) => {
          return { ...item, Airline: code }
        }),
      }
      router.push({
        pathname: router.pathname,
        query: {
          req: JSON.stringify(newReq),
        },
      })
    }
  }

  return (
    <div className={[styles['side-bar'], 'flex flex-col'].join(' ')}>
      <div className={styles['side-bar__header']}>
        <div className="subheading md flex-grow">Lọc kết quả</div>
        <Button size="sm" label="Đặt lại" typeStyle="link-color" />
      </div>
      <div className={styles['side-bar__content']}>
        {flightFilterList.map((filterItem, index) => (
          <div key={index} className={styles['filter-item']}>
            <label className="md">{filterItem.label}</label>
            {filterItem.items.map((item, index) => (
              <Checkbox
                key={index}
                type="checkbox"
                sizeInput="sm"
                text={item.label}
                checked={item.value === (thisReq?.ListFlight[0].Airline || '')}
                onChange={(e) => {
                  if (e.target.checked) handleSelectAirline(item.value)
                }}
              />
            ))}
          </div>
        ))}
        <div className={styles['filter-item']}>
          <label className="md">Chọn giờ</label>
          <SelectTime label="Giờ khởi hành" />
          <SelectTime label="Giờ hạ cánh" />
        </div>
      </div>
    </div>
  )
}
