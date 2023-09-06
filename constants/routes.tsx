export const Routes = {
  admin: {
    internalUserList: '/admin/quan-ly-tai-khoan',
    addUser: '/admin/them-tai-khoan',
    detailUser: '/admin/thong-tin-tai-khoan',
    addTour: '/admin/du-thuyen/tao-moi-tour',
    updateTour: '/admin/du-thuyen/cap-nhat-tour/[slug]',
  },
  ship: {
    filterShip: '/tim-du-thuyen',
    shipDetail: '/du-thuyen',
  },
  flight: {
    filterFlight: '/tim-ve-may-bay/ket-qua',
  },
  contact: '/lien-he',
  blog: '/blog',
}
