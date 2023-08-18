/* eslint-disable import/no-extraneous-dependencies */
import { Button, Card, HeaderAdmin, PlusIcon, UploadCloudIcon } from '@/components'
import styles from './AddTour.module.scss'
import { Form, Formik } from 'formik'
import { AddRooms, AddShipInfo, AddTourFeatures, AddTourInfo } from './components'
import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('@/components/Editor').then((module) => module.Editor), {
  ssr: false,
})

export const AddTour = () => {
  return (
    <div className={styles.wrapper}>
      <HeaderAdmin
        label="Tạo tour"
        trailButton={<Button iconLeading={<PlusIcon />} label="Tạo" size="sm" />}
      />
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <div className={styles.container}>
            <div className="flex flex-col gap-16">
              <AddTourInfo />
              <AddTourFeatures />
              <AddRooms />
              <Card>
                aaa
                <Editor />
              </Card>
            </div>
            <div className={[styles['side-content'], 'flex flex-col gap-16'].join(' ')}>
              <Card>
                <div className={styles['card-header']}>
                  <div className="subheading md">Ảnh đại diện</div>
                </div>
                <div className={styles['card-content']}>
                  <div className={styles['upload-images']}>
                    <UploadCloudIcon />
                    <div className="flex flex-col gap-4 align-center">
                      <Button label="Nhấp hoặc Thả ảnh" size="sm" typeStyle="link-color" />
                      <p className="sm">PNG, JPG</p>
                    </div>
                  </div>
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
