import { Input } from '@/components/Input'
import { LogoAdmin } from '@/components/Logo'
import {
  ChevronDownIcon,
  ChevronUpIcon,
  SearchIcon,
  ShipIcon,
  UserIcon,
} from '@/components/SVGIcon'
import { useRouter } from 'next/router'
import { ReactNode, useState } from 'react'
import styles from './SidebarAdmin.module.css'

const SidebarAdmin = () => {
  const [open, setOpen] = useState('')

  const sidebarList: {
    icon: ReactNode
    text: string
    link: string
    children: {
      text: string
      link: string
    }[]
  }[] = [
    {
      icon: <ShipIcon fillColor="#344054" />,
      text: 'Du thuyền Hạ Long',
      link: '/admin/du-thuyen',
      children: [
        {
          text: 'Tour',
          link: '/admin/du-thuyen/tour',
        },
        {
          text: 'Review',
          link: '/admin/du-thuyen/review',
        },
      ],
    },
    {
      icon: <UserIcon strokeColor="#344054" />,
      text: 'Quản lý người dùng',
      link: '/admin/quan-ly-nguoi-dung',
      children: [],
    },
  ]

  const router = useRouter()

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <LogoAdmin />
      </div>
      <div className={styles.searchContainer}>
        <Input customClass={styles.searchInput} placeHolder="Tìm kiếm" iconSwap={<SearchIcon />} />
      </div>
      {sidebarList.map((item) => (
        <>
          <div
            onClick={() => {
              if (item.children.length === 0) {
                router.push(item.link)
              }
              if (open === item.link) {
                setOpen('')
              } else setOpen(item.link)
            }}
            className={styles.itemSidebar}
          >
            <div className={styles.iconSidebar}>{item.icon}</div>
            <div className={styles.contentSidebar}>{item.text}</div>
            <div className={styles.iconSidebar}>
              {item.children.length > 0 && (
                <>
                  {item.link === open ? (
                    <ChevronDownIcon strokeColor="#344054" />
                  ) : (
                    <ChevronUpIcon strokeColor="#344054" />
                  )}
                </>
              )}
            </div>
          </div>
          <div
            className={[
              styles.childMenuStyle,
              item.link === open ? styles.childMenuStyleOpen : '',
            ].join(' ')}
          >
            {item.children.map((item) => (
              <div className={styles.itemChild}>
                <div className={styles.iconSidebar} />
                <div className={styles.contentSidebar}>{item.text}</div>
                <div className={styles.iconSidebar} />
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  )
}

export default SidebarAdmin
