interface MinusIconProps {
  fillColor?: string
  width?: string
  height?: string
  strokeColor?: string
}

export const MinusIcon = ({ fillColor, width, height, strokeColor }: MinusIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 24 24"
      fill={fillColor || 'none'}
    >
      <path
        d="M6 12L18 12"
        stroke={strokeColor || '#101828'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
