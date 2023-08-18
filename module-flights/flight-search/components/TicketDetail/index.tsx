import { getAirlineByCode, getFormatDate, getHourAndMin } from '@/constants/commonValue'

import { ImageFill } from '@/components'
import { FaresResponse } from '@/flight-api/flight-types'
import { FlightStoreSelector } from '@/redux/flight-store'
import { useSelector } from 'react-redux'
import styles from '../FlightSidebar/FlightSidebar.module.scss'

export const TicketDetail = () => {
  const { selected } = useSelector(FlightStoreSelector)

  const goTicket = selected[0]
  const backTicket: FaresResponse | undefined = selected[1]

  return (
    <div className={[styles['side-bar'], 'flex flex-col'].join(' ')}>
      <div className={styles['side-bar__header']}>
        <div className="subheading md flex-grow">Chi tiết giá vé</div>
      </div>
      <div className={styles['filter-item']}>
        <div className="flex flex-col gap-16">
          <div className="flex gap-12">
            <div className={styles['img-wrapper']}>
              <ImageFill src={getAirlineByCode(goTicket.Airline).icon} />
            </div>
            <div className="flex flex-col gap-4">
              <label className="sm">
                {goTicket.ListFlight[0].StartPoint} → {goTicket.ListFlight[0].EndPoint}
              </label>
              <p className="sm">
                {getHourAndMin(goTicket.ListFlight[0].StartDate)},{' '}
                {getFormatDate(new Date(goTicket.ListFlight[0].StartDate))}
              </p>
            </div>
          </div>
          {!!backTicket && (
            <div className="flex gap-12">
              <div className={styles['img-wrapper']}>
                <ImageFill src={getAirlineByCode(backTicket.Airline).icon} />
              </div>
              <div className="flex flex-col gap-4">
                <label className="sm">
                  {backTicket.ListFlight[0].StartPoint} → {backTicket.ListFlight[0].EndPoint}
                </label>
                <p className="sm">
                  {getHourAndMin(backTicket.ListFlight[0].StartDate)},{' '}
                  {getFormatDate(new Date(backTicket.ListFlight[0].StartDate))}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles['filter-item']}>
        <label className="md">Tóm tắt vé</label>
        <div className="flex gap-16">
          <div className="flex flex-col gap-4">
            <p className="sm">Người lớn</p>
            <label className="sm">
              {goTicket.Adt} x{' '}
              {(
                goTicket.FareAdt +
                goTicket.TaxAdt +
                (backTicket?.FareAdt || 0) +
                (backTicket?.TaxAdt || 0)
              ).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
            </label>
            {goTicket.Chd && (
              <>
                <p className="sm">Trẻ em</p>
                <label className="sm">
                  {goTicket.Chd} x{' '}
                  {(
                    goTicket.FareChd +
                    goTicket.TaxChd +
                    (backTicket?.FareChd || 0) +
                    (backTicket?.TaxChd || 0)
                  ).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                </label>
              </>
            )}
            {goTicket.Inf > 0 && (
              <>
                <p className="sm">Trẻ sơ sinh</p>
                <label className="sm">
                  {goTicket.Inf} x{' '}
                  {(
                    goTicket.FareInf +
                    goTicket.TaxInf +
                    (backTicket?.FareInf || 0) +
                    (backTicket?.TaxInf || 0)
                  ).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                </label>
              </>
            )}
          </div>
        </div>
      </div>
      <div className={styles['side-bar__footer']}>
        <div className="flex justify-between gap-12 w-full">
          <label className="md">Tổng</label>
          <div className="subheading sm">
            {(goTicket.TotalPrice + (backTicket?.TotalPrice || 0)).toLocaleString('it-IT', {
              style: 'currency',
              currency: 'VND',
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
