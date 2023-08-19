interface XMarkIconProps {
  strokeColor?: string
  width?: string
  height?: string
}

export const XMarkIcon = ({ strokeColor, width, height }: XMarkIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke={strokeColor || 'black'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
