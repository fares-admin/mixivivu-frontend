import { Layout } from '@/components'
import { Payment } from '@/module-flights/payment'
import { NextPageWithLayout } from '@/pages/_app'

const FlightPaymentPage: NextPageWithLayout = () => {
  return <Payment />
}

FlightPaymentPage.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default FlightPaymentPage
