import { StarIcon } from '../SVGIcon'
import styles from './RatingInput.module.css'

export const RatingInput = () => {
  return (
    <div className={['flex gap-12 align-center', styles.rating].join(' ')}>
      <label className="sm">Chất lượng</label>
      {[1, 2, 3, 4, 5].map((item) => (
        <div className={styles['star-icon']}>
          <StarIcon key={item} width="32" height="32" strokeColor="var(--warning-base)" />
        </div>
      ))}
    </div>
  )
}
