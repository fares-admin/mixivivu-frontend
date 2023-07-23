import { DOTS, usePagination } from '@/hooks/usePagination'
import styles from './Pagination.module.css'
import { ArrowLeftIcon, ArrowRightIcon } from '../SVGIcon'

interface PaginationProps {
  onPageChange?: (page: number) => void
  totalCount: number
  siblingCount?: number
  currentPage?: number
  pageSize: number
  className?: string
}

export const Pagination = ({
  onPageChange = () => {},
  totalCount,
  siblingCount = 1,
  currentPage = 1,
  pageSize,
  className,
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })
  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const lastPage = paginationRange[paginationRange.length - 1]
  return (
    <div className={['flex justify-between align-center', styles.pagination].join(' ')}>
      <div className="flex align-center gap-8">
        <p className="sm">Đang xem:</p>
        <div>
          <label className={['md', styles['page-size']].join(' ')}>{pageSize}</label>
        </div>
        <p className="sm">của {totalCount}</p>
      </div>
      <ul className={[styles['pagination-container'], className].join(' ')}>
        <li
          className={[styles['pagination-item'], currentPage === 1 ? styles.disabled : ''].join(
            ' '
          )}
          onClick={onPrevious}
        >
          <ArrowLeftIcon width="20" height="20" strokeColor="var(--gray-700)" />
          <label className="sm">Trước</label>
        </li>
        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return <li className={[styles['pagination-item'], styles.dots].join(' ')}>&#8230;</li>
          }

          return (
            <li
              className={[
                styles['pagination-item'],
                pageNumber === currentPage ? styles.selected : '',
              ].join(' ')}
              onClick={() => onPageChange(pageNumber as number)}
            >
              {pageNumber}
            </li>
          )
        })}
        <li
          className={[
            styles['pagination-item'],
            currentPage === lastPage ? styles.disabled : '',
          ].join(' ')}
          onClick={onNext}
        >
          <label className="sm">Tiếp</label>
          <ArrowRightIcon width="20" height="20" strokeColor="var(--gray-700)" />
        </li>
      </ul>
    </div>
  )
}
