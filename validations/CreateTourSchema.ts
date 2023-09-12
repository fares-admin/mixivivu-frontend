import * as Yup from 'yup'

export const CreateTourSchema = () =>
  Yup.object().shape({
    title: Yup.string().required('Bạn phải nhập tên tour'),
    slug: Yup.string().required('Bạn phải nhập slug của tour'),
    defaultPrice: Yup.number().required('Bạn phải nhập giá tour'),
    schedule: Yup.string().required('Bạn phải nhập lịch trình'),
    address: Yup.string().required('Bạn phải nhập địa chỉ'),
  })
