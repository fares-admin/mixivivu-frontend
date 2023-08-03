/* eslint-disable import/no-extraneous-dependencies */
import {
  Button,
  Card,
  ChevronDownIcon,
  CircleDolarIcon,
  Input,
  MapPinAltIcon,
  SearchIcon,
} from '@/components'
import Link from 'next/link'
import styles from './SearchBox.module.css'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { ProductRes } from '@/types/product'
import { CommonListResultType } from '@/types'
import { useApiCall } from '@/hooks'
import { getEndpoint, productEndpoints } from '@/constants/endpoints'
import { useOutsideClick } from '@/hooks/useClickOutside'
import { useRouter } from 'next/router'
import { CategoryRes } from '@/types/category'
import queryString from 'query-string'

interface IPriceRange {
  label: string
  min?: number
  max?: number
}

const priceRange: IPriceRange[] = [
  {
    label: 'Tất cả mức giá',
  },
  {
    label: 'Từ 1 đến 3 triệu',
    min: 1000000,
    max: 3000000,
  },
  {
    label: 'Từ 3 đến 6 triệu',
    min: 3000000,
    max: 6000000,
  },
  {
    label: 'Trên 6 triệu',
    min: 6000000,
  },
]

interface SearchBoxProps {
  title: string
  description: string
  className?: string
  categories?: CategoryRes[]
}

export const SearchBox = ({ title, description, categories = [], className }: SearchBoxProps) => {
  const [searchResults, setSearchResults] = useState<ProductRes[]>([])
  const [searchKey, setSearchKey] = useState<string>('')
  const [selectedPriceRange, setSelectedPriceRange] = useState<IPriceRange>()
  const [showSuggestion, setShowSuggestion] = useState(false)
  const [showCategory, setShowCategory] = useState(false)
  const [showSelectPrice, setShowSelectPrice] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<CategoryRes | null>()
  const router = useRouter()
  const { setLetCall: fetchSearchResults } = useApiCall<CommonListResultType<ProductRes>, string>({
    callApi: () =>
      axios.get(getEndpoint(productEndpoints, 'getList'), {
        params: {
          size: 5,
          title: searchKey,
        },
      }),
    handleSuccess: (message, data) => {
      if (message) {
        setSearchResults(data.data)
      }
    },
  })
  let timerId: any
  const onSearchInputChange = (e: any) => {
    setSearchKey(e.target.value)
    fetchSearchResults(true)
    if (timerId) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(() => {
      fetchSearchResults(true)
      timerId = 0
    }, 500)
  }
  const ref = useOutsideClick(() => {
    setShowSuggestion(false)
  })
  const categoryRef = useOutsideClick(() => {
    setShowCategory(false)
  })
  const selectPriceRef = useOutsideClick(() => {
    setShowSelectPrice(false)
  })

  const handleSearch = () => {
    router.push({
      pathname: 'tim-du-thuyen',
      query: queryString.stringify({
        title: searchKey || undefined,
        category: selectedCategory?._id || undefined,
        greater_defaultPrice: selectedPriceRange?.min,
        lower_defaultPrice: selectedPriceRange?.max,
      }),
    })
  }
  const getCategory = useCallback(
    (id: string | string[] | undefined) => {
      return categories.find((item) => item._id === id)
    },
    [categories]
  )
  const handleSelectCategory = (category: CategoryRes | null) => {
    setSelectedCategory(category)
    setShowCategory(false)
  }

  const handleSearchInputClick = () => {
    setSearchKey('')
    setShowSuggestion(true)
  }

  const handleSelectPriceRange = (item: IPriceRange) => {
    setSelectedPriceRange(item)
    setShowSelectPrice(false)
  }

  useEffect(() => {
    setSearchKey(router.query.title as string)
  }, [router.query, router.isReady])

  useEffect(() => {
    if (!router.isReady) return
    setSelectedCategory(getCategory(router.query.category))
  }, [getCategory, router.query, router.isReady])

  return (
    <Card
      customClass={[className, styles.searchBox, 'flex flex-col justify-center gap-40'].join(' ')}
    >
      <div className="flex flex-col gap-16 gray-900">
        <h4 className="text-center">{title}</h4>
        <p className="lg text-center">{description}</p>
      </div>
      <div className="flex gap-20">
        <div className={styles.searchInput}>
          <Input
            placeHolder="Nhập tên du thuyền"
            iconSwap={<SearchIcon />}
            onChange={onSearchInputChange}
            value={searchKey}
            onClick={handleSearchInputClick}
          />
          {searchResults.length > 0 && showSuggestion && (
            <div className={styles.dropdown} ref={ref}>
              {searchResults.map((item, index) => (
                <Link href={`du-thuyen/${item.slug}`}>
                  <a>
                    <div className={styles['dropdown-item']} key={index}>
                      {item.title}
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className={styles.selectInput}>
          <Input
            type="button"
            iconSwap={<MapPinAltIcon />}
            supportIcon={<ChevronDownIcon />}
            value={selectedCategory?.name || 'Tất cả địa điểm'}
            onClick={() => setShowCategory(true)}
          />
          {showCategory && categories.length > 0 && (
            <div className={styles.dropdown} ref={categoryRef}>
              <div className={styles['dropdown-item']} onClick={() => handleSelectCategory(null)}>
                Tất cả địa điểm
              </div>
              {categories.map((item, index) => (
                <div
                  className={styles['dropdown-item']}
                  key={index}
                  onClick={() => handleSelectCategory(item)}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={styles.selectInput}>
          <Input
            type="button"
            iconSwap={<CircleDolarIcon />}
            onClick={() => setShowSelectPrice(true)}
            value={selectedPriceRange?.label || 'Tất cả mức giá'}
            supportIcon={<ChevronDownIcon />}
          />
          {showSelectPrice && (
            <div className={styles.dropdown} ref={selectPriceRef}>
              {priceRange.map((item, index) => (
                <div
                  key={index}
                  className={styles['dropdown-item']}
                  onClick={() => handleSelectPriceRange(item)}
                >
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>
        <Button color="color" label="Tìm kiếm" onClick={handleSearch} />
      </div>
    </Card>
  )
}
