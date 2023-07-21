import { CheckIcon, MapPinAltIcon, SectionHeader } from '@/components'
import styles from '../../ShipDetail.module.scss'

interface FeatureProps {
  features: string[]
  overviews: {
    icon: string
    value: string
  }[]
}

export const Features = ({ overviews = [], features = [] }: FeatureProps) => {
  return (
    <div className={['flex flex-col gap-40 ', styles.features].join(' ')}>
      <SectionHeader title={<>Đặc điểm nổi bật</>} />
      <div className={styles.overview}>
        {overviews.map((item, index) => (
          <div key={index} className="flex gap-8 align-center">
            <div>
              <MapPinAltIcon />
            </div>
            <label className="md">{item.value}</label>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-24">
        {features.map((item, index) => (
          <div className="flex align-center gap-8" key={index}>
            <div>
              <CheckIcon strokeColor="var(--primary-base)" width="24" height="24" />
            </div>
            <label className="md">{item}</label>
          </div>
        ))}
      </div>
    </div>
  )
}
