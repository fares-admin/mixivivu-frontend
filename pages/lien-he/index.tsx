import { Layout } from '@/components'
import { ContactPage } from '@/module-ships/contact'
import { NextPageWithLayout } from '../_app'

const Contact: NextPageWithLayout = () => {
  return <ContactPage />
}

Contact.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default Contact
