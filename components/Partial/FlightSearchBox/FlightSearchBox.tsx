import {
  Button,
  Card,
  Checkbox,
  ChevronDownIcon,
  FlightDatePicker,
  Input,
  PlaneArrivalIcon,
  PlaneFlyIcon,
  UserIcon,
} from '@/components'
import { airports, getAirportByCode, getFormatDate } from '@/constants/commonValue'
import { useEffect, useState } from 'react'

import { SearchFlightReq } from '@/flight-api/flight-types'
import { useOutsideClick } from '@/hooks/useClickOutside'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import styles from './FlightSearchBox.module.css'

interface SearchBoxProps {
  title: string
  description: string
  className?: string
}

export const FlightSearchBox = ({ title, description, className }: SearchBoxProps) => {
  const [isDeparting, setIsDeparting] = useState(false)
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

  const [showGo, setShowGo] = useState(false)
  const [showBack, setShowBack] = useState(false)

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
  }

  useEffect(() => {
    handleChangeDepart()
  }, [isDeparting])

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
      new Date(startParseDate).getTime() >
        new Date(
          request.ListFlight[1].DepartDate.split('/')
            .map((item, index, array) => {
              if (index === 0) return array[1]
              if (index === 1) return array[0]
              return item
            })
            .join('/')
        ).getTime()
    ) {
      toast.error('Hãy chọn ngày sau ngày đi')
    } else
      router.push({
        pathname: `${router.pathname}/ket-qua`,
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
    <Card
      customClass={[className, styles.searchBox, 'flex flex-col justify-center gap-40'].join(' ')}
    >
      <div className="flex flex-col gap-16 gray-900">
        <h4 className="text-center">{title}</h4>
        <p className="lg text-center">{description}</p>
      </div>
      <div className="flex gap-16">
        <Checkbox
          checked={isDeparting}
          onChange={() => setIsDeparting(true)}
          name="type"
          type="radio"
          text="Một chiều"
          sizeInput="sm"
        />
        <Checkbox
          checked={!isDeparting}
          onChange={() => setIsDeparting(false)}
          name="type"
          type="radio"
          text="Khứ hồi"
          sizeInput="sm"
        />
      </div>
      <div className={[styles.grid, styles.distance].join(' ')}>
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
      <div className={styles.grid}>
        <FlightDatePicker label="Ngày đi" onChangDate={(date) => handleChangeDate(date, true)} />
        {!isDeparting && (
          <FlightDatePicker label="Ngày về" onChangDate={(date) => handleChangeDate(date, true)} />
        )}
      </div>
      <div className={styles.grid}>
        <div className={styles.grid}>
          <Input
            label="Người lớn"
            value={request.Adt}
            iconSwap={<UserIcon />}
            supportIcon={<ChevronDownIcon />}
            onChange={(e) => {
              if (Number.isFinite(Number(e.target.value))) {
                setRequest({ ...request, Adt: Number(e.target.value) })
              }
            }}
          />
          <Input
            label="Trẻ em"
            value={request.Chd}
            iconSwap={<UserIcon />}
            supportIcon={<ChevronDownIcon />}
            onChange={(e) => {
              if (Number.isFinite(Number(e.target.value))) {
                setRequest({ ...request, Chd: Number(e.target.value) })
              }
            }}
          />
        </div>
        <div className={styles.grid}>
          <Input
            label="Em bé"
            value={request.Inf}
            iconSwap={<UserIcon />}
            supportIcon={<ChevronDownIcon />}
            onChange={(e) => {
              if (Number.isFinite(Number(e.target.value))) {
                setRequest({ ...request, Inf: Number(e.target.value) })
              }
            }}
          />
          <Button
            onClick={handleClick}
            label="Tìm chuyến bay"
            typeStyle="color"
            customClass={styles['search-btn']}
            fullWidth
          />
        </div>
      </div>
    </Card>
  )
}
