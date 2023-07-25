interface ChevronUpIconProps {
  strokeColor?: string
}

export const ChevronUpIcon = ({ strokeColor }: ChevronUpIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 15L12 9L18 15"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
