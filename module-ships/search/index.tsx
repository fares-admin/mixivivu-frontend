/* eslint-disable import/no-extraneous-dependencies */
import {
  SearchBox,
  Pagination,
  ProductCard,
  ProductLoadingCard,
  NotFound,
  Collapse,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@/components'
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
import { Media, MediaContextProvider } from '@/media-query'

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
  const [openFilter, setOpenFilter] = useState(false)
  const [openSearchBox, setOpenSearchBox] = useState(false)
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

  const renderShipList = (type) => {
    return (
      <div>
        {loading ? (
          <>
            {Array.from({ length: 5 }, (_, i) => (
              <ProductLoadingCard type={type} key={i} />
            ))}
          </>
        ) : (
          <>
            {shipList?.length > 0 ? (
              <>
                <div className={[styles['ship-list'], 'flex flex-col gap-32'].join(' ')}>
                  {shipList.map((item, index) => (
                    <Link href={`/du-thuyen/${item.slug}`}>
                      <a>
                        <ProductCard
                          type={type}
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
                </div>
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
    )
  }
  return (
    <div className="section-bg ">
      <div className={[styles['search-page'], 'flex flex-col gap-80 container'].join(' ')}>
        <MediaContextProvider>
          <Media lessThan="md">
            <Collapse
              customClass={styles.collapse}
              customHeaderClass={styles['custom-header']}
              header={
                <div
                  className={styles['collapse-header']}
                  onClick={() => setOpenSearchBox(!openSearchBox)}
                >
                  <div className="subheading sm flex-grow" style={{ color: 'var(--gray-800)' }}>
                    Tìm kiếm
                  </div>
                  {openSearchBox ? (
                    <ChevronUpIcon strokeColor="#98A2B3" />
                  ) : (
                    <ChevronDownIcon strokeColor="#98A2B3" />
                  )}
                </div>
              }
              isCollapse={!openSearchBox}
              content={
                <SearchBox
                  className={styles['search-box-mb']}
                  title="Bạn lựa chọn du thuyền Hạ Long nào?"
                  description="Hơn 100 tour du thuyền hạng sang giá tốt đang chờ bạn"
                  categories={categories}
                />
              }
            />
          </Media>
          <Media greaterThan="mdless">
            <SearchBox
              className={styles['search-box']}
              title="Bạn lựa chọn du thuyền Hạ Long nào?"
              description="Hơn 100 tour du thuyền hạng sang giá tốt đang chờ bạn"
              categories={categories}
            />
          </Media>
        </MediaContextProvider>

        <div>
          <Header
            totalShips={totalShips}
            filter={filter}
            setFilter={setFilter}
            setOpenFilter={setOpenFilter}
          />
          <MediaContextProvider>
            <Media lessThan="md">
              <div className={`flex gap-32 ${loading ? 'pointer-none' : ''}`}>
                {renderShipList('grid')}
              </div>
              {openFilter && (
                <Sidebar
                  filter={filter}
                  setFilter={setFilter}
                  features={features}
                  setOpenFilter={setOpenFilter}
                  isMobile
                />
              )}
            </Media>
            <Media greaterThan="mdless">
              <div className={`flex gap-32 ${loading ? 'pointer-none' : ''}`}>
                <Sidebar filter={filter} setFilter={setFilter} features={features} />
                {renderShipList('list')}
              </div>
            </Media>
          </MediaContextProvider>
        </div>
      </div>
    </div>
  )
}

export default SearchPageDetail
