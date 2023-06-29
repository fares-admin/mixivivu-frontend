interface ArrowUpIconProps {
  fillColor?: string
  strokeColor?: string
}

export const ArrowUpIcon = ({ fillColor, strokeColor }: ArrowUpIconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 2.5V9.5M6 2.5L3 5.5M6 2.5L9 5.5"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
