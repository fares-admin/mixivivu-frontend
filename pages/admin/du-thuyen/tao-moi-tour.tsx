import { LayoutAdmin } from '@/components/Layout/LayoutAdmin'
import { NextPageWithLayout } from '../../_app'
import { AddTour } from '@/module-admin/tour/'

const TourPage: NextPageWithLayout = () => {
  return <AddTour />
}

TourPage.getLayout = (page) => {
  return <LayoutAdmin>{page}</LayoutAdmin>
}

export default TourPage
