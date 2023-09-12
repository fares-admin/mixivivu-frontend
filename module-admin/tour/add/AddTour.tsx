/* eslint-disable import/no-extraneous-dependencies */
import { Button, Card, HeaderAdmin, PlusIcon } from '@/components'
import styles from './AddTour.module.scss'
import { Form, Formik } from 'formik'
import { AddRooms, AddShipInfo, AddTourFeatures, AddTourInfo, ImageUpload } from './components'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { getEndpoint, imageEndpoints, productEndpoints } from '@/constants/endpoints'
import { useApiCall } from '@/hooks'
import { toast } from 'react-toastify'
import { ProductReq, ProductRequestError, ProductRes } from '@/types/product'
import { useRouter } from 'next/router'
import { CommonListResultType } from '@/types'
import { Routes } from '@/constants/routes'
import { CategoryRes } from '@/types/category'
import { ImageListType } from 'react-images-uploading'
import { COOKIE_TOKEN_KEY } from '@/constants/commonValue'
import { useCookies } from 'react-cookie'
import { CreateTourSchema } from '@/validations/CreateTourSchema'

const Editor = dynamic(() => import('@/components/Editor').then((module) => module.Editor), {
  ssr: false,
})

export const AddTour = () => {
  const [longDes, setLongDes] = useState(null)
  const formRef = useRef(null)
  const router = useRouter()
  // const [shipDetail, setShipDetail] = useState<ProductRes>()
  const [rooms, setRooms] = useState([])
  const [tourImages, setTourImages] = useState<ImageListType>([])
  const [thumbnail, setThumbnail] = useState<ImageListType>([])
  const [selectedCategory, setSelectedCategory] = useState<CategoryRes | null>()
  const [belongId, setBelongId] = useState(null)
  const [cookies] = useCookies([COOKIE_TOKEN_KEY])
  const { setLetCall: addNewImages } = useApiCall<ProductReq, ProductRequestError>({
    callApi: () => {
      const data = new FormData()
      tourImages.forEach((image) => {
        data.append('file', image.file)
      })
      data.append('belongId', belongId)
      return axios.post(getEndpoint(imageEndpoints, 'addNew'), data, {
        headers: {
          Authorization: cookies.token,
        },
      })
    },
    handleError(status, message) {
      if (status !== 400) {
        toast.error(message)
      }
    },
  })

  const { setLetCall: createTour } = useApiCall<ProductRes, ProductRequestError>({
    callApi: () =>
      axios.post(getEndpoint(productEndpoints, 'addNew'), {
        ...formRef?.current?.values,
        category: selectedCategory?._id,
        typeProduct: 'ship',
        shortDescription: 'Test',
        mapLink: 'test',
        mapIframeLink: 'test',
        longDescription: longDes,
      }),
    handleError(status, message) {
      if (status !== 400) {
        toast.error(message)
      }
    },
    handleSuccess(message, data) {
      setBelongId(data)
      addNewImages(true)
      toast.success('Tạo mới tour thành công')
    },
  })

  const { setLetCall: fetchShipDetail } = useApiCall<CommonListResultType<ProductRes>, string>({
    callApi: () =>
      axios.get(getEndpoint(productEndpoints, 'getList'), {
        params: {
          slug: router.query.slug,
        },
      }),
  })
  useEffect(() => {
    if (router.isReady && router.query.slug) fetchShipDetail(true)
  }, [fetchShipDetail, router.query.slug, router.isReady])

  const handleUploadThumbnail = (imageList: ImageListType) => {
    setThumbnail(imageList as never[])
  }

  return (
    <div className={styles.wrapper}>
      <Formik
        innerRef={formRef}
        initialValues={{
          title: '',
          slug: '',
          defaultPrice: '',
          schedule: '',
          address: '',
        }}
        validationSchema={CreateTourSchema}
        onSubmit={(values, { setSubmitting }) => {
          createTour(true)
          setSubmitting(false)
        }}
      >
        <Form>
          {router.pathname === Routes.admin.updateTour ? (
            <HeaderAdmin
              label="Cập nhật tour"
              trailButton={
                <Button type="submit" iconLeading={<PlusIcon />} label="Cập nhật" size="sm" />
              }
            />
          ) : (
            <HeaderAdmin
              label="Tạo tour"
              trailButton={
                <Button type="submit" iconLeading={<PlusIcon />} label="Tạo" size="sm" />
              }
            />
          )}

          <div className={styles.container}>
            <div className="flex flex-col gap-16">
              <AddTourInfo
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                tourImages={tourImages}
                setTourImages={setTourImages}
              />
              <AddTourFeatures />
              <AddRooms rooms={rooms} setRooms={setRooms} />
              <Card>
                <Editor onChange={(data) => setLongDes(data)} />
              </Card>
            </div>
            <div className={[styles['side-content'], 'flex flex-col gap-16'].join(' ')}>
              <Card>
                <div className={styles['card-header']}>
                  <div className="subheading md">Ảnh đại diện</div>
                </div>
                <div className={styles['card-content']}>
                  <ImageUpload value={thumbnail} maxNumber={1} onChange={handleUploadThumbnail} />
                </div>
              </Card>
              <AddShipInfo />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  )
}
