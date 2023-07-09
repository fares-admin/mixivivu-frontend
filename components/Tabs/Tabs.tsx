import React, { useState } from 'react'
import styles from './Tabs.module.css'
import { ChevronDownIcon } from '../SVGIcon'

interface TabItemProps {
  size: 'sm' | 'md'
  label: String
  badge?: number
  fullWidth?: boolean
}
export const TabItem = ({ size, label, badge, fullWidth }: TabItemProps) => {
  return (
    <button
      type="button"
      className={[styles.tabItem, styles[size], fullWidth ? styles['full-w'] : ''].join(' ')}
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

interface TabProps {
  label: String
  badge?: number
}

interface TabsProps {
  tabs: TabProps[]
  size: 'sm' | 'md'
  isMobile?: boolean
}

export const Tabs = ({ tabs = [], size, isMobile = false }: TabsProps) => {
  const [selected, setSelected] = useState(tabs[0])
  const [showDropdown, setShowDropdown] = useState(false)
  const handleSelect = (item: TabProps) => {
    setSelected(item)
    setShowDropdown(false)
  }
  return (
    <div className={styles.tabs}>
      {isMobile ? (
        <div>
          <div onClick={() => setShowDropdown(!showDropdown)} className={styles.tabMobile__header}>
            <p>{selected.label}</p>
            <ChevronDownIcon />
          </div>
          {showDropdown && (
            <div>
              {tabs.map((item, index) => (
                <div key={index} onClick={() => handleSelect(item)}>
                  <TabItem fullWidth label={item.label} badge={item.badge} size={size} />
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className={styles.tabs__header}>
          {tabs.map((item, index) => (
            <div key={index}>
              <TabItem label={item.label} badge={item.badge} size={size} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
