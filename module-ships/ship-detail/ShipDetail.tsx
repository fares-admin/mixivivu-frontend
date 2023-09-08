/* eslint-disable import/no-extraneous-dependencies */
import {
  Alert,
  ArrowRightIcon,
  BreadCrumbs,
  Button,
  Carousel,
  LightBox,
  SectionHeader,
  Tabs,
} from '@/components'
import Output from 'editorjs-react-renderer'
import { useEffect, useState } from 'react'
import { Features, Navigation, Rating, ShipInfo } from '@/module-ships/ship-detail'
import { useScrollspy } from '@/hooks/useScrollspy'
import styles from './ShipDetail.module.scss'
import { Rooms } from './components/Rooms'
import axios from 'axios'
import { getEndpoint, productEndpoints } from '@/constants/endpoints'
import { CommonListResultType } from '@/types'
import { ProductRes } from '@/types/product'
import { useApiCall } from '@/hooks'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { Routes } from '@/constants/routes'

const Messenger = dynamic(
  () => import('@/components/Messenger').then((module) => module.Messenger),
  {
    ssr: false,
  }
)

const offset = 160

export const ShipDetail = () => {
  const router = useRouter()

  const [shipDetail, setShipDetail] = useState<ProductRes>()

  const { setLetCall: fetchShipDetail } = useApiCall<CommonListResultType<ProductRes>, string>({
    callApi: () =>
      axios.get(getEndpoint(productEndpoints, 'getList'), {
        params: {
          slug: router.query.slug,
        },
      }),
    handleSuccess: (message, data) => {
      if (message) {
        setShipDetail(data.data[0])
      }
    },
  })

  useEffect(() => {
    if (router.isReady) fetchShipDetail(true)
  }, [fetchShipDetail, router.query.slug, router.isReady])

  const [openLightBox, setOpenLightBox] = useState(false)
  const handleChangeTab = (key: string) => {
    const section = document.getElementById(key)
    section?.scrollIntoView()
  }
  const tabItems = [
    {
      id: 'features',
      label: 'Đặc điểm',
    },
    {
      id: 'rooms',
      label: 'Phòng & giá',
    },
    {
      id: 'intro',
      label: 'Giới thiệu',
    },
    {
      id: 'rules',
      label: 'Quy định',
    },
    {
      id: 'reviews',
      label: 'Đánh giá',
      badge: shipDetail?.numReviews || 0,
    },
  ]
  const activeTab = useScrollspy(
    tabItems.map((item) => item.id),
    offset
  )

  return (
    <>
      <div className={styles.breadcrumbsWrapper}>
        <div className={['container', styles.breadcrumbs].join(' ')}>
          {shipDetail && (
            <BreadCrumbs
              breadcrumbs={[
                { label: 'Tìm du thuyền', link: Routes.ship.filterShip },
                { label: shipDetail?.title },
              ]}
            />
          )}
        </div>
      </div>
      <div className={['container', styles.wrapper].join(' ')}>
        <Navigation
          title={shipDetail?.title}
          review={shipDetail?.scoreReview}
          reviewCount={shipDetail?.numReviews}
          location={shipDetail?.address}
          map={shipDetail?.mapLink}
        />
      </div>
      <div className={styles.carousel}>
        <Carousel
          handleClickImg={() => setOpenLightBox(true)}
          listImages={shipDetail?.catalogs?.slice(0, 3)}
        />
      </div>
      {shipDetail?.spec?.ship && (
        <div className={styles['side-bar-mb']}>
          <ShipInfo info={shipDetail?.spec.ship} />
        </div>
      )}
      <div className={[styles['ship-detail'], 'container flex flex-col gap-40'].join(' ')}>
        <div className={styles.tabs}>
          <Tabs tabs={tabItems} activeKey={activeTab} onChange={handleChangeTab} />
        </div>
        <div className="flex gap-32 w-full">
          <div className="flex flex-col gap-80 flex-grow">
            {shipDetail?.features && shipDetail?.shortDescription && (
              <Features
                features={shipDetail?.features}
                shortDescription={shipDetail.shortDescription}
              />
            )}
            {shipDetail?._id && <Rooms shipDetail={shipDetail} />}
            <div id="intro">
              <Output data={shipDetail?.longDescription} />
            </div>
            <div id="rules">
              <SectionHeader title="Quy định chung và lưu ý" />
              <div className="flex gap-4 align-center">
                <label className="md">Bạn có thể xem Quy định chung và lưu ý:</label>
                <Button typeStyle="link-color" label="Tại đây" iconTrailing={<ArrowRightIcon />} />
              </div>
            </div>
            <div>
              <SectionHeader title="Câu hỏi thường gặp" />
              <div className="flex gap-4 align-center">
                <label className="md">Bạn có thể xem Câu hỏi thường gặp:</label>
                <Button typeStyle="link-color" label="Tại đây" iconTrailing={<ArrowRightIcon />} />
              </div>
            </div>
            <div className="flex flex-col gap-40">
              <SectionHeader title="Bản đồ và lịch trình" />
              <div className="flex flex-col gap-20">
                <Alert
                  title="Thông tin cần biết:"
                  color="gray"
                  content={
                    <ul>
                      <li>
                        Du thuyền {shipDetail?.title} xuất phát từ {shipDetail?.address}
                      </li>
                      <li>Bạn có thể xem chi tiết lịch trình 2 ngày 1 đêm tại đây.</li>
                    </ul>
                  }
                />
                {shipDetail?.mapIframeLink !== '' && (
                  <iframe
                    title="google-map"
                    width="100%"
                    height="332"
                    style={{ border: 0, borderRadius: 24 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={shipDetail?.mapIframeLink}
                  />
                )}
              </div>
            </div>
            {shipDetail?._id && (
              <Rating
                id={shipDetail._id}
                score={shipDetail?.scoreReview}
                numberOfReviews={shipDetail.numReviews}
              />
            )}
          </div>
          {shipDetail?.spec.ship && (
            <div className={styles['side-bar']}>
              <ShipInfo info={shipDetail?.spec.ship} />
            </div>
          )}
        </div>
      </div>
      <div className={['section-bg', styles['popular-ships']].join(' ')}>
        {/* <PopularShips ships={productList.slice(0, 3)} /> */}
      </div>
      {shipDetail && (
        <LightBox
          listImages={shipDetail?.catalogs?.slice(0, 3)}
          isOpen={openLightBox}
          setIsOpen={setOpenLightBox}
          shipDetail={shipDetail}
        />
      )}
      <Messenger />
    </>
  )
}
