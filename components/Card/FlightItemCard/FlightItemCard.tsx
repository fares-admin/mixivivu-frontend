import { Button, ChevronDownIcon, Collapse, ImageFill } from '@/components'
import { getAirlineByCode, getAirportByCode, getHourAndMin } from '@/constants/commonValue'

import { FlightStoreSelector } from '@/redux/flight-store'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './FlightItemCard.module.css'

interface FlightItemCardProps {
  isSelected?: boolean
  handleSelect: () => void
  FareDataId: number
}

export const FlightItemCard = ({
  isSelected = false,
  handleSelect,
  FareDataId,
}: FlightItemCardProps) => {
  const [isCollapse, setIsCollapse] = useState(true)

  const handleCollapse = () => {
    setIsCollapse(!isCollapse)
  }

  const { data } = useSelector(FlightStoreSelector)

  const detail = data?.ListFareData.find((item) => item.FareDataId === FareDataId)

  if (!detail) return null

  const airline = getAirlineByCode(detail.Airline)

  const startPoint = getAirportByCode(detail.ListFlight[0].StartPoint)

  const endPoint = getAirportByCode(detail.ListFlight[0].EndPoint)

  return (
    <Collapse
      isCollapse={isCollapse}
      header={
        <div
          className={[
            styles.header,
            'flex gap-16 align-center',
            isSelected && isCollapse ? styles['selected-flight'] : ' ',
          ].join(' ')}
          onClick={handleCollapse}
        >
          <div className={styles['img-wrapper']}>
            <ImageFill src={airline.icon} />
          </div>
          <div className="flex flex-col gap-8 flex-grow">
            <label className="sm">{detail.ListFlight[0].FlightNumber}</label>
            <p className="sm">{airline.name}</p>
          </div>
          <div className={styles.destination}>
            <label className="sm">{getHourAndMin(detail.ListFlight[0].StartDate)}</label>
            <p className="sm">
              {startPoint.name} ({startPoint.code})
            </p>
          </div>
          <div className={styles.destination}>
            <label className="sm">{getHourAndMin(detail.ListFlight[0].EndDate)}</label>
            <p className="sm">
              {endPoint.name} ({endPoint.code})
            </p>
          </div>
          <div className={styles.price}>
            <label className="sm">
              {detail.TotalPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
            </label>
            <p className="sm">VND</p>
          </div>
          <Button
            onClick={handleSelect}
            label={isSelected ? 'Chọn lại' : 'Chọn'}
            size="sm"
            typeStyle="outline"
          />
          <div>
            <ChevronDownIcon strokeColor="var(--gray-600)" />
          </div>
        </div>
      }
      content={
        <div className={styles.content}>
          <div className="flex gap-19 flex-grow">
            <div className={styles['vertical-steps']}>
              <div className={styles['vertical-big-dot']} />
              {[1, 2, 3, 4, 5, 6, 7].map((_, idx) => (
                <div className={styles['vertical-small-dot']} key={idx} />
              ))}
              <div className={styles['vertical-big-dot']} />
            </div>
            <div className="flex flex-col gap-12">
              <div className="flex gap-8 align-center">
                <label className="sm">{getHourAndMin(detail.ListFlight[0].StartDate)}</label>
                <div className={styles.dot} />
                <label className="sm">
                  {startPoint.airport} ({startPoint.code})
                </label>
              </div>
              <p className="sm">Thời gian chuyến đi: {detail.ListFlight[0].Duration} phút</p>
              <div className="flex gap-8 align-center">
                <label className="sm">{getHourAndMin(detail.ListFlight[0].EndDate)}</label>
                <div className={styles.dot} />
                <label className="sm">
                  {endPoint.airport} ({endPoint.code})
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <p className="sm">Chuyến bay: {detail.ListFlight[0].FlightNumber}</p>
            <p className="sm">Hạng chỗ: {detail.ListFlight[0].GroupClass}</p>
            <p className="sm">Máy bay: {detail.ListFlight[0].ListSegment[0].Plane}</p>
            <p className="sm">
              Hành lý xách tay: {detail.ListFlight[0].ListSegment[0].HandBaggage}
            </p>
            <p className="sm">Hành lý ký gửi: Vui lòng chọn ở bước tiếp theo</p>
          </div>
        </div>
      }
    />
  )
}
