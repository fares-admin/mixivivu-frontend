/* eslint-disable import/no-extraneous-dependencies */
import { Button, ChevronDownIcon, CircleDolarIcon, Input } from '@/components'
import { useState } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import styles from './SelectPrice.module.css'

interface SelectPriceProps {
  customClass?: string
}

export const SelectPrice = ({ customClass }: SelectPriceProps) => {
  const [showSelectPrice, setShowSelectPrice] = useState(false)

  return (
    <div className={styles['select-price']}>
      <Input
        type="button"
        customClass={customClass}
        iconSwap={<CircleDolarIcon />}
        onClick={() => setShowSelectPrice(!showSelectPrice)}
        value="Tất cả mức giá"
        supportIcon={<ChevronDownIcon />}
      />
      {showSelectPrice && (
        <div className={styles['select-price__dropdown']}>
          <div className={styles['select-price__content']}>
            <Slider range allowCross={false} defaultValue={[0, 20]} />
            <div className="flex gap-16">
              <Input label="Từ" customClass={styles['range-input']} />
              <Input label="Đến" customClass={styles['range-input']} />
            </div>
          </div>
          <div className={styles['select-price__footer']}>
            <Button label="Áp dụng" typeStyle="color" customClass={styles['apply-btn']} />
          </div>
        </div>
      )}
    </div>
  )
}
