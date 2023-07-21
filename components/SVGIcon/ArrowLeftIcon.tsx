interface ArrowLeftIconProps {
  width?: string
  height?: string
  fillColor?: string
  strokeColor?: string
}

export const ArrowLeftIcon = ({ fillColor, strokeColor, width, height }: ArrowLeftIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '20'}
      height={height || '20'}
      viewBox="0 0 20 20"
      fill={fillColor || 'none'}
    >
      <path
        d="M4.16602 10H15.8327M4.16602 10L9.16602 5M4.16602 10L9.16602 15"
        stroke={strokeColor || '#344054'}
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
