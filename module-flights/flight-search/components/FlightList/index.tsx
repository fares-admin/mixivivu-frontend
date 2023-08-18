import { FlightItemCard, FlightItemLoadingCard, FlightsCard, Pagination } from '@/components'
import { getAirportByCode, getDateFromFlightReq, getThisDay } from '@/constants/commonValue'
import { FaresResponse, SearchFlightReq } from '@/flight-api/flight-types'
import { Dispatch, SetStateAction, useState } from 'react'

import { FlightCalendar } from '@/components/FlightCalendar'
import { FlightStoreSelector } from '@/redux/flight-store'
import { ShareStoreSelector } from '@/redux/share-store'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import styles from './FlightList.module.scss'

interface FlightListProps {
  departureFlight: number | null
  returnFlight: number | null
  setDepartureFlight: Dispatch<SetStateAction<number | null>>
  setReturnFlight: Dispatch<SetStateAction<number | null>>
}

export const FlightList = ({
  departureFlight,
  setDepartureFlight,
  returnFlight,
  setReturnFlight,
}: FlightListProps) => {
  const { data } = useSelector(FlightStoreSelector)
  const { loading } = useSelector(ShareStoreSelector)

  const paginate = (array: FaresResponse[], page_size: number, page_number: number) => {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size)
  }

  const [goPage, setGoPage] = useState(1)
  const [goSize, setGoSize] = useState(5)

  const [backPage, setBackPage] = useState(1)
  const [backSize, setBackSize] = useState(5)

  const router = useRouter()

  const reqString = router?.query.req

  const req = reqString ? (JSON.parse(reqString as string) as SearchFlightReq) : undefined

  const goRoute = getAirportByCode(req ? req.ListFlight[0].StartPoint : '')

  const backRoute = getAirportByCode(req ? req.ListFlight[0].EndPoint : '')

  const goData =
    data?.ListFareData.filter((item) => item.ListFlight[0].StartPoint === goRoute.code) || []

  const backData =
    data?.ListFareData.filter((item) => item.ListFlight[0].StartPoint === backRoute.code) || []

  return (
    <>
      <FlightsCard
        from={`${goRoute.airport} (${goRoute.code})`}
        to={`${backRoute.airport} (${backRoute.code})`}
        date={`${getThisDay(
          req?.ListFlight[0].DepartDate
            ? new Date(getDateFromFlightReq(req.ListFlight[0].DepartDate))
            : new Date()
        )}, ${req?.ListFlight[0].DepartDate && getDateFromFlightReq(req.ListFlight[0].DepartDate)}`}
        content={
          <>
            {departureFlight !== null ? (
              <div className={[styles['flight-card-list']].join(' ')}>
                <FlightItemCard
                  FareDataId={departureFlight}
                  isSelected
                  handleSelect={() => setDepartureFlight(null)}
                />
              </div>
            ) : (
              <>
                {loading === 0 && <FlightCalendar />}
                <div className={['flex flex-col gap-16', styles['flight-card-list']].join(' ')}>
                  {loading > 0 && [1, 2, 3, 4, 5].map(() => <FlightItemLoadingCard />)}
                  {!loading &&
                    goData.length > 0 &&
                    paginate(goData, goSize, goPage).map((item) => (
                      <FlightItemCard
                        handleSelect={() => setDepartureFlight(item.FareDataId)}
                        key={item.FareDataId}
                        FareDataId={item.FareDataId}
                      />
                    ))}
                  {!loading && goData.length === 0 && (
                    <div style={{ display: 'flex', justifyContent: 'center', minHeight: 40 }}>
                      Không tìm thấy vé phù hợp
                    </div>
                  )}
                </div>
              </>
            )}
            {loading === 0 && (
              <Pagination
                pageSize={goSize}
                onPageChange={setGoPage}
                currentPage={goPage}
                totalCount={goData.length}
                setPageSize={setGoSize}
              />
            )}
          </>
        }
      />
      {!!req?.ListFlight[1] && (
        <FlightsCard
          isDeparting={false}
          from={`${backRoute.airport} (${backRoute.code})`}
          to={`${goRoute.airport} (${goRoute.code})`}
          date={`${getThisDay(
            req?.ListFlight[1].DepartDate
              ? new Date(getDateFromFlightReq(req.ListFlight[1].DepartDate))
              : new Date()
          )}, ${
            req?.ListFlight[1].DepartDate && getDateFromFlightReq(req.ListFlight[1].DepartDate)
          }`}
          content={
            <>
              {returnFlight !== null ? (
                <div className={[styles['flight-card-list']].join(' ')}>
                  <FlightItemCard
                    FareDataId={returnFlight}
                    isSelected
                    handleSelect={() => setReturnFlight(null)}
                  />
                </div>
              ) : (
                <>
                  {loading === 0 && <FlightCalendar isDeparting />}
                  <div className={['flex flex-col gap-16', styles['flight-card-list']].join(' ')}>
                    {loading > 0 && [1, 2, 3, 4, 5].map(() => <FlightItemLoadingCard />)}
                    {!loading &&
                      backData.length > 0 &&
                      paginate(backData, backSize, backPage).map((item) => (
                        <FlightItemCard
                          handleSelect={() => setReturnFlight(item.FareDataId)}
                          key={item.FareDataId}
                          FareDataId={item.FareDataId}
                        />
                      ))}
                  </div>
                  {loading === 0 && (
                    <Pagination
                      pageSize={backSize}
                      onPageChange={setBackPage}
                      currentPage={backPage}
                      totalCount={backData.length}
                      setPageSize={setBackSize}
                    />
                  )}
                </>
              )}
            </>
          }
        />
      )}
    </>
  )
}
