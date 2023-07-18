import { Layout } from '@/components'
import HomePage from '@/module-ships/home'
import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return <HomePage />
}

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default Home
