interface UsersIconProps {
  fillColor?: string
  strokeColor?: string
}

export const UsersIcon = ({ fillColor, strokeColor }: UsersIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill={fillColor || 'none'}
    >
      <path
        d="M8 1.73388C8.74086 2.10206 9.25 2.86657 9.25 3.75C9.25 4.63343 8.74086 5.39794 8 5.76612M9 8.38319C9.75573 8.72517 10.4363 9.28249 11 10M1 10C1.97325 8.76129 3.29459 8 4.75 8C6.20541 8 7.52675 8.76129 8.5 10M7 3.75C7 4.99264 5.99264 6 4.75 6C3.50736 6 2.5 4.99264 2.5 3.75C2.5 2.50736 3.50736 1.5 4.75 1.5C5.99264 1.5 7 2.50736 7 3.75Z"
        stroke={strokeColor || '#667085'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
