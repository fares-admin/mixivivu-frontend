import { Layout } from '@/components'
import { BusinessPage } from '@/module-ships/business'
import { NextPageWithLayout } from '../_app'

const Bussiness: NextPageWithLayout = () => {
  return <BusinessPage />
}

Bussiness.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default Bussiness
