interface ChevronDownIconProps {
  fillColor?: string
  strokeColor?: string
}

export const ChevronDownIcon = ({ fillColor, strokeColor }: ChevronDownIconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.2002 4.5L6.2002 7.5L9.2002 4.5"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
