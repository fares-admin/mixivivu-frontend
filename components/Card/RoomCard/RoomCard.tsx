import Image from 'next/image'
import { Button, MinusIcon, Card, PlusIcon, BedDoubleIcon, UserIcon } from '@/components'
import styles from './RoomCard.module.css'

interface RoomCardProps {
  url: string
  title: string
  price: number
  roomCount: number
  area: number
  userPerRoom: number
}

export const RoomCard = ({ url, title, price, roomCount, area, userPerRoom }: RoomCardProps) => {
  const formatter = new Intl.NumberFormat('en-US')
  return (
    <Card customClass={styles.roomCard}>
      <Image src={url} width={76} height={76} />
      <div className={styles.roomDetail}>
        <p className={styles.title}>{title}</p>
        <div className={styles.roomInfo}>
          <div className={styles.roomInfo__item}>
            <BedDoubleIcon width="20" height="20" fillColor="var(--gray-600)" />
            <p className="sm">{area} m&#178;</p>
          </div>
          <div className={styles.roomInfo__item}>
            <p className="sm">Tối đa:</p>
            {Array.from({ length: userPerRoom }, (_, index) => (
              <UserIcon key={index} width="20" height="20" strokeColor="var(--gray-600)" />
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className={[styles.price, 'subheading md'].join(' ')}>{formatter.format(price)}đ</div>
        <div className={styles.user}>/khách</div>
      </div>
      <Button
        customClass={styles.roomBtn}
        label={roomCount.toString()}
        typeStyle="outline"
        iconLeading={<MinusIcon />}
        iconTrailing={<PlusIcon />}
      />
    </Card>
  )
}
