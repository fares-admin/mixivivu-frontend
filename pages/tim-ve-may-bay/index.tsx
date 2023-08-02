import { Layout } from '@/components'
import { Flight } from '@/module-flights/flight'
import { NextPageWithLayout } from '@/pages/_app'

const FlightPage: NextPageWithLayout = () => {
  return <Flight />
}

FlightPage.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default FlightPage
