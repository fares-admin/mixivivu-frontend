import {
  Button,
  HeaderAdmin,
  Input,
  NotFound,
  Pagination,
  PlusIcon,
  ProductCard,
  ProductLoadingCard,
  SearchIcon,
  TabItemProps,
  Tabs,
} from '@/components'
import styles from './Tour.module.scss'
import { useEffect, useState } from 'react'
import { ProductRes } from '@/types/product'
import axios from 'axios'
import { CommonListResultType } from '@/types'
import { useApiCall } from '@/hooks'
import { getEndpoint, productEndpoints } from '@/constants/endpoints'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Routes } from '@/constants/routes'

const tabs: TabItemProps[] = [
  {
    id: 1,
    label: 'Tất cả',
  },
  {
    id: 2,
    label: 'Đã đăng',
  },
  {
    id: 3,
    label: 'Nháp',
  },
]

export const Tour = () => {
  const [shipList, setShipList] = useState<ProductRes[]>([])
  const [pageSize, setPageSize] = useState(6)
  const [total, setTotal] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const router = useRouter()
  const { setLetCall: fetchShipList, loading } = useApiCall<
    CommonListResultType<ProductRes>,
    string
  >({
    callApi: () =>
      axios.get(getEndpoint(productEndpoints, 'getList'), {
        params: {
          size: pageSize,
          page: currentPage,
        },
      }),
    handleSuccess: (message, data) => {
      if (message) {
        setShipList(data.data)
        setTotal(data.total)
      }
    },
  })

  useEffect(() => {
    fetchShipList(true)
  }, [fetchShipList, pageSize, currentPage])

  const onClickCreateTour = () => router.push(Routes.admin.addTour)

  return (
    <div className={styles.wrapper}>
      <HeaderAdmin
        label="Review"
        trailButton={
          <Button
            iconLeading={<PlusIcon />}
            label="Tạo tour"
            size="sm"
            onClick={onClickCreateTour}
          />
        }
      />
      <div className={styles.container}>
        <div className="flex flex-col gap-20">
          <div className="flex gap-16 align-center">
            <div className="flex flex-col gap-4 flex-grow">
              <div className="subheading md">Tất cả các tour</div>
              <p className="sm">{total} tour du thuyền Hạ Long đang có mặt tại Mixivivu</p>
            </div>
            <Input
              iconSwap={<SearchIcon />}
              placeHolder="Tìm kiếm"
              customClass={styles['search-input']}
            />
          </div>
          <Tabs tabs={tabs} size="sm" activeKey={1} />
        </div>
        <div className="flex gap-32 flex-wrap">
          {loading ? (
            <>
              {[1, 2, 3].map((item) => (
                <ProductLoadingCard type="grid" key={item} />
              ))}
            </>
          ) : (
            <>
              {shipList?.length > 0 ? (
                <>
                  {shipList?.map((item, index) => (
                    <Link href={`/admin/du-thuyen/cap-nhat-tour/${item.slug}`} key={index}>
                      <a>
                        <ProductCard
                          type="grid"
                          title={item.title}
                          desciption={`Hạ thuỷ ${item.spec.ship?.launch} - Tàu vỏ ${item.spec.ship?.shell} - ${item.spec.ship?.cabin} phòng`}
                          location="Vịnh Hạ Long"
                          originalPrice={item.defaultPrice}
                          rating={item.scoreReview}
                          ratingCount={item.numReviews}
                          key={index}
                          url={item.thumbnail}
                          tags={[]}
                          isAdmin
                        />
                      </a>
                    </Link>
                  ))}
                </>
              ) : (
                <NotFound />
              )}
            </>
          )}
        </div>
        <Pagination
          totalCount={total}
          pageSize={pageSize}
          setPageSize={setPageSize}
          onPageChange={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  )
}
