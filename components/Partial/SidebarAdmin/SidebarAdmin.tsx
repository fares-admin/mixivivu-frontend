import { Input } from '@/components/Input'
import { LogoAdmin } from '@/components/Logo'
import { LogOutIcon, SearchIcon, ShipIcon, UserIcon } from '@/components/SVGIcon'
import { COOKIE_TOKEN_KEY } from '@/constants/commonValue'
import { ReactNode, useState } from 'react'
import { useCookies } from 'react-cookie'
import { toast } from 'react-toastify'
import { ItemSidebar } from './ItemSIdebar'
import styles from './SidebarAdmin.module.css'

export const SidebarAdmin = () => {
  const [open, setOpen] = useState('')

  const [, , removeCookie] = useCookies([COOKIE_TOKEN_KEY])

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

  const logoutFunc = () => {
    toast.success('Đã đăng xuất')
    removeCookie(COOKIE_TOKEN_KEY)
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <LogoAdmin />
      </div>
      <div className={styles.searchContainer}>
        <Input customClass={styles.searchInput} placeHolder="Tìm kiếm" iconSwap={<SearchIcon />} />
      </div>
      <div className={styles.itemList}>
        {sidebarList.map((item) => (
          <ItemSidebar item={item} open={open} setOpen={setOpen} key={item.text} />
        ))}
      </div>
      <div className={styles.footSidebar}>
        <div className={styles.footContent}>
          <div>email</div>
          <div className={styles.logout} onClick={logoutFunc}>
            <LogOutIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
