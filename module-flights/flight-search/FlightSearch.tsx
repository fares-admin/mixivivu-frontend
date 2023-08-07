import {
  PartnerSection,
  StepItemProps,
  Steps,
  BreadCrumbs,
  Button,
  ArrowRightIcon,
  ArrowLeftIcon,
} from '@/components'
import styles from './FlightSearch.module.scss'
import { FlightSidebar } from './components/FlightSidebar'
import { FlightList } from './components/FlightList'
import { TicketDetail } from './components/TicketDetail'
import { useState } from 'react'
import { CustomerContact, CustomerInfo } from './components/CustomerInfo'

const steps: StepItemProps[] = [
  {
    status: 'done',
    title: 'Your details',
    description: 'Please provide your name and email',
  },
  {
    status: 'inprogress',
    title: 'Your details',
    description: 'Please provide your name and email',
  },
  {
    status: 'incomplete',
    title: 'Your details',
    description: 'Please provide your name and email',
  },
]

export const FlightSearch = () => {
  const [departureFlight, setDepartureFlight] = useState<number | null>(null)
  const [returnFlight, setReturnFlight] = useState<number | null>(null)
  return (
    <>
      <div className={[styles.navigation, 'container'].join(' ')}>
        <BreadCrumbs breadcrumbs={['Tìm vé máy bay', 'SGN - HAN']} />
      </div>
      <div
        className={['container flex flex-col gap-40 section-bg', styles['flight-search']].join(' ')}
      >
        <div className="m-auto">
          <Steps steps={steps} />
        </div>
        <div className="flex gap-32">
          {departureFlight && returnFlight ? <TicketDetail /> : <FlightSidebar />}
          <div className={[styles['flight-content'], 'flex-grow flex flex-col gap-16'].join(' ')}>
            <FlightList
              departureFlight={departureFlight}
              setDepartureFlight={setDepartureFlight}
              returnFlight={returnFlight}
              setReturnFlight={setReturnFlight}
            />
            {departureFlight && returnFlight && (
              <>
                <CustomerInfo />
                <CustomerContact />
                <div className="flex justify-between">
                  <Button label="Quay lại" iconLeading={<ArrowLeftIcon />} typeStyle="outline" />
                  <Button label="Tiếp" iconTrailing={<ArrowRightIcon />} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className={styles.partners}>
        <PartnerSection />
      </div>
    </>
  )
}
