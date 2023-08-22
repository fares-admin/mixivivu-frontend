/* eslint-disable import/no-extraneous-dependencies */
import { Card } from '@/components'
import OtpInput from 'react-otp-input'
import styles from './OtpCard.module.css'
import { useState } from 'react'

interface OtpCardProps {
  title: string
  description: string
}

export const OtpCard = ({ title, description }: OtpCardProps) => {
  const [otp, setOtp] = useState('')
  return (
    <Card>
      <div className={styles['card-header']}>{title}</div>
      <div className={styles['card-content']}>
        <div className="flex flex-col gap-6">
          <label className="sm">{description}</label>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span className={styles.divider}>-</span>}
            renderInput={(props) => <input className={styles['otp-input']} {...props} />}
          />
          <div className="flex gap-6">
            <p className="sm">Nếu bạn không nhận được mã?</p>
            <p className="sm cursor-pointer" style={{ color: 'var(--primary-dark, #0E4F4F)' }}>
              Gửi lại mã
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}
