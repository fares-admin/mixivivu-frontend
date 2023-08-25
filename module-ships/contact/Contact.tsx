import { ArrowRightIcon, Button, Card, Input, TextArea } from '@/components'
import styles from './Contact.module.scss'

export const ContactPage = () => {
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
        <div className="flex flex-col gap-24 w-full">
          <Input label="Họ và tên" placeHolder="Nhập họ và tên" required />
          <div className="grid grid-cols-2 gap-24">
            <Input label="Email" placeHolder="Nhập email" required />
            <Input label="Số điện thoại" placeHolder="Nhập số điện thoại" required />
          </div>
          <TextArea label="Nội dung" placeHolder="Nhập yêu cầu của bạn" required />
        </div>
        <Button fullWidth label="Liên hệ với Mixivivu" iconTrailing={<ArrowRightIcon />} />
      </Card>
    </div>
  )
}
