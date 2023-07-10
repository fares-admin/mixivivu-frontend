import { MinusIcon, PlusIcon } from '@/components/SVGIcon'
import { useState } from 'react'
import { Card } from '../Card'
import styles from './QuestionCard.module.css'

interface QuestionCardProps {
  question: string
  answer: string
}

export const QuestionCard = ({ question, answer }: QuestionCardProps) => {
  const [open, setOpen] = useState(false)
  return (
    <div onClick={() => setOpen(!open)}>
      <Card customClass={styles.questionCard}>
        <div className={styles.icon}>{open ? <PlusIcon /> : <MinusIcon />}</div>
        <p className="subheading sm">{question}</p>
        {open && <p className={[styles.answer, 'sm'].join(' ')}>{answer}</p>}
      </Card>
    </div>
  )
}
