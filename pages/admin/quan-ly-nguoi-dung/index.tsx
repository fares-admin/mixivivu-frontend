import DashboardLayout from '@/module-admin/layout/DashboardLayout'
import { NextPageWithLayout } from '../../_app'

const InternalUserAdmin: NextPageWithLayout = () => {
  return <div>quan ly nguoi dung</div>
}

InternalUserAdmin.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default InternalUserAdmin
