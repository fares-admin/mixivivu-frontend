import { ReactNode } from 'react'
import Image from 'next/image'
import { Modal } from './Modal'
import styles from './Modal.module.css'

interface InfoModalProps {
  open: boolean
  setOpen: (open: boolean) => void
  title: string
  description: string
  img?: string
  actions: ReactNode
}

export const InfoModal = ({ open, setOpen, title, description, img, actions }: InfoModalProps) => {
  return (
    <Modal
      open={open}
      setOpen={setOpen}
      content={
        <div className={[styles['info-modal'], 'flex flex-col gap-24 align-center'].join(' ')}>
          <div className={styles['img-wrapper']}>
            <Image width={240} height={206} src={img || '/modal-icon.png'} />
          </div>
          <div className="flex flex-col gap-8">
            <h5>{title}</h5>
            <p className="md">{description}</p>
          </div>
          <div className={styles.actions}>{actions}</div>
        </div>
      }
    />
  )
}
