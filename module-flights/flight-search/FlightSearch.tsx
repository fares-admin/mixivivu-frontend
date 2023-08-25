import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BreadCrumbs,
  Button,
  FlightSearchNavigation,
  PartnerSection,
  Steps,
} from '@/components'
import { flightEndpoints, getEndpoint } from '@/constants/endpoints'
import { SearchFlightReq, SearchFlightResponse } from '@/flight-api/flight-types'
import { resetFlightStore, setData, setSelectedFlight } from '@/redux/flight-store'
import { useEffect, useState } from 'react'
import { CustomerContact, CustomerInfo } from './components/CustomerInfo'

import { getAirportByCode } from '@/constants/commonValue'
import { steps } from '@/constants/config'
import { useApiCall } from '@/hooks'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import styles from './FlightSearch.module.scss'
import { FlightList } from './components/FlightList'
import { FlightSidebar } from './components/FlightSidebar'
import { TicketDetail } from './components/TicketDetail'
import { OtpCard } from '@/components/Card/OtpCard'

export const FlightSearch = () => {
  const [departureFlight, setDepartureFlight] = useState<number | null>(null)
  const [returnFlight, setReturnFlight] = useState<number | null>(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [req, setReq] = useState('')

  const dispatch = useDispatch()

  const router = useRouter()

  const searchFlightData = useApiCall<SearchFlightResponse, string>({
    callApi: () => axios.post(getEndpoint(flightEndpoints, 'search'), JSON.parse(req)),
    handleSuccess(mess, data) {
      dispatch(setData(data))
    },
    handleError(status, message) {
      toast.error(message)
    },
  })

  useEffect(() => {
    if (router && router.query.req && JSON.stringify(router.query.req) !== JSON.stringify(req)) {
      setReq(router.query.req as string)
    }
  }, [router])

  useEffect(() => {
    if (req) {
      searchFlightData.setLetCall(true)
    }
  }, [req])

  const reqString = router?.query.req

  const thisReq = reqString ? (JSON.parse(reqString as string) as SearchFlightReq) : undefined

  const goRoute = getAirportByCode(thisReq ? thisReq.ListFlight[0].StartPoint : '')

  const backRoute = getAirportByCode(thisReq ? thisReq.ListFlight[0].EndPoint : '')

  const getSteps = () => {
    if (router.pathname.includes('ket-qua')) {
      if (departureFlight === null) {
        return [
          { ...steps[0], status: 'inprogress' },
          { ...steps[1], status: 'incomplete' },
          { ...steps[2], status: 'incomplete' },
        ]
      }
      return [
        { ...steps[0], status: 'done' },
        { ...steps[1], status: 'inprogress' },
        { ...steps[2], status: 'incomplete' },
      ]
    }
    return [
      { ...steps[0], status: 'done' },
      { ...steps[1], status: 'done' },
      { ...steps[2], status: 'inprogress' },
    ]
  }

  useEffect(() => {
    if (
      searchFlightData?.data?.result?.ListFareData &&
      searchFlightData?.data?.result?.ListFareData?.length > 0
    ) {
      if (departureFlight !== null && returnFlight === null) {
        dispatch(
          setSelectedFlight(
            searchFlightData.data.result.ListFareData.filter(
              (item) => item.FareDataId === departureFlight
            )
          )
        )
      } else if (departureFlight !== null && returnFlight !== null) {
        dispatch(
          setSelectedFlight(
            searchFlightData.data!.result.ListFareData.filter(
              (item) => item.FareDataId === departureFlight || item.FareDataId === returnFlight
            )
          )
        )
      }
    }
  }, [departureFlight, returnFlight])

  const handleReset = () => {
    setDepartureFlight(null)
    setReturnFlight(null)
    dispatch(resetFlightStore())
  }
  const handleNextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1)
    } else {
      router.push('/tim-ve-may-bay/thanh-toan')
    }
  }

  const handleBack = () => {
    setCurrentStep(currentStep - 1)
    if (currentStep === 0) {
      handleReset()
    }
  }

  useEffect(() => {
    if (!departureFlight) {
      setCurrentStep(0)
    }
  }, [departureFlight])
  return (
    <>
      <div className={[styles.navigation, 'container'].join(' ')}>
        <BreadCrumbs breadcrumbs={['Tìm vé máy bay', `${goRoute.code} - ${backRoute.code}`]} />
      </div>
      <div className="section-bg">
        <div className={['container flex flex-col gap-40 ', styles['flight-search']].join(' ')}>
          {departureFlight === null && <FlightSearchNavigation />}

          <div className="m-auto">
            <Steps steps={getSteps() as any} />
          </div>
          <div className="flex gap-32">
            {departureFlight !== null ? <TicketDetail /> : <FlightSidebar />}
            <div className={[styles['flight-content'], 'flex-grow flex flex-col gap-16'].join(' ')}>
              {currentStep < 1 && (
                <FlightList
                  departureFlight={departureFlight}
                  setDepartureFlight={setDepartureFlight}
                  returnFlight={returnFlight}
                  setReturnFlight={setReturnFlight}
                />
              )}

              {departureFlight !== null && (
                <>
                  {currentStep === 0 && (
                    <>
                      <CustomerInfo />
                      <CustomerContact />
                    </>
                  )}
                  {currentStep === 1 && (
                    <OtpCard
                      title="Xác thực Email"
                      description="Một mã gồm 4 chữ số đã được gửi đến email@email.com của bạn"
                    />
                  )}
                  {currentStep === 2 && (
                    <OtpCard
                      title="Xãc thực OTP"
                      description="Một mã gồm 6 chữ số đã được gửi đến số điện thoại (+84) 999 999 999 của bạn"
                    />
                  )}
                  <div className="flex justify-between">
                    <Button
                      label="Quay lại"
                      iconLeading={<ArrowLeftIcon />}
                      typeStyle="outline"
                      onClick={handleBack}
                    />

                    <Button
                      label="Tiếp"
                      iconTrailing={<ArrowRightIcon />}
                      onClick={handleNextStep}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.partners}>
        <PartnerSection />
      </div>
    </>
  )
}
