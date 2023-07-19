import { Layout } from '@/components'
import SearchPageDetail from '@/module-ships/search'
import { NextPageWithLayout } from '../_app'

const SearchPage: NextPageWithLayout = () => {
  return <SearchPageDetail />
}

SearchPage.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default SearchPage
