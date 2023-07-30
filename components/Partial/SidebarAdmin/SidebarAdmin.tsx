import { LogOutIcon, SearchIcon, ShipIcon, UserIcon } from '@/components/SVGIcon'
import { ReactNode, useState } from 'react'

import { Input } from '@/components/Input'
import { LogoAdmin } from '@/components/Logo'
import { COOKIE_TOKEN_KEY } from '@/constants/commonValue'
import { Routes } from '@/constants/routes'
import { ShareStoreSelector } from '@/redux/share-store'
import { useCookies } from 'react-cookie'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { ItemSidebar } from './ItemSidebar'
import styles from './SidebarAdmin.module.css'

export const SidebarAdmin = () => {
  const [open, setOpen] = useState('')
  const [search, setSearch] = useState('')

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
      text: 'Quản lý tài khoản',
      link: Routes.admin.internalUserList,
      children: [],
    },
  ]

  const logoutFunc = () => {
    toast.success('Đã đăng xuất')
    removeCookie(COOKIE_TOKEN_KEY)
  }

  const { userInfo } = useSelector(ShareStoreSelector)

  const sidebarItems = sidebarList
    .filter((item) => {
      if (!!search) {
        const findChild = item.children.find((child) =>
          child.text.toLowerCase().includes(search.toLowerCase())
        )
        return item.text.toLowerCase().includes(search.toLowerCase()) || !!findChild
      }
      return true
    })
    .map((item) => <ItemSidebar item={item} open={open} setOpen={setOpen} key={item.text} />)

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <LogoAdmin />
      </div>
      <div className={styles.searchContainer}>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          customClass={styles.searchInput}
          placeHolder="Tìm kiếm"
          iconSwap={<SearchIcon />}
        />
      </div>
      <div className={styles.itemList}>{sidebarItems}</div>
      <div className={styles.footSidebar}>
        <div className={styles.footContent}>
          <div>{userInfo.email}</div>
          <div className={styles.logout} onClick={logoutFunc}>
            <LogOutIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
