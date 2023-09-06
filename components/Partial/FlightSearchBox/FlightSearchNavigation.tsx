import {
  Button,
  Card,
  ChevronDownIcon,
  FlightDatePicker,
  Input,
  PlaneArrivalIcon,
  PlaneFlyIcon,
  UserIcon,
} from '@/components'
import {
  airports,
  getAirportByCode,
  getDateFromFlightReq,
  getFormatDate,
} from '@/constants/commonValue'
import { useEffect, useState } from 'react'

import { SwitchHorizonIcon } from '@/components/SVGIcon/SwitchHorizonIcon'
import { SearchFlightReq } from '@/flight-api/flight-types'
import { useOutsideClick } from '@/hooks/useClickOutside'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import styles from './FlightSearchNavigation.module.css'
import { Routes } from '@/constants/routes'

export const FlightSearchNavigation = () => {
  const [isDeparting, setIsDeparting] = useState(false)
  const [showGo, setShowGo] = useState(false)
  const [showBack, setShowBack] = useState(false)
  const [request, setRequest] = useState<SearchFlightReq>({
    Adt: 1,
    Chd: 0,
    Inf: 0,
    ViewMode: '',
    ListFlight: [
      {
        StartPoint: 'HAN',
        EndPoint: 'SGN',
        DepartDate: getFormatDate(new Date()),
        Airline: '',
      },
    ],
  })
  const [showPeople, setShowPeople] = useState(false)

  const showPeopleRef = useOutsideClick(() => {
    setShowPeople(false)
  })

  const showGoRef = useOutsideClick(() => {
    setShowGo(false)
  })

  const showBackRef = useOutsideClick(() => {
    setShowBack(false)
  })

  const valueGo = getAirportByCode(request.ListFlight[0].StartPoint)
  const valueBack = getAirportByCode(request.ListFlight[0].EndPoint)

  const handleSelectAirport = (code: string, isGo: boolean) => {
    if (isGo) {
      setRequest({
        ...request,
        ListFlight: [
          { ...request.ListFlight[0], StartPoint: code },
          ...request.ListFlight.filter((value, index) => index > 0),
        ],
      })
    } else {
      setRequest({
        ...request,
        ListFlight: [
          { ...request.ListFlight[0], EndPoint: code },
          ...request.ListFlight.filter((value, index) => index > 0),
        ],
      })
    }
    setShowGo(false)
    setShowBack(false)
  }

  const handleChangeDepart = () => {
    setRequest({
      ...request,
      ListFlight: !isDeparting
        ? [
            request.ListFlight[0],
            {
              ...request.ListFlight[0],
              StartPoint: request.ListFlight[0].EndPoint,
              EndPoint: request.ListFlight[0].StartPoint,
            },
          ]
        : [request.ListFlight[0]],
    })
    setIsDeparting(!isDeparting)
  }

  const router = useRouter()

  const handleClick = () => {
    const startParseDate = request.ListFlight[0].DepartDate.split('/')
      .map((item, index, array) => {
        if (index === 0) return array[1]
        if (index === 1) return array[0]
        return item
      })
      .join('/')
    const nowDate = getFormatDate(new Date())
      .split('/')
      .map((item, index, array) => {
        if (index === 0) return array[1]
        if (index === 1) return array[0]
        return item
      })
      .join('/')
    if (new Date(startParseDate).getTime() < new Date(nowDate).getTime()) {
      toast.error('Hãy chọn ngày hôm nay hoặc sau ngày hôm nay')
    } else if (
      isDeparting &&
      request?.ListFlight[1]?.DepartDate &&
      new Date(startParseDate).getTime() >
        new Date(
          request?.ListFlight[1]?.DepartDate?.split('/')
            .map((item, index, array) => {
              if (index === 0) return array[1]
              if (index === 1) return array[0]
              return item
            })
            .join('/')
        ).getTime()
    ) {
      toast.error('Hãy chọn ngày sau ngày đi')
    } else {
      router.push({
        pathname:
          router.pathname === Routes.flight.filterFlight
            ? router.pathname
            : `${router.pathname}/ket-qua`,
        query: {
          req: JSON.stringify({
            ...request,
            ListFlight: request.ListFlight.map((item) => {
              return { ...item, DepartDate: item.DepartDate.replaceAll('/', '') }
            }),
          }),
        },
      })
    }
  }

  useEffect(() => {
    if (router) {
      const reqString = router?.query.req

      const thisReq = reqString ? (JSON.parse(reqString as string) as SearchFlightReq) : undefined

      if (!thisReq) {
        // handleClick()
      } else {
        if (thisReq?.ListFlight?.length > 1) {
          setIsDeparting(true)
        } else {
          setIsDeparting(false)
        }
        setRequest({
          ...thisReq,
          ListFlight: thisReq.ListFlight.map((item) => {
            return {
              ...item,
              DepartDate: getFormatDate(new Date(getDateFromFlightReq(item.DepartDate))),
            }
          }),
        })
      }
    }
  }, [router])

  const handleChangeDate = (date: string, isGo: boolean) => {
    if (isGo) {
      setRequest({
        ...request,
        ListFlight: request.ListFlight.map((item, index) => {
          if (index === 0) {
            return {
              ...item,
              DepartDate: date,
            }
          }
          return item
        }),
      })
    } else if (isDeparting) {
      setRequest({
        ...request,
        ListFlight: request.ListFlight.map((item, index) => {
          if (index === 1) {
            return {
              ...item,
              DepartDate: date,
            }
          }
          return item
        }),
      })
    }
  }

  return (
    <Card customClass={styles.wrapper}>
      <div className="flex flex-col gap-24">
        <div className="flex gap-16">
          <Button
            size="sm"
            typeStyle="link-color"
            label={isDeparting ? 'Khứ hồi' : 'Một chiều'}
            onClick={handleChangeDepart}
            iconLeading={<SwitchHorizonIcon />}
            // iconTrailing={<ChevronDownIcon />}
          />
          <div>
            <div className={styles.selectInput}>
              <Button
                label={request.Adt + request.Chd + request.Inf}
                iconLeading={<UserIcon />}
                size="sm"
                typeStyle="link-color"
                iconTrailing={<ChevronDownIcon />}
                onClick={() => setShowPeople(true)}
              />
              {showPeople && (
                <div className={`${styles.dropdownPeople}`} ref={showPeopleRef}>
                  <Input
                    label="Người lớn"
                    value={request.Adt}
                    onChange={(e) => setRequest({ ...request, Adt: Number(e.target.value) })}
                    iconSwap={<UserIcon />}
                    style={{ width: '100%' }}
                    type="number"
                  />
                  <Input
                    label="Trẻ em"
                    value={request.Chd}
                    onChange={(e) => setRequest({ ...request, Chd: Number(e.target.value) })}
                    iconSwap={<UserIcon />}
                    style={{ width: '100%' }}
                    type="number"
                  />
                  <Input
                    label="Em bé"
                    value={request.Inf}
                    onChange={(e) => setRequest({ ...request, Inf: Number(e.target.value) })}
                    iconSwap={<UserIcon />}
                    style={{ width: '100%' }}
                    type="number"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={['flex gap-16', styles['input-group']].join(' ')}>
          <div className="flex-grow">
            <div className={styles.selectInput}>
              <Input
                label="Điểm đi"
                iconSwap={<PlaneFlyIcon />}
                supportIcon={<ChevronDownIcon />}
                onClick={() => setShowGo(true)}
                value={valueGo.name}
              />
              {showGo && (
                <div className={styles.dropdown} ref={showGoRef}>
                  {/* <div className={styles['dropdown-item']}>{valueGo.name}</div> */}
                  {airports.map((item, index) => (
                    <div
                      className={styles['dropdown-item']}
                      key={index}
                      onClick={() => handleSelectAirport(item.code, true)}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex-grow">
            <div className={styles.selectInput}>
              <Input
                label="Điểm đến"
                iconSwap={<PlaneArrivalIcon />}
                supportIcon={<ChevronDownIcon />}
                onClick={() => setShowBack(true)}
                value={valueBack.name}
              />
              {showBack && (
                <div className={styles.dropdown} ref={showBackRef}>
                  {/* <div className={styles['dropdown-item']}>{valueGo.name}</div> */}
                  {airports
                    .filter((item) => item.code !== valueGo.code)
                    .map((item, index) => (
                      <div
                        className={styles['dropdown-item']}
                        key={index}
                        onClick={() => handleSelectAirport(item.code, false)}
                      >
                        {item.name}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex-grow">
            <FlightDatePicker
              label="Ngày đi"
              onChangDate={(date) => handleChangeDate(date, true)}
            />
          </div>
          {isDeparting && (
            <div className="flex-grow">
              <FlightDatePicker
                label="Ngày về"
                onChangDate={(date) => handleChangeDate(date, false)}
              />
            </div>
          )}
          <Button customClass={styles['submit-btn']} label="Tìm kiếm" onClick={handleClick} />
        </div>
      </div>
    </Card>
  )
}
