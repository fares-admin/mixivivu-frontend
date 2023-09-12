import { FlightApiAuthReq } from './flight-types'

export const FLIGHT_API_URL = 'https://platform.hongngocha.com/'

export const AuthReq = (): FlightApiAuthReq => {
  return {
    HeaderUser: String(process.env.FLIGHT_HEADER_USER),
    HeaderPass: String(process.env.FLIGHT_HEADER_PASS),
    AgentAccount: String(process.env.FLIGHT_HEADER_AGENT_ACCOUNT),
    AgentPassword: String(process.env.FLIGHT_HEADER_AGENT_PASSWORD),
    ProductKey: String(process.env.FLIGHT_HEADER_PRODUCT_KEY),
  }
}
