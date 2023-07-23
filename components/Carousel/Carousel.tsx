import { useState } from 'react'
import styles from './Carousel.module.css'
import { ImageFill } from '../ImageCustom'

interface CarouselProps {
  imgList: string[]
}

export const Carousel = ({ imgList = [] }: CarouselProps) => {
  const [currentImg, setCurrentImg] = useState(1)
  const prevImg = (currentImg - 1 + imgList.length) % imgList.length
  const nextImg = (currentImg + 1) % imgList.length

  return (
    <div className={['flex gap-32 justify-center', styles.carousel].join(' ')}>
      <div className={styles.carouselItem}>
        <ImageFill width="100%" height="100%" src={imgList[prevImg]} />
      </div>
      <div className={styles.carouselItem}>
        <ImageFill width="100%" height="100%" src={imgList[currentImg]} />
      </div>
      <div className={styles.carouselItem}>
        <ImageFill width="100%" height="100%" src={imgList[nextImg]} />
      </div>
      <div className={[styles.thumbs, 'flex gap-12'].join(' ')}>
        {imgList.map((item, index) => (
          <div
            onClick={() => setCurrentImg(index)}
            key={index}
            className={[styles.thumbItem, index === currentImg ? styles.thumbItemActive : ''].join(
              ' '
            )}
          >
            <ImageFill width="100%" height="100%" src={item} />
          </div>
        ))}
      </div>
    </div>
  )
}
