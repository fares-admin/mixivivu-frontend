interface SwitchHorizonIconProps {
  strokeColor?: string
  width?: string
  height?: string
}

export const SwitchHorizonIcon = ({ strokeColor, width, height }: SwitchHorizonIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '20'}
      height={height || '20'}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M16.6667 14.1667H3.33337M3.33337 14.1667L6.66671 10.8333M3.33337 14.1667L6.66671 17.5M3.33337 5.83333H16.6667M16.6667 5.83333L13.3334 2.5M16.6667 5.83333L13.3334 9.16667"
        stroke={strokeColor || '#0E4F4F'}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
