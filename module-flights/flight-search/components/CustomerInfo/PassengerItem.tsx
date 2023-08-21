import { Button, ChevronDownIcon, ImageFill, Input, UserIcon } from '@/components'
import { getAirlineByCode, getFormatDate, getHourAndMin } from '@/constants/commonValue'
import { BaggagePassenger, BaggageResItem, FaresResponse } from '@/flight-api/flight-types'
import { FlightStoreSelector, setPassengers } from '@/redux/flight-store'
import { useDispatch, useSelector } from 'react-redux'

import { useOutsideClick } from '@/hooks/useClickOutside'
import { useState } from 'react'
import styles from './CustomerInfo.module.scss'
import { GenderDropDown } from './GenderDropdown'

export const PassengerItem = ({
  ticket,
  index,
  isGo,
}: {
  ticket: FaresResponse
  index: number
  isGo: boolean
}) => {
  const { baggage, passengers } = useSelector(FlightStoreSelector)

  const [showGo, setShowGo] = useState(false)

  const showGoRef = useOutsideClick(() => {
    setShowGo(false)
  })

  const dispatch = useDispatch()

  const setPassengersFunc = (baggage: BaggageResItem) => {
    const findPassenger = passengers.find((item) => item.Index === index)
    const thisBaggage: BaggagePassenger = { ...baggage }
    if (isGo) {
      if (findPassenger) {
        const modifiedBaggage = passengers.map((item) => {
          if (item.Index === findPassenger.Index) {
            return {
              ...item,
              ListBaggage: [thisBaggage, ...item.ListBaggage.filter((_item, index) => index > 0)],
            }
          }
          return {
            ...item,
          }
        })
        dispatch(setPassengers(modifiedBaggage))
      }
    } else if (findPassenger) {
      const modifiedBaggage = passengers.map((item) => {
        if (item.Index === findPassenger.Index) {
          return {
            ...item,
            ListBaggage: [item.ListBaggage[0], thisBaggage],
          }
        }
        return {
          ...item,
        }
      })
      dispatch(setPassengers(modifiedBaggage))
    }
    setShowGo(false)
  }

  const onChangPassenger = (index: number, field: string, value: any) => {
    const findPassenger = passengers.find((item) => item.Index === index)
    if (findPassenger) {
      const modifiedBaggage = passengers.map((item) => {
        if (item.Index === findPassenger.Index) {
          return {
            ...item,
            [field]: value,
          }
        }
        return {
          ...item,
        }
      })
      dispatch(setPassengers(modifiedBaggage))
    }
  }

  const handleSetGender = (index: number, value: boolean) => {
    onChangPassenger(index, 'Gender', value)
  }
  return (
    <>
      <div className="flex gap-16 align-center">
        <UserIcon />
        <div className="flex flex-col gap-4">
          <label className="sm">Người lớn</label>
          <p className="md">Hành khách {index + 1}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-16">
        <div className={styles.selectInput}>
          <GenderDropDown
            thisValue={passengers.find((thisPass) => thisPass.Index === index)?.Gender}
            onChangeValue={(v) => handleSetGender(index, v)}
          />
        </div>
        <Input
          value={passengers.find((_item) => _item.Index === index)?.LastName || ''}
          onChange={(e) => onChangPassenger(index, 'LastName', e.target.value)}
          label="Họ"
          placeHolder="Nhập họ"
        />
        <Input
          value={passengers.find((_item) => _item.Index === index)?.FirstName || ''}
          onChange={(e) => onChangPassenger(index, 'FirstName', e.target.value)}
          label="Đệm và tên"
          placeHolder="Nhập đệm & tên"
        />
      </div>
      <div className={styles['customer-info__footer']}>
        <div className="grid grid-cols-2 gap-24">
          <div className="flex gap-24">
            <div className={styles['img-wrapper']}>
              <ImageFill src={getAirlineByCode(ticket.Airline).icon} />
            </div>
            <div className="flex flex-col gap-4">
              <label className="sm">
                {ticket.ListFlight[0].StartPoint} → {ticket.ListFlight[0].EndPoint}
              </label>
              <p className="sm">
                {getHourAndMin(ticket.ListFlight[0].StartDate)},{' '}
                {getFormatDate(new Date(ticket.ListFlight[0].StartDate))}
              </p>
            </div>
          </div>
          <div>
            {!!ticket.ListFlight[0].ListSegment[0].AllowanceBaggage ? (
              <div className={styles.selectInput}>
                <Button
                  fullWidth
                  customClass={styles['dropdown-btn']}
                  label={
                    passengers.find((item) => item.Index === index)?.ListBaggage[isGo ? 0 : 1]
                      ?.Name || 'Chọn hành lý ký gửi'
                  }
                  size="sm"
                  typeStyle="outline"
                  iconTrailing={<ChevronDownIcon />}
                  onClick={() => setShowGo(true)}
                />
                {showGo && (
                  <div className={`${styles.dropdown}`} ref={showGoRef}>
                    {baggage?.ListBaggage.filter(
                      (item) =>
                        item[isGo ? 'StartPoint' : 'EndPoint'] === ticket.ListFlight[0].StartPoint
                    ).map((item) => (
                      <div className={styles.allowanceBaggage}>
                        <Button
                          label={item.Name}
                          onClick={() => setPassengersFunc(item)}
                          typeStyle="outline"
                          fullWidth
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              'Vé không bao gồm hành lý ký gửi'
            )}
          </div>
        </div>
      </div>
    </>
  )
}
