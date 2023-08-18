export const COOKIE_TOKEN_KEY = 'token'

export const airports = [
  { airport: 'Sân bay Côn Đảo', code: 'VCS', name: 'Bà Rịa-Vũng Tàu' },
  { airport: 'Sân bay Phù Cát', code: 'UIH', name: 'Bình Định	' },
  { airport: 'Sân bay Cà Mau', code: 'CAH', name: 'Cà Mau' },
  { airport: 'Sân bay Buôn Ma Thuột', code: 'BMV', name: 'Đắk Lắk' },
  { airport: 'Sân bay Điện Biên Phủ', code: 'DIN', name: 'Điện Biên	' },
  { airport: 'Sân bay Pleiku', code: 'PXU', name: 'Gia Lai' },
  { airport: 'Sân bay Rạch Giá', code: 'VKG', name: 'Kiên Giang' },
  { airport: 'Sân bay Liên Khương', code: 'DLI', name: 'Lâm Đồng' },
  { airport: 'Sân bay Tuy Hòa', code: 'TBB', name: 'Phú Yên' },
  { airport: 'Sân bay Đồng Hới', code: 'VDH', name: 'Quảng Bình' },
  { airport: 'Sân bay Chu Lai', code: 'VCL', name: 'Quảng Nam	' },
  { airport: 'Sân bay Thọ Xuân', code: 'THD', name: 'Thanh Hóa' },
  { airport: 'Cảng hàng không quốc tế Cần Thơ', code: 'VCA', name: 'Cần Thơ' },
  { airport: 'Cảng hàng không quốc tế Đà Nẵng', code: 'DAD', name: 'Đà Nẵng' },
  { airport: 'Cảng hàng không quốc tế Cát Bi', code: 'HPH', name: 'Hải Phòng' },
  { airport: 'Cảng hàng không quốc tế Nội Bài', code: 'HAN', name: 'Hà Nội' },
  { airport: 'Cảng hàng không quốc tế Tân Sơn Nhất', code: 'SGN', name: 'Thành phố Hồ Chí Minh' },
  { airport: 'Cảng hàng không quốc tế Cam Ranh', code: 'CXR', name: 'Khánh Hòa' },
  { airport: 'Cảng hàng không quốc tế Phú Quốc', code: 'PQC', name: 'Kiên Giang' },
  { airport: 'Cảng hàng không quốc tế Vinh', code: 'VII', name: 'Nghệ An' },
  { airport: 'Cảng hàng không quốc tế Phú Bài', code: 'HUI', name: 'Thừa Thiên - Huế' },
]

export const getAirportByCode = (code: string) => {
  const findAP = airports.find((item) => item.code === code)
  if (findAP) return findAP
  return { airport: 'Không tìm thấy code', code, name: 'Không tìm thấy code' }
}

export const airlines = [
  {
    code: 'VN',
    icon: '/airline/VNA.svg',
    name: 'Vietnam Airlines',
  },
  {
    code: 'VJ',
    icon: '/airline/VJA.svg',
    name: 'Vietjet Air',
  },
  {
    code: 'QH',
    icon: '/airline/BBA.svg',
    name: 'Bamboo Airways',
  },
  {
    code: 'BL',
    icon: '/airline/PA.svg',
    name: 'Pacific Airlines',
  },
  {
    code: 'VU',
    icon: '/airline/VTA.svg',
    name: 'Vietravel Airlines',
  },
]

export const getThisDay = (date: Date) => {
  const currentDay = date.getDay()

  // Biến lưu tên của thứ
  let dayName = ''

  // Lấy tên thứ của ngày hiện tại
  switch (currentDay) {
    case 1:
      dayName = 'Thứ 2'
      break
    case 2:
      dayName = 'Thứ 3'
      break
    case 3:
      dayName = 'Thứ 4'
      break
    case 4:
      dayName = 'Thứ 5'
      break
    case 5:
      dayName = 'Thứ 6'
      break
    case 6:
      dayName = 'Thứ 7'
      break
    default:
      dayName = 'Chủ nhật'
  }

  return dayName
}

export const getDateFromFlightReq = (date: string) => {
  const dateSplit = date?.split('')
  const dateConvert: string = [
    ...dateSplit.filter((item, index) => index < 2),
    '/',
    ...dateSplit.filter((item, index) => index >= 2 && index < 4),
    '/',
    ...dateSplit.filter((item, index) => index >= 4),
  ]
    .join('')
    .split('/')
    .map((item, index, array) => {
      if (index === 0) return array[1]
      if (index === 1) return array[0]
      return item
    })
    .join('/')
  return dateConvert
}

export const getAirlineByCode = (code: string) => {
  const findAP = airlines.find((item) => item.code === code)
  if (findAP) return findAP
  return { code, name: 'Không tìm thấy code', icon: '/card-image.png' }
}

function padTo2Digits(num: number) {
  return String(num).padStart(2, '0')
}

export function getHourAndMin(value: Date) {
  const date = new Date(value)
  return `${padTo2Digits(date.getHours())}:${padTo2Digits(date.getMinutes())}`
}

export const getFormatDate = (date: Date) => {
  const yyyy = date.getFullYear()
  let mm: string | number = date.getMonth() + 1 // Months start at 0!
  let dd: string | number = date.getDate()

  if (dd < 10) dd = `0${dd}`
  if (mm < 10) mm = `0${mm}`

  const formattedToday = `${dd}/${mm}/${yyyy}`
  return formattedToday
}
