import { Layout } from '@/components'
import { HomePage } from '@/module-ships/home'
import { NextPageWithLayout } from './_app'
import axios from 'axios'
import { categoryEndpoints, getEndpoint, productEndpoints } from '@/constants/endpoints'
import MIXIVIVU_CONFIG from '@/config'

const Home: NextPageWithLayout = ({ popularShips, categories }: any) => {
  return <HomePage popularShips={popularShips} categories={categories} />
}

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export const getServerSideProps: any = async () => {
  let popularShips = []
  let categories = []
  try {
    const [popularShipRes, categoryRes] = await Promise.all([
      axios.get(`${MIXIVIVU_CONFIG.API_BASE_URL}${getEndpoint(productEndpoints, 'getList')}`, {
        params: { limit: 6, type: 'ship' },
      }),
      axios.get(`${MIXIVIVU_CONFIG.API_BASE_URL}${getEndpoint(categoryEndpoints, 'getList')}`),
    ])
    if (popularShipRes.data) {
      popularShips = popularShipRes.data.result.data
    }
    if (categoryRes.data) {
      categories = categoryRes.data.result.data
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
  }
  return {
    props: {
      popularShips,
      categories,
    },
  }
}

export default Home
