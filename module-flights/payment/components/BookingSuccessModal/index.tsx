import { ArrowDownIcon, ArrowRightIcon, Button, Collapse, ImageFill } from '@/components'
import { InfoModal } from '@/components/Modal/InfoModal'
import Image from 'next/image'
import { Dispatch, SetStateAction, useState } from 'react'
import styles from '../../Payment.module.scss'

interface BookingSuccessModalProps {
  openSuccessModal: boolean
  setOpenSuccessModal: Dispatch<SetStateAction<boolean>>
}

export const BookingSuccessModal = ({
  openSuccessModal,
  setOpenSuccessModal,
}: BookingSuccessModalProps) => {
  const [collpase, setCollapse] = useState(true)
  return (
    <InfoModal
      open={openSuccessModal}
      setOpen={setOpenSuccessModal}
      title="Đặt vé máy bay thành công"
      description="Cảm ơn bạn đã tin dùng dịch vụ của Mixivivu"
      customImg={<Image src="/booking-success.png" width={300} height={270} />}
      content={
        <Collapse
          customClass="w-full "
          isCollapse={collpase}
          header={
            <div
              className={[styles['card-header'], 'cursor-pointer'].join(' ')}
              onClick={() => setCollapse(!collpase)}
            >
              <div className="flex gap-16 align-center">
                <div className="subheading md flex-grow">Thông tin vé</div>
                <div className="subheading md flex-grow text-right">Mã đơn hàng: MXVV14072201</div>
                <Button
                  size="sm"
                  label="Tải vé"
                  iconTrailing={<ArrowDownIcon strokeColor="#0E4F4F" />}
                />
              </div>
            </div>
          }
          content={
            <>
              <div className={styles['card-content']}>
                <div className="flex flex-col gap-16">
                  <div className="flex gap-12">
                    <ImageFill width="40px" height="40px" src="/avatar.png" />
                    <div className="flex flex-col gap-4 flex-grow">
                      <label className="sm">Hà Nội (HAN) → Hồ Chí Minh (SGN)</label>
                      <p className="sm">22:50, 17/07</p>
                    </div>
                    <div className="flex flex-col gap-4 flex-grow text-right">
                      <p className="sm">Hành khách</p>
                      <label className="sm">1 người lớn</label>
                    </div>
                  </div>
                  <div className="flex gap-12">
                    <ImageFill width="40px" height="40px" src="/avatar.png" />
                    <div className="flex flex-col gap-4 flex-grow">
                      <label className="sm">Hà Nội (HAN) → Hồ Chí Minh (SGN)</label>
                      <p className="sm">22:50, 17/07</p>
                    </div>
                    <div className="flex flex-col gap-4 flex-grow text-right">
                      <p className="sm">Hành khách</p>
                      <label className="sm">1 người lớn</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles['card-footer']}>
                <div className="flex flex-col gap-16">
                  <label className="md">Thông tin vé sẽ được gửi đến</label>
                  <div className="grid grid-cols-3 gap-16">
                    <div className="flex flex-col gap-4">
                      <p className="sm">Người lên hệ</p>
                      <label className="sm">Nguyen Van Linh</label>
                    </div>
                    <div className="flex flex-col gap-4">
                      <p className="sm">Email</p>
                      <label className="sm">linh.nguyen@zestif.com</label>
                    </div>
                    <div className="flex flex-col gap-4">
                      <p className="sm">Điện thoại</p>
                      <label className="sm">0999 999 999</label>
                    </div>
                  </div>
                </div>
              </div>
            </>
          }
        />
      }
      actions={<Button label="Tìm vé ngay" iconTrailing={<ArrowRightIcon />} typeStyle="outline" />}
    />
  )
}
