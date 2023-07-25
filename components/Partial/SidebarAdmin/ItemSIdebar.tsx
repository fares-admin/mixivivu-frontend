import { ChevronDownIcon, ChevronUpIcon } from '@/components/SVGIcon'

import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import styles from './SidebarAdmin.module.css'

export const ItemSidebar = ({
  item,
  open,
  setOpen,
}: {
  item: {
    icon: ReactNode
    text: string
    link: string
    children: {
      text: string
      link: string
    }[]
  }
  open: string
  setOpen: (value: string) => void
}) => {
  const router = useRouter()
  const { children, link, icon, text } = item

  return (
    <>
      <div
        onClick={() => {
          if (children.length === 0) {
            router.push(link)
          }
          if (open === link) {
            setOpen('')
          } else setOpen(link)
        }}
        key={link}
        className={styles.itemSidebar}
      >
        <div className={styles.iconSidebar}>{icon}</div>
        <div className={styles.contentSidebar}>{text}</div>
        <div className={styles.iconSidebar}>
          {children.length > 0 && (
            <>
              {link === open ? (
                <ChevronDownIcon strokeColor="#344054" />
              ) : (
                <ChevronUpIcon strokeColor="#344054" />
              )}
            </>
          )}
        </div>
      </div>
      <div
        className={[styles.childMenuStyle, link === open ? styles.childMenuStyleOpen : ''].join(
          ' '
        )}
      >
        {children.map((childItem) => (
          <div
            className={styles.itemChild}
            onClick={() => {
              router.push(childItem.link)
            }}
            key={childItem.link}
          >
            <div className={styles.iconSidebar} />
            <div className={styles.contentSidebar}>{childItem.text}</div>
            <div className={styles.iconSidebar} />
          </div>
        ))}
      </div>
    </>
  )
}
