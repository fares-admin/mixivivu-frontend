import {
  Button,
  MinusIcon,
  Card,
  PlusIcon,
  BedDoubleIcon,
  UserIcon,
  Modal,
  ImageFill,
  CheckIcon,
} from '@/components'
import { overviews } from '@/constants/config'
import { useState } from 'react'
import styles from './RoomCard.module.css'

interface RoomCardProps {
  url: string
  title: string
  price: number
  roomCount: number
  area: number
  userPerRoom: number
  disabled?: boolean
}

export const RoomCard = ({
  url,
  title,
  price,
  roomCount,
  area,
  userPerRoom,
  disabled = false,
}: RoomCardProps) => {
  const formatter = new Intl.NumberFormat('en-US')
  const [openModal, setOpenModal] = useState(false)
  const modalContent = () => {
    return (
      <div className={styles['room-content']}>
        <div className="flex flex-col gap-8">
          <div className={styles['img-wrapper']}>
            <ImageFill src="/carousel3.png" width="100%" height="100%" />
          </div>
          <div className="flex gap-8">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div key={index} className={styles['img-item']}>
                <ImageFill width="100%" height="100%" src="/carousel3.png" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-40">
          <h6>Delta Suite Có Ban Công Riêng Nhìn Ra Biển - 2 Ngày 1 Đêm</h6>
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
          <div className={styles.overviews}>
            {overviews.map((item, index) => (
              <div key={index} className="flex gap-8 align-center">
                <div>
                  <CheckIcon width="24" height="24" strokeColor="var(--primary-base)" />
                </div>
                <label className="md">{item.value}</label>
              </div>
            ))}
          </div>
          <div className="flex gap-20">
            <Button
              customClass={styles.roomBtn}
              label={roomCount.toString()}
              typeStyle="outline"
              iconLeading={<MinusIcon />}
              iconTrailing={<PlusIcon />}
            />
            <Button typeStyle="color" label="Chọn phòng" />
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className={styles.wrapper}>
      <Card customClass={styles.roomCard}>
        <div className={styles['img-wrapper']}>
          <ImageFill src={url} width="100%" height="100%" />
        </div>
        <div className={styles.roomDetail}>
          <Modal open={openModal} setOpen={setOpenModal} content={modalContent()} />
          <p className={styles.title} onClick={() => !disabled && setOpenModal(true)}>
            {title}
          </p>
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
          <div className={[styles.price, 'subheading md'].join(' ')}>
            {formatter.format(price)}đ
          </div>
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
    </div>
  )
}
