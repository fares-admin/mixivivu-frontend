import {
  ArrowRightIcon,
  BreadCrumbs,
  Button,
  Card,
  FlightItemCard,
  FlightsCard,
  PartnerSection,
  StepItemProps,
  Steps,
} from '@/components'
import { CustomerInfo, PackageDetail, QrPayment, TicketDetail } from '@/module-flights/payment'

import { InfoModal } from '@/components/Modal/InfoModal'
import Image from 'next/image'
import { useState } from 'react'
import styles from './Payment.module.scss'
import { BookingSuccessModal } from './components/BookingSuccessModal'

export const steps: StepItemProps[] = [
  {
    status: 'done',
    title: 'Chọn chuyến bay',
    description: 'Vui lòng chọn chuyến bay',
  },
  {
    status: 'done',
    title: 'Đặt chỗ',
    description: 'Điền thông tin để đặt chỗ',
  },
  {
    status: 'inprogress',
    title: 'Thanh toán',
    description: 'Thanh toán để nhận vé máy bay',
  },
]

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
                <FlightItemCard FareDataId={0} isSelected handleSelect={() => {}} />
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
                <FlightItemCard FareDataId={0} isSelected handleSelect={() => {}} />
              </div>
            }
          />
          <TicketDetail />
          <PackageDetail />
          <CustomerInfo />
        </div>
      </div>
      <Card customClass={styles['total-price-pin']}>
        <div className={styles['total-price-pin__content']}>
          <div className="flex gap-12 ">
            <p style={{ color: 'var(--gray-600)' }} className="sm">
              Phí dịch vụ
            </p>
            <p style={{ color: 'var(--gray-600)' }} className="sm flex-grow text-right">
              100,000 VND{' '}
            </p>
          </div>
          <div className="flex gap-12 ">
            <label className="xl">Phí dịch vụ</label>
            <label
              className="xl flex-grow text-right"
              style={{ color: 'var(--success-dark, #054F31)' }}
            >
              2,812,400 VND
            </label>
          </div>
        </div>
      </Card>
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
