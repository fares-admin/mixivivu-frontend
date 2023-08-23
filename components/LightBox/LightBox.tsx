import { useState } from 'react'
import styles from './LightBox.module.css'
import { ImageFill } from '../ImageCustom'
import { CloseIcon } from '../SVGIcon/CloseIcon'
import { ProductRes } from '@/types/product'

interface LightBoxProps {
  isOpen: boolean
  listImages: string[]
  shipDetail: ProductRes
  setIsOpen: (isOpen: boolean) => void
}
const defaultCatalog = ['/banner.jpeg', '/carousel2.png', '/carousel3.png']

export const LightBox = ({
  isOpen = false,
  setIsOpen,
  listImages = [],
  shipDetail,
}: LightBoxProps) => {
  const imgList = listImages?.length >= 3 ? listImages : defaultCatalog
  const [currentImg, setCurrentImg] = useState(0)
  return (
    <div className={[isOpen ? styles.open : '', styles['light-box']].join(' ')}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <h4 className={styles.title}>{shipDetail?.title}</h4>
            <div className="flex gap-8 align-center">
              <h4 className={styles.price}>{shipDetail?.defaultPrice}đ</h4>
              {/* <div className={styles.originalPrice}>5,400,000đ</div> */}
            </div>
          </div>
          <div className={styles.actions}>
            <div className={styles['action-item']} onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </div>
          </div>
        </div>
        <div className={styles['img-wrapper']}>
          <ImageFill width="100%" height="100%" src={imgList[currentImg]} />
          <div className={[styles.thumbs, 'flex gap-12'].join(' ')}>
            {imgList.map((item, index) => (
              <div
                onClick={() => setCurrentImg(index)}
                key={index}
                className={[
                  styles.thumbItem,
                  index === currentImg ? styles.thumbItemActive : '',
                ].join(' ')}
              >
                <ImageFill width="100%" height="100%" src={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
