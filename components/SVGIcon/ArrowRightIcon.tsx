interface ArrowRightIconProps {
  width?: string
  height?: string
  fillColor?: string
  strokeColor?: string
}

export const ArrowRightIcon = ({ fillColor, strokeColor, width, height }: ArrowRightIconProps) => {
  return (
    <svg
      width={width || '12'}
      height={height || '12'}
      viewBox="0 0 12 12"
      fill={fillColor || 'none'}
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
