import { useState } from 'react'
import { ChevronDownIcon, Dropdown, Input } from '@/components'
import styles from './Select.module.css'
import { useOutsideClick } from '@/hooks/useClickOutside'

interface SelectProps {
  options: any[]
  selectedValue: string
  onChange: (item: any) => void
}
export const Select = ({ options, selectedValue, onChange }: SelectProps) => {
  const [showSelect, setShowSelect] = useState(false)
  const handleClick = (value) => {
    setShowSelect(false)
    onChange(value)
  }
  const categoryRef = useOutsideClick(() => {
    setShowSelect(false)
  })
  return (
    <div className="relative">
      <Input
        type="button"
        supportIcon={<ChevronDownIcon />}
        value={selectedValue}
        onClick={() => setShowSelect(true)}
      />
      {showSelect && (
        <Dropdown ref={categoryRef} customClass={styles.dropdown}>
          <>
            {options.map((item, index) => (
              <div
                className={styles['dropdown-item']}
                key={index}
                onClick={() => handleClick(item)}
              >
                {item}
              </div>
            ))}
          </>
        </Dropdown>
      )}
    </div>
  )
}
