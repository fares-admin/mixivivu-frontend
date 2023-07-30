import { Alert } from '../Alert'
import { Pagination } from '../Pagination'
import { Skeleton } from '../Skeleton'
import styles from './Table.module.css'

interface TableProps<T> {
  headers: { key: string; label: string; isSort?: boolean; sortFunc?: () => void }[]
  data: T[]
  idField?: string
  customStyleCell?: Partial<Record<keyof T, string>>
  customDataCell?: Partial<Record<keyof T, (value: any) => React.ReactNode>>
  paginationProps: {
    totalCount: number
    siblingCount?: number
    currentPage?: number
    pageSize: string
    className?: string
    setPageSize: (pageSize: string) => void
  }
  loading?: boolean
}

export const Table = <T,>({
  headers,
  data,
  idField = '_id',
  customStyleCell,
  customDataCell,
  paginationProps,
  loading,
}: TableProps<T>) => {
  return (
    <table className={styles.container}>
      <thead>
        <tr>
          {headers.map((item) => (
            <th className={styles.th} key={item.key}>
              {item.label}
            </th>
          ))}
        </tr>
      </thead>
      {loading ? (
        <>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <tr key={item}>
              {headers.map((keyHead) => (
                <td
                  className={[styles.td].join(' ')}
                  key={`${item[idField as keyof typeof item]}${keyHead.key}`}
                >
                  <Skeleton width="100%" height={32} />
                </td>
              ))}
            </tr>
          ))}
        </>
      ) : (
        <tbody>
          {data.map((item) => (
            <tr key={String(item[idField as keyof typeof item])}>
              {headers.map((keyHead) => (
                <td
                  className={[
                    styles.td,
                    customStyleCell && customStyleCell[keyHead.key as keyof typeof customDataCell]
                      ? customStyleCell[keyHead.key as keyof typeof customDataCell]
                      : '',
                  ].join(' ')}
                  key={`${item[idField as keyof typeof item]}${keyHead.key}`}
                >
                  {String(item[keyHead.key as unknown as keyof typeof item]) !== 'undefined' ? (
                    <>
                      {customDataCell &&
                      customDataCell[keyHead.key as unknown as keyof typeof customDataCell]
                        ? customDataCell[keyHead.key as unknown as keyof typeof customDataCell]!(
                            item[keyHead.key as unknown as keyof typeof item]
                          )
                        : item[keyHead.key as unknown as keyof typeof item]}
                    </>
                  ) : (
                    <Alert
                      color="error"
                      title={`Not found '${keyHead.key}'`}
                      content={`Not found '${keyHead.key}' in object data`}
                    />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      )}
      <tfoot>
        <tr>
          <td colSpan={headers.length}>
            <Pagination {...paginationProps} />
          </td>
        </tr>
      </tfoot>
    </table>
  )
}
