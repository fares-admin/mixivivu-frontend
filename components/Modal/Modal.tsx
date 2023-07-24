import { MouseEventHandler } from 'react'
import Popup from 'reactjs-popup'

interface ModalProps {
  trigger: JSX.Element | ((isOpen: boolean) => JSX.Element) | undefined
}

export const Modal = ({ trigger }: ModalProps) => (
  <Popup trigger={trigger} position="top left">
    <>
      {(close: MouseEventHandler<HTMLAnchorElement> | undefined) => {
        return (
          <div>
            Content here
            <a className="close" onClick={close}>
              &times;
            </a>
          </div>
        )
      }}
    </>
  </Popup>
)
