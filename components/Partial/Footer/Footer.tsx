import { Logo } from '@/components'
import styles from './Footer.module.css'
import { ListItem, SocialIcons } from './Footer.inventory'

export const Footer = () => {
  return (
    <>
      <div className={['flex justify-center', styles.footer1].join(' ')}>
        <div className={`${styles.footer} container`}>
          <div className="flex flex-col gap-20">
            <Logo type="white" />
            <p className="md">
              Mixivivu - đối tác tin cậy của các hãng du thuyền lớn, mang đến cho bạn chương trình
              ưu đãi độc quyền cho tour du thuyền Hạ Long. Khám phá Hạ Long với Mixivivu - trải
              nghiệm du thuyền đẳng cấp và nhận những ưu đãi đặc biệt từ chúng tôi.
            </p>
          </div>
          <div className="flex justify-between gap-32">
            {ListItem.map((item) => (
              <div key={item.label} className="flex flex-col gap-16">
                <span className="detail-sm">{item.label}</span>
                <div className="flex flex-col gap-12">
                  {item.childs.map((child, index) => (
                    <a
                      key={index}
                      href={child.url}
                      className={['subheading sm', styles.anchor].join(' ')}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={['flex justify-center', styles.footer2].join(' ')}>
        <div className={[styles.footer, 'container'].join(' ')}>
          <p className="md">© 2023 Mixivivu. All rights reserved.</p>
          <div className="flex gap-24">
            {SocialIcons.map((icon, index) => (
              <a href={icon.link} key={index}>
                {icon.comps}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
