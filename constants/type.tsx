export type ProductProps = {
  url: string
  rating: number
  ratingCount: number
  location: string
  title: string
  desciption: string
  price: number
  originalPrice: number
  tags: string[]
}

export type RoomProps = {
  url: string
  title: string
  price: number
  roomCount: number
  area: number
  userPerRoom: number
}
