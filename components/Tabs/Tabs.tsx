import React, { useState } from 'react'
import styles from './Tabs.module.css'
import { ChevronDownIcon } from '../SVGIcon'

interface TabItemProps {
  id?: string
  size?: 'sm' | 'md'
  label: string
  badge?: number
  isActive?: boolean
  fullWidth?: boolean
  onClick?: () => void
}
export const TabItem = ({
  id,
  size = 'sm',
  label,
  badge,
  fullWidth,
  onClick,
  isActive,
}: TabItemProps) => {
  return (
    <button
      key={id}
      onClick={onClick}
      type="button"
      className={[
        styles.tabItem,
        styles[size],
        isActive ? styles.active : '',
        fullWidth ? styles['full-w'] : '',
      ].join(' ')}
    >
      <label>{label}</label>
      {badge && (
        <div className={styles.tabItem__badge}>
          <label className="xs">{badge}</label>
        </div>
      )}
    </button>
  )
}

interface TabsProps {
  tabs: TabItemProps[]
  size?: 'sm' | 'md'
  isMobile?: boolean
  activeKey?: string
  onChange?: (key: string) => void
}

export const Tabs = ({
  tabs = [],
  size = 'sm',
  isMobile = false,
  activeKey,
  onChange = () => {},
}: TabsProps) => {
  const [selected, setSelected] = useState(tabs[0])
  const [showDropdown, setShowDropdown] = useState(false)
  const handleSelect = (item: TabItemProps) => {
    setSelected(item)
    setShowDropdown(false)
  }
  return (
    <div className={styles.tabs}>
      {isMobile ? (
        <div className={styles.tabMobile}>
          <div onClick={() => setShowDropdown(!showDropdown)} className={styles.tabMobile__header}>
            <p>{selected.label}</p>
            <ChevronDownIcon />
          </div>
          {showDropdown && (
            <div>
              {tabs.map((item, index) => (
                <div key={index} onClick={() => handleSelect(item)}>
                  <TabItem fullWidth {...item} size={size} />
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className={styles.tabs__header}>
          {tabs.map((item, index) => (
            <div key={index}>
              <TabItem
                {...item}
                size={size}
                isActive={item.id === activeKey}
                onClick={() => onChange(item.id as string)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
