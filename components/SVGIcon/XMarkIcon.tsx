interface XMarkIconProps {
  fillColor?: string
  strokeColor?: string
}

export const XMarkIcon = ({ fillColor, strokeColor }: XMarkIconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3L9 9M9 3L3 9"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
