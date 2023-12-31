import { useMemo } from 'react'

const range = (start: number, stop: number) =>
  Array.from({ length: stop - start + 1 }, (_, index) => start + index)

export const DOTS = '...'

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 0,
  currentPage,
}: {
  totalCount: number
  pageSize: number
  siblingCount: number
  currentPage: number
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize)

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5

    /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }

    /*
    	Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    */
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount)

    /*
      We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    */
    const shouldShowLeftDots = leftSiblingIndex > 1
    const shouldShowRightDots = rightSiblingIndex < totalPageCount

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    /*
    	Case 2: No left dots to show, but rights dots to be shown
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3
      const leftRange = range(1, leftItemCount)
      const rightRange = range(totalPageCount - leftItemCount + 1, totalPageCount)
      return [...leftRange, DOTS, ...rightRange]
    }

    /*
    	Case 3: No right dots to show, but left dots to be shown
    */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3
      const rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount)
      const leftRange = range(1, 3)
      return [...leftRange, DOTS, ...rightRange]
    }

    /*
    	Case 4: Both left and right dots to be shown
    */
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex)
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }
    // default
    return range(1, totalPageCount)
  }, [totalCount, pageSize, siblingCount, currentPage])

  return paginationRange
}
