import DashboardLayout from '@/module-admin/layout/DashboardLayout'
import { NextPageWithLayout } from '../_app'

const AdminDashboard: NextPageWithLayout = () => {
  return <div>a</div>
}

AdminDashboard.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default AdminDashboard
