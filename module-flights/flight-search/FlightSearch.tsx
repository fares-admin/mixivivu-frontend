import { PartnerSection, StepItemProps, Steps, BreadCrumbs } from '@/components'
import styles from './FlightSearch.module.scss'
import { FlightSidebar } from './components/FlightSidebar'
import { FlightList } from './components/FlightList'

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
          <FlightSidebar />
          <FlightList />
        </div>
      </div>
      <div>
        <PartnerSection />
      </div>
    </>
  )
}
