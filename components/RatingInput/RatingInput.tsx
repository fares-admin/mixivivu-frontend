import { useState } from 'react'
import { StarIcon } from '../SVGIcon'
import styles from './RatingInput.module.css'

interface RatingInputProps {
  rating: number
  onChange: (rating: number) => void
  error?: boolean
}

export const RatingInput = ({ rating, onChange, error }: RatingInputProps) => {
  const [hovered, setHovered] = useState(0)
  return (
    <div
      className={['flex gap-12 align-center', styles.rating, error ? styles.error : ''].join(' ')}
    >
      <label className="sm">Chất lượng</label>
      {[1, 2, 3, 4, 5].map((item) => (
        <div
          className={[
            styles['star-icon'],
            item <= rating || item <= hovered ? styles.active : '',
          ].join(' ')}
          onMouseEnter={() => setHovered(item)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(item)}
        >
          <StarIcon key={item} width="32" height="32" />
        </div>
      ))}
    </div>
  )
}
