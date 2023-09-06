/* eslint-disable import/no-extraneous-dependencies */
import { FacebookProvider, CustomChat } from 'react-facebook'

export const Messenger = () => {
  return (
    <FacebookProvider chatSupport appId="321107767139673">
      <CustomChat pageId="352940838484470" minimized />
    </FacebookProvider>
  )
}
