import * as Yup from 'yup'

export const ContactSchema = () =>
  Yup.object().shape({
    full_name: Yup.string().required('Bạn phải nhập họ và tên'),
    phone_number: Yup.string().required('Bạn phải nhập số điện thoại'),
    email: Yup.string().email('Email không hợp lệ').required('Bạn phải nhập email'),
    additional_info: Yup.string().required('Bạn cần nhập nội dung yêu cầu'),
  })
