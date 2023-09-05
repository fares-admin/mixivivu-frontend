import * as Yup from 'yup'

export const ReviewValidationSchema = () =>
  Yup.object().shape({
    score: Yup.number().required('Bạn phải chọn rating'),
    name: Yup.string().required('Bạn phải nhập họ và tên'),
    phone: Yup.string().required('Bạn phải nhập số điện thoại'),
    email: Yup.string().email('Email không hợp lệ').required('Bạn phải nhập email'),
    comment: Yup.string().required('Bạn phải nhập đánh giá'),
  })
