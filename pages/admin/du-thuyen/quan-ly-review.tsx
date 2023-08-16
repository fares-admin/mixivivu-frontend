import { LayoutAdmin } from '@/components/Layout/LayoutAdmin'
import { NextPageWithLayout } from '../../_app'
import { ReviewManagement } from '@/module-admin/review-management'

const ReviewsManagementPage: NextPageWithLayout = () => {
  return <ReviewManagement />
}

ReviewsManagementPage.getLayout = (page) => {
  return <LayoutAdmin>{page}</LayoutAdmin>
}

export default ReviewsManagementPage
