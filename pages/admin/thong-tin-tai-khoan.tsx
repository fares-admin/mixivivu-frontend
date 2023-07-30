import { LayoutAdmin } from '@/components/Layout/LayoutAdmin'
import { DetailInternalUser } from '@/module-admin/internal-user/detail/DetailInternalUser'
import { NextPageWithLayout } from '../_app'

const DetailUserPage: NextPageWithLayout = () => {
  return <DetailInternalUser />
}

DetailUserPage.getLayout = (page) => {
  return <LayoutAdmin>{page}</LayoutAdmin>
}

export default DetailUserPage
