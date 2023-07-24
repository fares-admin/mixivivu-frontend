import LayoutAdmin from '@/components/Layout/LayoutAdmin'
import { NextPageWithLayout } from '../../_app'

const InternalUserAdmin: NextPageWithLayout = () => {
  return <div>quan ly nguoi dung</div>
}

InternalUserAdmin.getLayout = (page) => {
  return <LayoutAdmin>{page}</LayoutAdmin>
}

export default InternalUserAdmin
