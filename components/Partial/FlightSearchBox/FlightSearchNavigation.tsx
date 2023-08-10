import { Button, Card, ChevronDownIcon, UserIcon } from '@/components'
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
          <div className="flex gap-16px">test</div>
        </div>
      </div>
    </Card>
  )
}
