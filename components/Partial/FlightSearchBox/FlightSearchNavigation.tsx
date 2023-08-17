import {
  Button,
  Card,
  Checkbox,
  ChevronDownIcon,
  FlightDatePicker,
  Input,
  PlaneArrivalIcon,
  PlaneFlyIcon,
  QuantityItem,
  UserIcon,
} from '@/components'
import { SwitchHorizonIcon } from '@/components/SVGIcon/SwitchHorizonIcon'
import styles from './FlightSearchNavigation.module.css'
import { Dropdown } from '@/components/Dropdown/Dropdown'
import { useOutsideClick } from '@/hooks/useClickOutside'
import { useState } from 'react'

export const FlightSearchNavigation = () => {
  const [showFlightType, setShowFlightType] = useState(false)
  const [showQuantity, setShowQuantity] = useState(false)

  const ref = useOutsideClick(() => {
    setShowFlightType(false)
  })

  const quantityRef = useOutsideClick(() => {
    setShowQuantity(false)
  })

  return (
    <Card customClass={styles.wrapper}>
      <div className="flex flex-col gap-24">
        <div className="flex gap-16">
          <div className="relative">
            <Button
              size="sm"
              typeStyle="link-color"
              label="Khứ hồi"
              iconLeading={<SwitchHorizonIcon />}
              iconTrailing={<ChevronDownIcon />}
              onClick={() => setShowFlightType(true)}
            />
            {showFlightType && (
              <Dropdown customClass={styles.dropdown} ref={ref}>
                <div className={styles['dropdown-content']}>
                  <div className="flex flex-col gap-16">
                    <div
                      style={{
                        borderBottom: '1px solid var(--gray-100, #F2F4F7)',
                        paddingBottom: 16,
                      }}
                    >
                      <Checkbox type="radio" text="Khứ hồi" sizeInput="md" />
                    </div>
                    <Checkbox type="radio" text="Một chiều" sizeInput="md" />
                  </div>
                </div>
                <div className={styles['dropdown-action']}>
                  <Button fullWidth size="sm" label="Áp dụng" />
                </div>
              </Dropdown>
            )}
          </div>

          <div className="relative">
            <Button
              label={1}
              iconLeading={<UserIcon />}
              size="sm"
              typeStyle="link-color"
              iconTrailing={<ChevronDownIcon />}
              onClick={() => setShowQuantity(true)}
            />
            {showQuantity && (
              <Dropdown customClass={styles.dropdown} ref={quantityRef}>
                <div className={styles['dropdown-content']}>
                  <div className="flex flex-col gap-16">
                    <QuantityItem name="Người lớn" defaultValue={1} handleChange={() => {}} />
                    <QuantityItem name="Trẻ em" defaultValue={0} handleChange={() => {}} />
                    <QuantityItem name="Em bé" defaultValue={0} handleChange={() => {}} />
                  </div>
                </div>
                <div className={styles['dropdown-action']}>
                  <Button fullWidth size="sm" label="Áp dụng" />
                </div>
              </Dropdown>
            )}
          </div>
        </div>
        <div className="flex gap-16">
          <div className="flex-grow">
            <Input label="Điểm đi" iconSwap={<PlaneFlyIcon />} />
          </div>
          <div className="flex-grow">
            <Input label="Điểm đến" iconSwap={<PlaneArrivalIcon />} />
          </div>
          <div className="flex-grow">
            <FlightDatePicker label="Ngày đi" />
          </div>
          <div className="flex-grow">
            <FlightDatePicker label="Ngày về" />
          </div>
          <Button label="Tìm kiếm" />
        </div>
      </div>
    </Card>
  )
}
