interface AnchorIconProps {
  fillColor?: string
  strokeColor?: string
}

export const AnchorIcon = ({ fillColor, strokeColor }: AnchorIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill={fillColor || 'none'}
    >
      <path
        d="M6 4.2C6.74558 4.2 7.35 3.59558 7.35 2.85C7.35 2.10442 6.74558 1.5 6 1.5C5.25442 1.5 4.65 2.10442 4.65 2.85C4.65 3.59558 5.25442 4.2 6 4.2ZM6 4.2V10.5M6 10.5C4.80653 10.5 3.66193 10.0259 2.81802 9.18198C1.97411 8.33807 1.5 7.19347 1.5 6H2.85M6 10.5C7.19347 10.5 8.33807 10.0259 9.18198 9.18198C10.0259 8.33807 10.5 7.19347 10.5 6H9.15"
        stroke={strokeColor || '#667085'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
