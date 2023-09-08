import { DOTS, usePagination } from '@/hooks/usePagination'
import { Dispatch, SetStateAction, useState } from 'react'
import styles from './Pagination.module.css'
import { ArrowLeftIcon, ArrowRightIcon } from '../SVGIcon'

interface PaginationProps {
  onPageChange?: (page: number) => void
  totalCount: number
  siblingCount?: number
  currentPage?: number
  pageSize: number
  className?: string
  setPageSize: Dispatch<SetStateAction<number>>
}

export const Pagination = ({
  onPageChange = () => {},
  totalCount,
  siblingCount = 1,
  currentPage = 1,
  pageSize,
  setPageSize = () => {},
  className,
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize: Number(pageSize),
  })

  const [perPage, setPerPage] = useState(pageSize.toString())

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const handlePageChange = (value: string) => {
    if (value && Number(value) >= 1 && Number(value) <= 20) {
      setPageSize(Number(value))
    } else {
      if (Number(value) < 1) {
        setPageSize(1)
        setPerPage('1')
      }
      if (Number(value) > 20) {
        setPageSize(20)
        setPerPage('20')
      }
    }
  }

  const lastPage = paginationRange[paginationRange.length - 1]
  return (
    <div className={['flex justify-between align-center', styles.pagination].join(' ')}>
      <div className={['flex align-center gap-8', styles['left-pagination']].join(' ')}>
        <p className="sm">Đang xem:</p>
        <div>
          <label className={['md', styles['page-size']].join(' ')}>
            <input
              value={perPage}
              onChange={(e) => setPerPage(e.target.value)}
              onBlur={(e) => handlePageChange(e.target.value)}
              max={20}
              min={1}
              type="number"
            />
          </label>
        </div>
        <p className="sm">của {totalCount}</p>
      </div>

      <ul className={[styles['pagination-container'], className].join(' ')}>
        <li
          className={[
            styles['pagination-left-item'],
            styles['pagination-item'],
            currentPage === 1 ? styles.disabled : '',
          ].join(' ')}
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
            styles['pagination-right-item'],
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
