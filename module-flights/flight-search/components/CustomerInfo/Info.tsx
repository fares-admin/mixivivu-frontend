import { Card, Input, UserIcon } from '@/components'
import { flightEndpoints, getEndpoint } from '@/constants/endpoints'
import {
  FaresResponse,
  GetBaggageRequest,
  GetBaggageRes,
  Passenger,
} from '@/services/flight-api/flight-types'
import { FlightStoreSelector, setBaggage, setPassengers } from '@/redux/flight-store'
import { useDispatch, useSelector } from 'react-redux'

import { useApiCall } from '@/hooks'
import axios from 'axios'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import styles from './CustomerInfo.module.scss'
import { GenderDropDown } from './GenderDropdown'
import { PassengerItem } from './PassengerItem'

export const CustomerInfo = () => {
  const { selected, data, passengers } = useSelector(FlightStoreSelector)

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

  const initPassenger = () => {
    if (goTicket) {
      dispatch(
        setPassengers(
          Array.from(Array(goTicket.Adt + goTicket.Chd + goTicket.Inf).keys()).map((item) => {
            const pass: Passenger = {
              Index: item,
              ParentId: 0,
              FirstName: '',
              LastName: '',
              Type: 'Adt',
              Gender: true,
              ListBaggage: [],
            }
            return pass
          })
        )
      )
    }
  }

  const onChangPassenger = (index: number, field: string, value: any, type: 'Chd' | 'Inf') => {
    const findPassenger = passengers.find((item) => item.Index === index)
    if (findPassenger) {
      const modifiedBaggage = passengers.map((item) => {
        if (item.Index === findPassenger.Index) {
          return {
            ...item,
            [field]: value,
            Type: type,
          }
        }
        return {
          ...item,
        }
      })
      dispatch(setPassengers(modifiedBaggage))
    }
  }

  useEffect(() => {
    if (goTicket && data) {
      baggageData.setLetCall(true)
      initPassenger()
    }
  }, [goTicket])

  if (!goTicket) return null

  return (
    <Card customClass={styles['customer-info']}>
      <div className={styles['customer-info__header']}>
        <div className="subheading md">Thông tin hành khách</div>
      </div>
      <div className={styles['customer-info__content']}>
        <div className="flex flex-col gap-24">
          {goTicket.Adt > 0 &&
            Array.from(Array(goTicket.Adt).keys()).map((item) => (
              <PassengerItem ticket={goTicket} index={item} isGo />
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
                <div className={['grid grid-cols-3 gap-16', styles['input-group']].join(' ')}>
                  <GenderDropDown
                    thisValue={
                      passengers.find((thisPass) => thisPass.Index === item + goTicket.Adt)?.Gender
                    }
                    onChangeValue={(v) => onChangPassenger(item + goTicket.Adt, 'Gender', v, 'Chd')}
                  />
                  <Input
                    label="Họ"
                    placeHolder="Nhập họ"
                    onChange={(e) =>
                      onChangPassenger(item + goTicket.Adt, 'LastName', e.target.value, 'Chd')
                    }
                    value={
                      passengers.find((_item) => _item.Index === item + goTicket.Adt)?.LastName ||
                      ''
                    }
                  />
                  <Input
                    label="Đệm và tên"
                    placeHolder="Nhập đệm & tên"
                    onChange={(e) =>
                      onChangPassenger(item + goTicket.Adt, 'FirstName', e.target.value, 'Chd')
                    }
                    value={
                      passengers.find((_item) => _item.Index === item + goTicket.Adt)?.FirstName ||
                      ''
                    }
                  />
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
                <div className={['grid grid-cols-3 gap-16', styles['input-group']].join(' ')}>
                  <GenderDropDown
                    thisValue={
                      passengers.find(
                        (thisPass) => thisPass.Index === item + goTicket.Adt + goTicket.Inf
                      )?.Gender
                    }
                    onChangeValue={(v) =>
                      onChangPassenger(item + goTicket.Adt + goTicket.Inf, 'Gender', v, 'Inf')
                    }
                  />
                  <Input
                    label="Họ"
                    placeHolder="Nhập họ"
                    onChange={(e) =>
                      onChangPassenger(
                        item + goTicket.Adt + goTicket.Inf,
                        'LastName',
                        e.target.value,
                        'Inf'
                      )
                    }
                    value={
                      passengers.find((_item) => _item.Index === item + goTicket.Adt + goTicket.Inf)
                        ?.LastName || ''
                    }
                  />
                  <Input
                    label="Đệm và tên"
                    placeHolder="Nhập đệm & tên"
                    onChange={(e) =>
                      onChangPassenger(
                        item + goTicket.Adt + goTicket.Inf,
                        'FirstName',
                        e.target.value,
                        'Inf'
                      )
                    }
                    value={
                      passengers.find((_item) => _item.Index === item + goTicket.Adt + goTicket.Inf)
                        ?.FirstName || ''
                    }
                  />
                </div>
              </>
            ))}
        </div>
      </div>
    </Card>
  )
}
