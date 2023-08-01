import { Layout } from '@/components'
import { FlightSearch } from '@/module-flights/flight-search'
import { NextPageWithLayout } from '@/pages/_app'

const FlightPage: NextPageWithLayout = () => {
  return <FlightSearch />
}

FlightPage.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default FlightPage
