import {
  Button,
  Card,
  ChevronDownIcon,
  FlightDatePicker,
  Input,
  PlaneArrivalIcon,
  PlaneFlyIcon,
  UserIcon,
} from '@/components'
import { SwitchHorizonIcon } from '@/components/SVGIcon/SwitchHorizonIcon'
import styles from './FlightSearchNavigation.module.css'

export const FlightSearchNavigation = () => {
  return (
    <Card customClass={styles.wrapper}>
      <div className="flex flex-col gap-24">
        <div className="flex gap-16">
          <Button
            size="sm"
            typeStyle="link-color"
            label="Khứ hồi"
            iconLeading={<SwitchHorizonIcon />}
            iconTrailing={<ChevronDownIcon />}
          />
          <div>
            <Button
              label={1}
              iconLeading={<UserIcon />}
              size="sm"
              typeStyle="link-color"
              iconTrailing={<ChevronDownIcon />}
            />
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
