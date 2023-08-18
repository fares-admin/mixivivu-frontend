import { Button, Card, Checkbox, ChevronDownIcon, ImageFill, Input, UserIcon } from '@/components'
import { getAirlineByCode, getFormatDate, getHourAndMin } from '@/constants/commonValue'
import { flightEndpoints, getEndpoint } from '@/constants/endpoints'
import { FaresResponse, GetBaggageRequest, GetBaggageRes } from '@/flight-api/flight-types'
import { FlightStoreSelector, setBaggage } from '@/redux/flight-store'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useApiCall } from '@/hooks'
import { useOutsideClick } from '@/hooks/useClickOutside'
import axios from 'axios'
import { toast } from 'react-toastify'
import styles from './CustomerInfo.module.scss'

export const CustomerInfo = () => {
  const { selected, data } = useSelector(FlightStoreSelector)

  const [showGoGa, setShowGoGa] = useState(false)

  const showGoGaRef = useOutsideClick(() => {
    setShowGoGa(false)
  })

  const goTicket = selected[0]
  const backTicket: FaresResponse | undefined = selected[1]

  let req: GetBaggageRequest = {
    ListFareData: [
      {
        Session: String(data?.Session),
        FareDataId: goTicket?.FareDataId,
        ListFlight: [
          {
            FlightValue: goTicket?.ListFlight[0].FlightValue,
          },
        ],
      },
    ],
  }

  if (backTicket) {
    req = {
      ...req,
      ListFareData: [
        ...req.ListFareData,
        {
          Session: String(data?.Session),
          FareDataId: backTicket?.FareDataId,
          ListFlight: [
            {
              FlightValue: backTicket?.ListFlight[0].FlightValue,
            },
          ],
        },
      ],
    }
  }

  const dispatch = useDispatch()

  const baggageData = useApiCall<GetBaggageRes, string>({
    callApi: () => axios.post(getEndpoint(flightEndpoints, 'baggage'), req),
    handleSuccess(mess, data) {
      dispatch(setBaggage(data))
    },
    handleError(status, message) {
      toast.error(message)
    },
  })

  useEffect(() => {
    if (goTicket && data) {
      baggageData.setLetCall(true)
    }
  }, [goTicket])

  if (!goTicket) return null

  return (
    <Card customClass={styles['customer-info']}>
      <div className={styles['customer-info__header']}>
        <div className="subheading md">Thông tin Hành khách</div>
      </div>
      <div className={styles['customer-info__content']}>
        <div className="flex flex-col gap-24">
          {goTicket.Adt > 0 &&
            Array.from(Array(goTicket.Adt).keys()).map((item) => (
              <>
                <div className="flex gap-16 align-center">
                  <UserIcon />
                  <div className="flex flex-col gap-4">
                    <label className="sm">Người lớn</label>
                    <p className="md">Hành khách {item + 1}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-16">
                  <Input label="Giới tính" supportIcon={<ChevronDownIcon />} />
                  <Input label="Họ" placeHolder="Nhập họ" />
                  <Input label="Đệm và tên" placeHolder="Nhập đệm & tên" />
                </div>
              </>
            ))}
          {goTicket.Chd > 0 &&
            Array.from(Array(goTicket.Chd).keys()).map((item) => (
              <>
                <div className="flex gap-16 align-center">
                  <UserIcon />
                  <div className="flex flex-col gap-4">
                    <label className="sm">Trẻ em</label>
                    <p className="md">Hành khách {item + 1}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-16">
                  <Input label="Giới tính" supportIcon={<ChevronDownIcon />} />
                  <Input label="Họ" placeHolder="Nhập họ" />
                  <Input label="Đệm và tên" placeHolder="Nhập đệm & tên" />
                </div>
              </>
            ))}
          {goTicket.Inf > 0 &&
            Array.from(Array(goTicket.Inf).keys()).map((item) => (
              <>
                <div className="flex gap-16 align-center">
                  <UserIcon />
                  <div className="flex flex-col gap-4">
                    <label className="sm">Trẻ sơ sinh</label>
                    <p className="md">Hành khách {item + 1}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-16">
                  <Input label="Giới tính" supportIcon={<ChevronDownIcon />} />
                  <Input label="Họ" placeHolder="Nhập họ" />
                  <Input label="Đệm và tên" placeHolder="Nhập đệm & tên" />
                </div>
              </>
            ))}
        </div>
      </div>
      <div className={styles['customer-info__footer']}>
        <div className="grid grid-cols-2 gap-24">
          <div className="flex gap-24">
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
          {!!goTicket.ListFlight[0].ListSegment[0].AllowanceBaggage ? (
            <div className={styles.selectInput}>
              <Button
                fullWidth
                customClass={styles['dropdown-btn']}
                label="Chọn hành lý ký gửi"
                size="sm"
                typeStyle="outline"
                iconTrailing={<ChevronDownIcon />}
                onClick={() => setShowGoGa(true)}
              />
              {showGoGa && (
                <div className={`${styles.dropdown}`} ref={showGoGaRef}>
                  <Button>a</Button>
                </div>
              )}
            </div>
          ) : (
            'Vé không bao gồm hành lý ký gửi'
          )}
        </div>
        {backTicket && (
          <div className="grid grid-cols-2 gap-24">
            <div className="flex gap-24">
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
            <div className={styles.allowanceBaggage}>
              <Checkbox
                type="checkbox"
                disabled={!backTicket.ListFlight[0].ListSegment[0].AllowanceBaggage}
              />{' '}
              <p>
                {backTicket.ListFlight[0].ListSegment[0].AllowanceBaggage ||
                  'Vé không bao gồm hành lý ký gửi'}
              </p>
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}
