import { useState } from 'react'
import styles from './Carousel.module.css'
import { ImageFill } from '../ImageCustom'
import { Button } from '../Button'
import { ArrowLeftIcon, ArrowRightIcon } from '../SVGIcon'

interface CarouselProps {
  imgList: string[]
}

export const Carousel = ({ imgList = [] }: CarouselProps) => {
  const [currentImg, setCurrentImg] = useState(1)
  const prevImg = (currentImg - 1 + imgList.length) % imgList.length
  const nextImg = (currentImg + 1) % imgList.length
  const carouselImg = [prevImg, currentImg, nextImg]

  return (
    <div className={['flex gap-32 justify-center', styles.carousel].join(' ')}>
      <Button
        onClick={() => setCurrentImg(prevImg)}
        customClass={[styles['carousel-btn'], styles['left-btn']].join(' ')}
        iconOnly={<ArrowLeftIcon />}
        typeStyle="color"
      />
      <Button
        onClick={() => setCurrentImg(nextImg)}
        customClass={[styles['carousel-btn'], styles['right-btn']].join(' ')}
        iconOnly={<ArrowRightIcon />}
        typeStyle="color"
      />
      {carouselImg.map((item, index) => (
        <div className={styles.carouselItem} key={index}>
          <ImageFill width="100%" height="100%" src={imgList[item]} />
        </div>
      ))}

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
