interface CheckIconProps {
  fillColor?: string
  width?: string
  height?: string
  strokeColor?: string
}

export const CheckIcon = ({ fillColor, width, height, strokeColor }: CheckIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 24 24"
      fill={fillColor || 'none'}
    >
      <path
        d="M4 12.6111L8.92308 17.5L20 6.5"
        stroke={strokeColor || 'black'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
