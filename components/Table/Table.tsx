import { Alert } from '../Alert'
import { Pagination } from '../Pagination'
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
}

export const Table = <T,>({
  headers,
  data,
  idField = '_id',
  customStyleCell,
  customDataCell,
  paginationProps,
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
