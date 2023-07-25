import { LayoutAdmin } from '@/components/Layout/LayoutAdmin'
import { InternalUserList } from '@/module-admin/internal-user/list/InternalUserList'
import { NextPageWithLayout } from '../../_app'

const InternalUserAdmin: NextPageWithLayout = () => {
  return <InternalUserList />
}

InternalUserAdmin.getLayout = (page) => {
  return <LayoutAdmin>{page}</LayoutAdmin>
}

export default InternalUserAdmin
