import { Button, ChevronDownIcon, GridCircleIcon, Logo, VietnameseFlagIcon } from '@/components'
import { useRouter } from 'next/router'
import styles from './Header.module.css'
import Link from 'next/link'

interface NavItemProps {
  name: string
  url: string
  childrens?: NavItemProps[]
}

const navigationItems = [
  {
    name: 'Tìm du thuyền',
    url: '/tim-du-thuyen',
  },
  {
    name: 'Tìm vé máy bay',
    url: '/tim-ve-may-bay',
  },
  {
    name: 'Doanh nghiệp',
    url: '/doanh-nghiep',
  },
  {
    name: 'Blog',
    url: '/blog',
  },
]

export const Header = () => {
  const router = useRouter()

  return (
    <div
      className={[styles.wrapper, router.pathname === '/' ? styles['home-header'] : ''].join(' ')}
    >
      <div className={['container flex justify-between align-center', styles.container].join(' ')}>
        <div className="flex align-center gap-40 h-full">
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={['flex gap-24 h-full', styles['nav-container']].join(' ')}>
            {navigationItems.map((navItem: NavItemProps) => (
              <div
                key={navItem.name}
                className={[router.pathname === navItem.url ? styles.active : '', styles.menu].join(
                  ' '
                )}
              >
                <a className="h-full flex align-center" href={navItem.url}>
                  <label htmlFor="" className="md">
                    {navItem.name}
                  </label>
                  {navItem?.childrens?.length ? <ChevronDownIcon /> : null}
                </a>
                {navItem?.childrens?.length ? (
                  <div className={styles['sub-menu']}>
                    {navItem?.childrens.map((childItem) => (
                      <a
                        key={childItem.name}
                        className="h-full flex align-center"
                        href={childItem.url}
                      >
                        <label htmlFor="" className="md">
                          {childItem.name}
                        </label>
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-16 align-center">
          <div className={styles.menu}>
            <Button
              label="Tiếng việt"
              size="sm"
              typeStyle="outline"
              iconLeading={<VietnameseFlagIcon />}
            />
            {/* <div className={styles['sub-menu']}>
            <div className="flex align-center gap-8">
              <VietnameseFlagIcon />
              Tiếng việt
            </div>
            <div className="flex align-center gap-8">
              <VietnameseFlagIcon />
              English
            </div>
          </div> */}
          </div>
          <Link href="/lien-he">
            <Button label="Liên hệ Mixivivu" size="sm" typeStyle="color" />
          </Link>
          <div className={styles['menu-mb']}>
            <GridCircleIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
