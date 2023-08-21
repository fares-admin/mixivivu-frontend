/* eslint-disable import/no-extraneous-dependencies */
import { SearchBox, Pagination, ProductCard, ProductLoadingCard, NotFound } from '@/components'
import { NextPageWithLayout } from '@/pages/_app'
import { useCallback, useEffect, useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { useApiCall } from '@/hooks'
import { ProductRes } from '@/types/product'
import { CommonListResultType } from '@/types'
import axios from 'axios'
import {
  categoryEndpoints,
  getEndpoint,
  productEndpoints,
  featureEndpoints,
} from '@/constants/endpoints'
import { useRouter } from 'next/router'
import { CategoryRes } from '@/types/category'
import qs from 'qs'
import styles from './SearchPageDetail.module.scss'
import { Header } from './components/Header'
import Link from 'next/link'
import { FeatureRes } from '@/types/feature'

export interface IFilter {
  features: string[]
  scoreReview: number[]
  sort_defaultPrice: string | undefined
}

const SearchPageDetail: NextPageWithLayout = () => {
  const [shipList, setShipList] = useState<ProductRes[]>([])
  const [categories, setCategories] = useState<CategoryRes[]>([])
  const [pageSize, setPageSize] = useState(5)
  const [totalShips, setTotalShips] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [features, setFeatures] = useState<FeatureRes[]>([])
  const [filter, setFilter] = useState<IFilter>({
    features: [],
    scoreReview: [],
    sort_defaultPrice: undefined,
  })
  const router = useRouter()
  const { setLetCall: fetchCategories } = useApiCall<CommonListResultType<CategoryRes>, string>({
    callApi: () => axios.get(getEndpoint(categoryEndpoints, 'getList')),
    handleSuccess: (message, data) => {
      if (message) {
        setCategories(data.data)
      }
    },
  })

  const { setLetCall: fetchShipList, loading } = useApiCall<
    CommonListResultType<ProductRes>,
    string
  >({
    callApi: () =>
      axios.get(getEndpoint(productEndpoints, 'getList'), {
        params: {
          size: pageSize,
          page: currentPage,
          ...router.query,
          ...filter,
        },
        paramsSerializer: (params) => {
          return qs.stringify(params, { arrayFormat: 'comma' })
        },
      }),
    handleSuccess: (message, data) => {
      if (message) {
        setShipList(data.data)
        setTotalShips(data.total)
      }
    },
  })
  const { setLetCall: fetchFeatures } = useApiCall<CommonListResultType<FeatureRes>, string>({
    callApi: () => axios.get(getEndpoint(featureEndpoints, 'getList')),
    handleSuccess: (message, data) => {
      if (message) {
        setFeatures(data.data)
      }
    },
  })

  useEffect(() => {
    fetchFeatures(true)
  }, [fetchFeatures])

  useEffect(() => {
    fetchCategories(true)
  }, [fetchCategories])

  useEffect(() => {
    fetchShipList(true)
  }, [fetchShipList, pageSize, currentPage, router, filter])

  useEffect(() => {
    if (totalShips < pageSize) setCurrentPage(1)
  }, [totalShips, pageSize])

  const getCategory = useCallback(
    (id: string | string[] | undefined) => {
      return categories.find((item) => item._id === id)?.name || ''
    },
    [categories]
  )
  return (
    <div className="section-bg ">
      <div className={[styles['search-page'], 'flex flex-col gap-80 container'].join(' ')}>
        <SearchBox
          className={styles['search-box']}
          title="Bạn lựa chọn du thuyền Hạ Long nào?"
          description="Hơn 100 tour du thuyền hạng sang giá tốt đang chờ bạn"
          categories={categories}
        />
        <Header totalShips={totalShips} filter={filter} setFilter={setFilter} />
        <div className={`flex gap-32 ${loading ? 'pointer-none' : ''}`}>
          <Sidebar filter={filter} setFilter={setFilter} features={features} />
          <div className={[styles['ship-list'], 'flex flex-col gap-32'].join(' ')}>
            {loading ? (
              <>
                {Array.from({ length: 5 }, (_, i) => (
                  <ProductLoadingCard type="list" key={i} />
                ))}
              </>
            ) : (
              <>
                {shipList.length > 0 ? (
                  <>
                    {shipList.map((item, index) => (
                      <Link href={`/du-thuyen/${item.slug}`}>
                        <a>
                          <ProductCard
                            type="list"
                            url={item.thumbnail}
                            tags={features
                              .filter((feature) => item.features.includes(feature._id))
                              .map((item) => item.text)}
                            title={item.title}
                            desciption={`Hạ thuỷ ${item.spec.ship?.launch} - Tàu vỏ ${item.spec.ship?.shell} - ${item.spec.ship?.cabin} phòng`}
                            location={getCategory(item.category)}
                            originalPrice={item.defaultPrice}
                            rating={item.scoreReview}
                            ratingCount={item.numReviews}
                            key={index}
                          />
                        </a>
                      </Link>
                    ))}
                    <Pagination
                      totalCount={totalShips}
                      pageSize={pageSize}
                      setPageSize={setPageSize}
                      onPageChange={setCurrentPage}
                      currentPage={currentPage}
                    />
                  </>
                ) : (
                  <NotFound />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchPageDetail
