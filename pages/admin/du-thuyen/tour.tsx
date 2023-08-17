import { LayoutAdmin } from '@/components/Layout/LayoutAdmin'
import { NextPageWithLayout } from '../../_app'
import { Tour } from '@/module-admin/tour'

const TourPage: NextPageWithLayout = () => {
  return <Tour />
}

TourPage.getLayout = (page) => {
  return <LayoutAdmin>{page}</LayoutAdmin>
}

export default TourPage
