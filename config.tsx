/* eslint-disable import/no-mutable-exports */
const dev = {
  API_BASE_URL: 'https://api-mixi.fares.vn',
}
let MIXIVIVU_CONFIG: {
  API_BASE_URL: string
} = {
  API_BASE_URL: '',
}

switch (process.env.NEXT_PUBLIC_REACT_APP_STAGE) {
  case 'dev':
    MIXIVIVU_CONFIG = dev
    break

  default:
    MIXIVIVU_CONFIG = dev
    break
}

export default MIXIVIVU_CONFIG
