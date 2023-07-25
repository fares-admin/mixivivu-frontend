import { ReactNode } from 'react'
import Popup from 'reactjs-popup'
import { XMarkIcon } from '../SVGIcon'
import styles from './Modal.module.css'

interface ModalProps {
  open: boolean
  setOpen: (open: boolean) => void
  content: ReactNode
}

export const Modal = ({ open, setOpen, content }: ModalProps) => {
  return (
    <Popup modal open={open}>
      <div>
        <div className={styles['close-btn']} onClick={() => setOpen(false)}>
          <XMarkIcon strokeColor="var(--gray-600)" width="20" height="20" />
        </div>
        {content}
      </div>
    </Popup>
  )
}
