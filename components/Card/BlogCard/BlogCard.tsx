import Image from 'next/image'
import { Card } from '../Card'
import styles from './BlogCard.module.css'

interface BlogCardProps {
  url: string
  title: string
  description: string
  date: string
}

export const BlogCard = ({ url, title, description, date }: BlogCardProps) => {
  return (
    <Card customClass={styles.blogCard}>
      <div className={styles.imageWrapper}>
        <Image src={url} width={352} height={216} />
      </div>
      <div className={styles.body}>
        <p className="subheading md">{title}</p>
        <p className={[styles.description, 'sm'].join(' ')}>{description}</p>
      </div>
      <p className={[styles.footer, 'detail sm'].join(' ')}>{date}</p>
    </Card>
  )
}
