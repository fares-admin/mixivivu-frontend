import { Card } from '@/components'
import { ReactNode, useEffect, useRef, useState } from 'react'
import styles from './Collapse.module.css'

interface CollapseProps {
  isCollapse: boolean
  customClass?: string
  header: ReactNode
  content: ReactNode
}

export const Collapse = ({ isCollapse = true, customClass, header, content }: CollapseProps) => {
  const [height, setHeight] = useState<number | undefined>(isCollapse ? 0 : undefined)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!height || isCollapse || !ref.current) return undefined
    // @ts-ignore
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height)
    })
    resizeObserver.observe(ref.current)
    return () => {
      resizeObserver.disconnect()
    }
  }, [height, isCollapse])

  useEffect(() => {
    if (!isCollapse) setHeight(ref.current?.getBoundingClientRect().height)
    else setHeight(0)
  }, [isCollapse])

  return (
    <Card customClass={customClass}>
      <div className={!isCollapse ? styles['open-header'] : ''}>{header}</div>
      <div
        className={[isCollapse ? styles['collapsed-content'] : '', styles.collapse].join(' ')}
        style={{ height }}
      >
        <div ref={ref}>{content}</div>
      </div>
    </Card>
  )
}
