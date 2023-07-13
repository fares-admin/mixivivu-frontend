import Image from 'next/image'
import styles from './ReviewQuote.module.css'

interface ReviewQuoteProps {
  title: string
  description: string
  time: string
  name: string
}

export const ReviewQuote = ({ title, description, name, time }: ReviewQuoteProps) => {
  return (
    <div className={styles.reviewQuote}>
      <div className={styles.quoteIcon}>
        <Image src="/quote.svg" width={30} height={22} alt="quote" />
      </div>
      <div className={styles.quoteBody}>
        <div className={styles.quoteContent}>
          <p className="subheading lg">{title}</p>
          <p className="lg">{description}</p>
        </div>
        <p className="detail-md upper-case ">
          {name} - {time}
        </p>
      </div>
    </div>
  )
}
