import { Select } from '@/components'

export const GenderDropDown = ({
  onChangeValue,
  thisValue,
  labelMale = 'Nam',
  labelFemale = 'Nữ',
}: {
  thisValue?: boolean
  onChangeValue: (value: boolean) => void
  labelMale?: string
  labelFemale?: string
}) => {
  const handleSetGender = (value: boolean) => {
    onChangeValue(value)
  }
  return (
    <Select
      options={[labelMale, labelFemale]}
      selectedValue={thisValue ? labelMale : labelFemale}
      onChange={(value) => handleSetGender(value === labelMale)}
    />
    // <div className={styles.selectInput}>
    //   <Button
    //     fullWidth
    //     customClass={styles['dropdown-btn']}
    //     label={thisValue ? labelMale : labelFemale}
    //     typeStyle="outline"
    //     iconTrailing={<ChevronDownIcon />}
    //     onClick={() => setShowGe(true)}
    //   />
    //   {showGe && (
    //     <div className={`${styles.dropdown}`} ref={showGeRef}>
    //       <Button
    //         typeStyle="outline"
    //         onClick={() => handleSetGender(true)}
    //         label={labelMale}
    //         fullWidth
    //       />
    //       <Button
    //         typeStyle="outline"
    //         onClick={() => handleSetGender(false)}
    //         label={labelFemale}
    //         fullWidth
    //       />
    //     </div>
    //   )}
    // </div>
  )
}
