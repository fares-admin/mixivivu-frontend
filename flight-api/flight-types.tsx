export interface FlightApiAuthReq {
  HeaderUser: string
  HeaderPass: string
  AgentAccount: string
  AgentPassword: string
  ProductKey?: string
  Currency?: string
  Language?: string
  IpRequest?: string
}

export interface FlightRequest {
  StartPoint: string
  EndPoint: string
  DepartDate: string
  Airline: string
}

export interface SearchFlightReq {
  Adt: number
  Chd: number
  Inf: number
  ViewMode?: string
  ListFlight: FlightRequest[]
}

export interface SegmentResponse {
  Id: number
  Airline: string
  MarketingAirline: string
  OperatingAirline: string
  StartPoint: string
  EndPoint: string
  StartTime: Date
  StartTimeZoneOffset: string
  EndTime: Date
  EndTimeZoneOffset: string
  StartTm: string
  EndTm: string
  FlightNumber: string
  Duration: number
  Class: string
  Cabin: string
  FareBasis: string
  Seat: number
  Plane: string
  StartTerminal: string
  EndTerminal: string
  HasStop: boolean
  StopPoint: string
  StopTime: number
  DayChange: boolean
  StopOvernight: boolean
  ChangeStation: boolean
  ChangeAirport: boolean
  LastItem: boolean
  HandBaggage: string
  AllowanceBaggage: string
}

export interface FlightResponse {
  FlightId: number
  Leg: number
  Airline: string
  Operating: string
  StartPoint: string
  EndPoint: string
  StartDate: Date
  EndDate: Date
  StartDt: string
  EndDt: string
  FlightNumber: string
  StopNum: number
  HasDownStop: boolean
  Duration: number
  NoRefund: boolean
  GroupClass: string
  FareClass: string
  FareBasis: string
  SeatRemain: number
  Promo: boolean
  FlightValue: string
  ListSegment: SegmentResponse[]
}

export interface FaresResponse {
  FareDataId: number
  Airline: string
  Itinerary: number
  Leg: number
  Promo: boolean
  Currency: string
  System: string
  FareType: string
  CacheAge: number
  Availability: number
  Adt: number
  Chd: number
  Inf: number
  FareAdt: number
  FareChd: number
  FareInf: number
  TaxAdt: number
  TaxChd: number
  TaxInf: number
  FeeAdt: number
  FeeChd: number
  FeeInf: number
  ServiceFeeAdt: number
  ServiceFeeChd: number
  ServiceFeeInf: number
  TotalNetPrice: number
  TotalServiceFee: number
  TotalDiscount: number
  TotalCommission: number
  TotalPrice: number
  ListFlight: FlightResponse[]
}

export interface SearchFlightResponse {
  FlightType: string
  Session: string
  Itinerary: number
  ListFareData: FaresResponse[]
  Status: boolean
  ErrorCode: string
  ErrorValue: string
  ErrorField: string
  Message: string
  Langguage: string
}
