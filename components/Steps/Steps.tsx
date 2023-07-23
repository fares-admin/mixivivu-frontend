import { CheckIcon } from '../SVGIcon'
import styles from './Steps.module.css'

interface StepItemProps {
  title: string
  description: string
  status: 'incomplete' | 'inprogress' | 'done'
  isMobile?: boolean
}

export const StepItem = ({
  title,
  description,
  status = 'incomplete',
  isMobile = false,
}: StepItemProps) => {
  return (
    <div
      className={[
        styles['step-item'],
        styles[`step-item-${status}`],
        'flex flex-col gap-16 align-center justify-center text-center',
      ].join(' ')}
    >
      <div
        className={[
          styles['step-icon'],
          styles[`step-icon-${status}`],
          isMobile ? styles['step-icon-mobile'] : '',
        ].join(' ')}
      >
        {status === 'done' && <CheckIcon />}
      </div>
      <div className={styles['step-body']}>
        <p className="subheading sm">{title}</p>
        <p className="md">{description}</p>
      </div>
    </div>
  )
}

interface StepsProps {
  steps: StepItemProps[]
  isMobile: boolean
}

export const Steps = ({ steps, isMobile = false }: StepsProps) => {
  return (
    <div className={[isMobile ? styles['steps-mobile'] : '', 'flex gap-16 align-center'].join(' ')}>
      {steps.map((item, index) => (
        <StepItem {...item} key={index} isMobile={isMobile} />
      ))}
    </div>
  )
}
export default Steps
