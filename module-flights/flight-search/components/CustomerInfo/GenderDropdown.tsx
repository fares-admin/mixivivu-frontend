import { Button, ChevronDownIcon } from '@/components'

import { useOutsideClick } from '@/hooks/useClickOutside'
import { useState } from 'react'
import styles from './CustomerInfo.module.scss'

export const GenderDropDown = ({
  onChangeValue,
  thisValue,
  labelMale = 'Nam',
  labelFemale = 'Nữ',
}: {
  thisValue?: boolean
  onChangeValue: (value: boolean) => void
  labelMale?: string
  labelFemale?: string
}) => {
  const [showGe, setShowGe] = useState(false)
  const showGeRef = useOutsideClick(() => {
    setShowGe(false)
  })

  const handleSetGender = (value: boolean) => {
    onChangeValue(value)
    setShowGe(false)
  }

  return (
    <div className={styles.selectInput}>
      <Button
        fullWidth
        customClass={styles['dropdown-btn']}
        label={thisValue ? labelMale : labelFemale}
        typeStyle="outline"
        iconTrailing={<ChevronDownIcon />}
        onClick={() => setShowGe(true)}
      />
      {showGe && (
        <div className={`${styles.dropdown}`} ref={showGeRef}>
          <Button
            typeStyle="outline"
            onClick={() => handleSetGender(true)}
            label={labelMale}
            fullWidth
          />
          <Button
            typeStyle="outline"
            onClick={() => handleSetGender(false)}
            label={labelFemale}
            fullWidth
          />
        </div>
      )}
    </div>
  )
}
