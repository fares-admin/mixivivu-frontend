interface XMarkIconProps {
  fillColor?: string
  strokeColor?: string
  width?: string
  height?: string
}

export const XMarkIcon = ({ fillColor, strokeColor, width, height }: XMarkIconProps) => {
  return (
    <svg
      width={width || '12'}
      height={height || '12'}
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
