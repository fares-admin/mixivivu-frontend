interface ChevronRightIconProps {
  fillColor?: string
  strokeColor?: string
}

export const ChevronRightIcon = ({ fillColor, strokeColor }: ChevronRightIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fillColor || 'none'}
    >
      <path
        d="M9 6L15 12L9 18"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
