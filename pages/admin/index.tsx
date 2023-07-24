import LayoutAdmin from '@/components/Layout/LayoutAdmin'
import { NextPageWithLayout } from '../_app'

const AdminDashboard: NextPageWithLayout = () => {
  return <div>a</div>
}

AdminDashboard.getLayout = (page) => {
  return <LayoutAdmin>{page}</LayoutAdmin>
}

export default AdminDashboard
