/* eslint-disable import/no-extraneous-dependencies */
import { Button, ChevronDownIcon, Input } from '@/components'
import { useState } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import styles from './SelectTime.module.css'
import { useOutsideClick } from '@/hooks/useClickOutside'

interface SelectTimeProps {
  customClass?: string
  label: string
}

export const SelectTime = ({ customClass, label }: SelectTimeProps) => {
  const [showSelectTime, setShowSelectTime] = useState(false)
  const ref = useOutsideClick(() => {
    setShowSelectTime(false)
  })
  return (
    <div className={styles['select-time']}>
      <Input
        label={label}
        type="button"
        customClass={customClass}
        onClick={() => setShowSelectTime(!showSelectTime)}
        value="Tất cả"
        supportIcon={<ChevronDownIcon />}
      />
      {showSelectTime && (
        <div className={styles['select-time__dropdown']} ref={ref}>
          <div className={styles['select-time__content']}>
            <Slider range allowCross={false} defaultValue={[0, 24]} min={0} max={24} />
            <div className="flex gap-16">
              <Input label="Từ" customClass={styles['range-input']} />
              <Input label="Đến" customClass={styles['range-input']} />
            </div>
          </div>
          <div className={styles['select-time__footer']}>
            <Button label="Áp dụng" typeStyle="color" customClass={styles['apply-btn']} />
          </div>
        </div>
      )}
    </div>
  )
}
