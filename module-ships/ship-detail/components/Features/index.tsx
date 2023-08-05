import { useEffect, useState } from 'react'
import { CheckIcon, SectionHeader } from '@/components'
import axios from 'axios'
import { featureEndpoints, getEndpoint } from '@/constants/endpoints'

import styles from '../../ShipDetail.module.scss'
import { useApiCall } from '@/hooks'
import { CommonListResultType } from '@/types'
import { FeatureRes } from '@/types/feature'
import Image from 'next/image'

interface FeatureProps {
  features: string[]
  shortDescription: string[]
}

export const Features = ({ shortDescription = [], features = [] }: FeatureProps) => {
  const [featuresList, setFeatureList] = useState<FeatureRes[]>([])

  const { setLetCall } = useApiCall<CommonListResultType<FeatureRes>, string>({
    callApi: () => axios.get(getEndpoint(featureEndpoints, 'getList')),
    handleSuccess: (message, data) => {
      if (message) {
        const featureRes: FeatureRes[] = data.data
        const res = featureRes.filter((item) => features.includes(item._id))
        setFeatureList(res)
      }
    },
  })

  useEffect(() => {
    setLetCall(true)
  }, [setLetCall])

  return (
    <div id="features" className={['flex flex-col gap-40 ', styles.features].join(' ')}>
      <SectionHeader title={<>Đặc điểm nổi bật</>} />
      <div className={styles.overview}>
        {featuresList.map((item, index) => (
          <div key={index} className="flex gap-8 align-center">
            <div>
              <Image src={item.icon} width={24} height={24} />
            </div>
            <label className="md">{item.text}</label>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-24">
        {shortDescription.map((item, index) => (
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
