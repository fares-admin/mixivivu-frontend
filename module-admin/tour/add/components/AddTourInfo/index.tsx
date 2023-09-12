/* eslint-disable import/no-extraneous-dependencies */
import { Card, ChevronDownIcon, Input, MapPinAltIcon } from '@/components'
import { Field } from 'formik'
import { useApiCall } from '@/hooks'
import { CommonListResultType } from '@/types'
import axios from 'axios'
import { categoryEndpoints, getEndpoint } from '@/constants/endpoints'
import { CategoryRes } from '@/types/category'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Dropdown } from '@/components/Dropdown'
import { ImageListType } from 'react-images-uploading'
import styles from '../../AddTour.module.scss'
import { useOutsideClick } from '@/hooks/useClickOutside'
import { ImageUpload } from '../ImageUpload'

interface AddTourInfoProps {
  selectedCategory: CategoryRes
  setSelectedCategory: Dispatch<SetStateAction<CategoryRes>>
  tourImages: ImageListType
  setTourImages: Dispatch<SetStateAction<ImageListType>>
}
export const AddTourInfo = ({
  selectedCategory,
  setSelectedCategory,
  tourImages,
  setTourImages,
}: AddTourInfoProps) => {
  const [categories, setCategories] = useState<CategoryRes[]>([])
  const [showCategory, setShowCategory] = useState(false)
  const { setLetCall: fetchCategories } = useApiCall<CommonListResultType<CategoryRes>, string>({
    callApi: () => axios.get(getEndpoint(categoryEndpoints, 'getList')),
    handleSuccess: (message, data) => {
      if (message && data?.data) {
        setCategories(data.data)
        setSelectedCategory(data.data[0])
      }
    },
  })

  useEffect(() => {
    fetchCategories(true)
  }, [fetchCategories])

  const handleSelectCategory = (category: CategoryRes | null) => {
    setSelectedCategory(category)
    setShowCategory(false)
  }
  const onChange = (imageList: ImageListType) => {
    // data for submit
    setTourImages(imageList as never[])
  }
  const categoryRef = useOutsideClick(() => {
    setShowCategory(false)
  })

  return (
    <Card>
      <div className={styles['card-header']}>
        <div className="subheading md">Thông tin tour</div>
      </div>
      <div className={styles['card-content']}>
        <div className="flex flex-col gap-16">
          <div className="grid grid-cols-2 gap-16">
            <Field name="title">
              {({ field, meta }: any) => (
                <div>
                  <Input {...field} label="Tên tour" placeHolder="Nhập tên tour" required />
                  {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                </div>
              )}
            </Field>
            <Field name="slug">
              {({ field, meta }: any) => (
                <div>
                  <Input {...field} label="Slug" placeHolder="Slug" required />
                  {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                </div>
              )}
            </Field>
            <Field name="defaultPrice">
              {({ field, meta }: any) => (
                <div>
                  <Input {...field} label="Giá tour" placeHolder="Nhập giá tour" required />
                  {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                </div>
              )}
            </Field>
            <Field name="schedule">
              {({ field, meta }: any) => (
                <div>
                  <Input {...field} label="Lịch trình" placeHolder="Nhập lịch trình" required />
                  {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                </div>
              )}
            </Field>
            <Field name="address">
              {({ field, meta }: any) => (
                <div>
                  <Input {...field} label="Địa chỉ" placeHolder="Nhập địa chỉ" required />
                  {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                </div>
              )}
            </Field>

            <div className="relative">
              <Input
                type="button"
                iconSwap={<MapPinAltIcon />}
                supportIcon={<ChevronDownIcon />}
                value={selectedCategory?.name}
                onClick={() => setShowCategory(true)}
              />
              {showCategory && (
                <Dropdown ref={categoryRef}>
                  <div>
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
                </Dropdown>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles['card-footer']}>
        <div className="flex flex-col gap-24">
          <label className="lg">Ảnh chi tiết tour</label>
          <ImageUpload value={tourImages} onChange={(value) => onChange(value)} />
        </div>
      </div>
    </Card>
  )
}
