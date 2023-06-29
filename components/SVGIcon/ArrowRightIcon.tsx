interface ArrowRightIconProps {
  fillColor?: string
  strokeColor?: string
}

export const ArrowRightIcon = ({ fillColor, strokeColor }: ArrowRightIconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
