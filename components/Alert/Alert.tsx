import {
  AlertTriangleIcon,
  CheckCircleIcon,
  CirCleExclaimationIcon,
  InfoIcon,
  XMarkIcon,
} from '@/components'
import styles from './Alert.module.css'

interface AlertProps {
  color: 'success' | 'gray' | 'error' | 'warning' | 'primary'
  isMobile: boolean
  title: string
  content: string
  onClick: () => void
}

const iconMaps = {
  primary: <InfoIcon />,
  gray: <InfoIcon />,
  error: <CirCleExclaimationIcon />,
  warning: <AlertTriangleIcon />,
  success: <CheckCircleIcon />,
}

export const Alert = ({ color, title, content, isMobile = false, onClick }: AlertProps) => {
  return (
    <div
      className={[styles.alert, styles[`alert-${color}`], isMobile ? styles.mobileAlert : ''].join(
        ' '
      )}
    >
      <div className={styles.alert__clostBtn} onClick={onClick}>
        <XMarkIcon />
      </div>
      <div>{iconMaps[color]}</div>
      <div>
        <label className="sm">{title}</label>
        <p className="sm">{content}</p>
      </div>
    </div>
  )
}