interface CirCleQuyestionIconProps {
  fillColor?: string
}

export const CirCleQuyestionIcon = ({ fillColor }: CirCleQuyestionIconProps) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.54167 6.33482C6.65913 6.00091 6.89098 5.71934 7.19616 5.53998C7.50133 5.36063 7.86013 5.29507 8.20901 5.35491C8.55789 5.41475 8.87434 5.59614 9.1023 5.86694C9.33026 6.13774 9.45502 6.48048 9.45449 6.83445C9.45449 7.83371 7.95561 8.33333 7.95561 8.33333M7.97396 10.3333H7.98063M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
        stroke={fillColor}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
