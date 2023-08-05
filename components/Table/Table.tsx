import { Dispatch, ReactNode, SetStateAction } from 'react'
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
    pageSize: number
    className?: string
    setPageSize: Dispatch<SetStateAction<number>>
  }
  loading?: boolean
  actions?: {
    func: (item: T) => void
    icon: ReactNode
  }[]
}

export const Table = <T,>({
  headers,
  data,
  idField = '_id',
  customStyleCell,
  customDataCell,
  paginationProps,
  loading,
  actions,
}: TableProps<T>) => {
  return (
    <table className={styles.container}>
      <thead>
        <tr>
          {actions &&
            actions.length > 0 &&
            actions.map((item) => (
              <th className={styles.th} key={item.toString()}>
                {null}
              </th>
            ))}
          {headers.map((item) => (
            <th className={styles.th} key={item.key}>
              {item.label}
            </th>
          ))}
        </tr>
      </thead>
      {loading ? (
        <tbody>
          <tr>
            {[
              ...Array.from(
                Array(headers.length + (actions && actions?.length ? actions.length : 0)).keys()
              ),
            ].map((item) => (
              <td
                className={[styles.td].join(' ')}
                key={`${item[idField as keyof typeof item]}${item}`}
              >
                <Skeleton width="100%" height={32} />
              </td>
            ))}
          </tr>
        </tbody>
      ) : (
        <tbody>
          {data.map((item) => (
            <tr key={String(item[idField as keyof typeof item])}>
              {actions &&
                actions.length > 0 &&
                actions.map((thisAction) => (
                  <td className={styles.td} key={thisAction.toString()}>
                    <div onClick={() => thisAction.func(item)}>{thisAction.icon}</div>
                  </td>
                ))}
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
