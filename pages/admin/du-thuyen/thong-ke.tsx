import { LayoutAdmin } from '@/components/Layout/LayoutAdmin'
import { NextPageWithLayout } from '../../_app'
import { ShipStatistics } from '@/module-admin/ship-statistics'

const ShipStatisticsPage: NextPageWithLayout = () => {
  return <ShipStatistics />
}

ShipStatisticsPage.getLayout = (page) => {
  return <LayoutAdmin>{page}</LayoutAdmin>
}

export default ShipStatisticsPage
