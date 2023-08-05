import { Layout } from '@/components'
import { FlightSearch } from '@/module-flights/flight-search'
import { NextPageWithLayout } from '@/pages/_app'

const FlightSearchPage: NextPageWithLayout = () => {
  return <FlightSearch />
}

FlightSearchPage.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default FlightSearchPage
