interface ChevronLeftIconProps {
  fillColor?: string
  strokeColor?: string
}

export const ChevronLeftIcon = ({ fillColor, strokeColor }: ChevronLeftIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fillColor || 'none'}
    >
      <path
        d="M15 6L9 12L15 18"
        stroke={strokeColor || 'black'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
