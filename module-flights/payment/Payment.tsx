import { BreadCrumbs, FlightItemCard, FlightsCard, PartnerSection, Steps } from '@/components'
import styles from './Payment.module.scss'
import { steps } from '@/constants/config'
import { QrPayment } from './components/QrPayment'

export const Payment = () => {
  return (
    <>
      <div className={[styles.navigation, 'container'].join(' ')}>
        <BreadCrumbs breadcrumbs={['Tìm vé máy bay', 'SGN - HAN']} />
      </div>
      <div
        className={['container flex flex-col gap-40 section-bg', styles['flight-payment']].join(
          ' '
        )}
      >
        <div className="m-auto">
          <Steps steps={steps} />
        </div>
        <div className={styles['payment-content']}>
          <QrPayment />
          <FlightsCard
            from="Cảng hàng không quốc tế Hồ Chí Minh (SGN)"
            to="Cảng hàng không quốc tế Hà Nội (HAN)"
            date="Thứ 3, 18/02/2023"
            content={
              <div style={{ padding: '16px 24px' }}>
                <FlightItemCard isSelected handleSelect={() => {}} />
              </div>
            }
          />
          <FlightsCard
            isDeparting={false}
            from="Cảng hàng không quốc tế Hồ Chí Minh (SGN)"
            to="Cảng hàng không quốc tế Hà Nội (HAN)"
            date="Thứ 3, 18/02/2023"
            content={
              <div style={{ padding: '16px 24px' }}>
                <FlightItemCard isSelected handleSelect={() => {}} />
              </div>
            }
          />
        </div>
      </div>

      <div className={styles.partners}>
        <PartnerSection />
      </div>
    </>
  )
}
