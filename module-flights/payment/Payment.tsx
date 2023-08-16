import {
  ArrowRightIcon,
  BreadCrumbs,
  Button,
  FlightItemCard,
  FlightsCard,
  PartnerSection,
  Steps,
} from '@/components'
import styles from './Payment.module.scss'
import { steps } from '@/constants/config'
import { CustomerInfo, PackageDetail, QrPayment, TicketDetail } from '@/module-flights/payment'
import { InfoModal } from '@/components/Modal/InfoModal'
import Image from 'next/image'
import { useState } from 'react'
import { BookingSuccessModal } from './components/BookingSuccessModal'

export const Payment = () => {
  const [open, setOpen] = useState(false)
  const [openSuccessModal, setOpenSuccessModal] = useState(false)
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
          <TicketDetail />
          <PackageDetail />
          <CustomerInfo />
        </div>
      </div>
      <div className={styles.partners}>
        <PartnerSection />
      </div>
      <BookingSuccessModal
        openSuccessModal={openSuccessModal}
        setOpenSuccessModal={setOpenSuccessModal}
      />
      <InfoModal
        open={open}
        setOpen={setOpen}
        title="Thời gian giữ vé của bạn đã hết"
        customImg={<Image src="/sad.png" width={400} height={360} />}
        actions={
          <Button label="Tìm vé ngay" iconTrailing={<ArrowRightIcon />} typeStyle="outline" />
        }
      />
    </>
  )
}
