import { Layout } from '@/components'
import { ShipDetail } from '@/module-ships/ship-detail/ShipDetail'
import { NextPageWithLayout } from '../_app'

const ShipDetailPage: NextPageWithLayout = () => {
  return <ShipDetail />
}

ShipDetailPage.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default ShipDetailPage
