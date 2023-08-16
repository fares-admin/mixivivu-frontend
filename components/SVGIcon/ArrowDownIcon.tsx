interface ArrowDownIconProps {
  width?: string
  height?: string
  strokeColor?: string
}

export const ArrowDownIcon = ({ strokeColor, width, height }: ArrowDownIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '20'}
      height={height || '20'}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10 4.16669V15.8334M10 15.8334L5 10.8334M10 15.8334L15 10.8334"
        stroke={strokeColor || '#0E4F4F'}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
