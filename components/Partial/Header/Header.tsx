import { Button, ChevronDownIcon, Logo, VietnameseFlagIcon } from '@/components'
import styles from './Header.module.css'

export const Header = () => {
  const navigationItems = [
    {
      name: 'Tìm du thuyền',
      url: '/',
      childrens: [
        {
          name: 'Tìm du thuyền',
          url: '/',
        },
        {
          name: 'Tìm du thuyền 1',
          url: '/',
        },
      ],
    },
    {
      name: 'Combo',
      url: '/',
    },
    {
      name: 'Thuê trọn tàu',
      url: '/',
    },
    {
      name: 'Doanh nghiệp',
      url: '/',
    },
    {
      name: 'Blog',
      url: '/',
    },
    {
      name: 'Thêm',
      url: '/',
      childrens: [
        {
          name: 'Thêm',
          url: '/',
        },
        {
          name: 'Thêm 1',
          url: '/',
        },
      ],
    },
  ]

  return (
    <div className={['container flex justify-between align-center', styles.container].join(' ')}>
      <div className="flex align-center gap-40 h-full">
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={['flex gap-24 h-full', styles['nav-container']].join(' ')}>
          {navigationItems.map((navItem) => (
            <div key={navItem.name} className={styles.menu}>
              <a className="h-full flex align-center" href={navItem.url}>
                <label htmlFor="" className="md">
                  {navItem.name}
                </label>
                {navItem?.childrens?.length ? <ChevronDownIcon /> : null}
              </a>
              {navItem?.childrens?.length ? (
                <div className={styles['sub-menu']}>
                  {navItem.childrens.map((childItem) => (
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
      <div className="flex gap-16">
        <div className={styles.menu}>
          <Button
            label="Tiếng việt"
            size="sm"
            typeStyle="outline"
            iconLeading={<VietnameseFlagIcon />}
          />
          <div className={styles['sub-menu']}>
            <div className="flex align-center gap-8">
              <VietnameseFlagIcon />
              Tiếng việt
            </div>
            <div className="flex align-center gap-8">
              <VietnameseFlagIcon />
              English
            </div>
          </div>
        </div>
        <Button label="Đặt khách đoàn" size="sm" typeStyle="color" />
      </div>
    </div>
  )
}
