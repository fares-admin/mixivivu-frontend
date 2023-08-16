import { Button, Card } from '@/components'
import Image from 'next/image'
import { ReactNode } from 'react'
import styles from './CommentCard.module.css'

interface CommentItemProps {
  url: string
  name: string
  comment: string
  date: string
  isReply?: boolean
  children?: ReactNode
}

export const CommentItem = ({
  url,
  name,
  comment,
  date,
  isReply = false,
  children,
}: CommentItemProps) => {
  return (
    <Card customClass={[styles.commentCard, isReply ? styles.replyCard : ''].join(' ')}>
      <div>
        <Image src={url} width={40} height={40} className={styles.avatar} />
      </div>
      <div className={styles.cardContent}>
        <p>{name}</p>
        <p>{comment}</p>
        <div className={styles.action}>
          {!isReply && <Button typeStyle="link-color" label="Trả lời" size="sm" />}
          <Button typeStyle="link-color" label="Thích" size="sm" />
          <p className="sm">{date}</p>
        </div>
        {children}
      </div>
    </Card>
  )
}

interface CommentCardProps {
  comment: CommentItemProps
  replies?: CommentItemProps[]
}

export const CommentCard = ({ comment, replies }: CommentCardProps) => {
  return (
    <Card>
      <CommentItem {...comment}>
        {replies && (
          <div>
            {replies.map((item, index) => (
              <CommentItem {...item} key={index} isReply />
            ))}
          </div>
        )}
      </CommentItem>
    </Card>
  )
}
