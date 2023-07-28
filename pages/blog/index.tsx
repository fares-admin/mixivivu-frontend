import { Layout } from '@/components'
import { BlogPage } from '@/module-ships/blog'
import { NextPageWithLayout } from '../_app'

const Blog: NextPageWithLayout = () => {
  return <BlogPage />
}

Blog.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default Blog
