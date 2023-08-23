/* eslint-disable import/no-extraneous-dependencies */
import { Card, CheckCircleIcon } from '@/components'
import { QRCodeSVG } from 'qrcode.react'
import styles1 from '../../Payment.module.scss'
import styles from './QrPayment.module.scss'

export const QrPayment = () => {
  return (
    <Card customClass={styles1.card}>
      <div className={styles1['card-header']}>
        <div className="flex flex-col gap-16 align-center">
          <CheckCircleIcon strokeColor="var(--success-base)" fillColor="white" />
          <div className="subheading md">Mã đơn hàng: MXVV14072201</div>
        </div>
      </div>
      <div className={styles1['card-content']}>
        <div className={`flex gap-120 ${styles['qr-content']}`}>
          <div className="flex flex-col gap-8 align-center flex-grow">
            <h4>20:59</h4>
            <div className={styles['qr-code']}>
              <QRCodeSVG
                value="https://reactjs.org/"
                width="100%"
                height="100%"
                bgColor="#77DADA"
                fgColor="#0E4F4F"
              />
            </div>
            <div className="subheading sm">Quét mã để thanh toán</div>
          </div>
          <div className="flex flex-col gap-8 justify-center flex-grow">
            <p className="sm" style={{ color: 'var(--gray-500, #667085)' }}>
              Số tiền
            </p>
            <h4 style={{ color: 'var(--primary-dark, #0E4F4F)' }}>2,812,400 VND</h4>
            <p className="sm" style={{ color: 'var(--gray-500, #667085)' }}>
              Số tài khoản
            </p>
            <label className="xl">9999 9999 9999 9999</label>
            <p className="sm" style={{ color: 'var(--gray-500, #667085)' }}>
              Chủ khoản
            </p>
            <label className="xl">Công Ty TNHH Du Lịch Và Dịch Vụ Mixi Vivu</label>
            <p className="sm" style={{ color: 'var(--gray-500, #667085)' }}>
              Nội dung chuyển khoản
            </p>
            <label className="xl">MXVV14072201</label>
          </div>
        </div>
      </div>
    </Card>
  )
}
