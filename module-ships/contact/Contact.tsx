/* eslint-disable no-console */
import { ArrowRightIcon, Button, Card, Input, TextArea } from '@/components'
import styles from './Contact.module.scss'
import { Field, Form, Formik } from 'formik'
import { ContactSchema } from '@/validations/ContactSchema'
import axios from 'axios'
import { getEndpoint, tourEndpoints } from '@/constants/endpoints'
import { InfoModal } from '@/components/Modal/InfoModal'
import { useRef, useState } from 'react'

export const ContactPage = () => {
  const [open, setOpen] = useState(false)
  const formRef = useRef(null)
  const handleSubmit = async (values) => {
    try {
      const res = await axios.post(getEndpoint(tourEndpoints, 'booking'), {
        subject: 'Contact',
        datatypes: 'contact',
        ...values,
      })
      if (res.data.status === 200) {
        setOpen(true)
        formRef?.current?.resetForm()
      }
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <div className={styles.contact}>
      <iframe
        title="contact"
        src="https://maps.google.com/maps?q=university%20of%20san%20francisco&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
        id="gmap_canvas"
        style={{ border: 0, borderRadius: 24 }}
        width="100%"
        height="720"
      />
      <Card customClass={styles['contact-card']}>
        <div className="flex flex-col gap-16 text-center align-center w-full">
          <h4>Khám phá Hạ Long thông qua Du thuyền</h4>
          <p className="lg">
            Khám phá Hạ Long qua Du thuyền cùng Mixivivu - Hãy liên hệ ngay để trải nghiệm hành
            trình tuyệt vời!
          </p>
        </div>
        <Formik
          initialValues={{
            full_name: '',
            phone_number: '',
            email: '',
            additional_info: '',
          }}
          innerRef={formRef}
          validationSchema={ContactSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values)
            setSubmitting(false)
          }}
        >
          <Form className="w-full">
            <div className="flex flex-col gap-24 w-full">
              <Field name="full_name">
                {({ field, meta }: any) => (
                  <div>
                    <Input {...field} label="Họ và tên" placeHolder="Nhập họ và tên" required />
                    {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                  </div>
                )}
              </Field>
              <div className={['grid grid-cols-2 gap-24', styles['group-input']].join(' ')}>
                <Field name="email">
                  {({ field, meta }: any) => (
                    <div>
                      <Input {...field} label="Email" placeHolder="Nhập email" required />
                      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                    </div>
                  )}
                </Field>
                <Field name="phone_number">
                  {({ field, meta }: any) => (
                    <div>
                      <Input
                        {...field}
                        label="Số điện thoại"
                        placeHolder="Nhập số điện thoại"
                        required
                      />
                      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                    </div>
                  )}
                </Field>
              </div>
              <Field name="additional_info">
                {({ field, meta }: any) => (
                  <div>
                    <TextArea
                      {...field}
                      label="Nội dung"
                      placeHolder="Nhập yêu cầu của bạn"
                      required
                    />
                    {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                  </div>
                )}
              </Field>
              <Button
                type="submit"
                fullWidth
                label="Liên hệ với Mixivivu"
                iconTrailing={<ArrowRightIcon />}
              />
            </div>
          </Form>
        </Formik>
      </Card>
      <InfoModal
        open={open}
        setOpen={setOpen}
        title="Yêu cầu của bạn đã được gửi thành công"
        description="Mixivivu sẽ liên hệ với bạn"
      />
    </div>
  )
}
