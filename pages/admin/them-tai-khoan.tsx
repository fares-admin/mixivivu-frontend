import { LayoutAdmin } from '@/components/Layout/LayoutAdmin'
import { AddInternalUser } from '@/module-admin/internal-user/add/AddInternalUser'
import { NextPageWithLayout } from '../_app'

const AddInternalUserPage: NextPageWithLayout = () => {
  return <AddInternalUser />
}

AddInternalUserPage.getLayout = (page) => {
  return <LayoutAdmin>{page}</LayoutAdmin>
}

export default AddInternalUserPage
