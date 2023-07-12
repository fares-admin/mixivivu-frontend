import Image from 'next/image'

interface LogoProps {
  type?: 'black' | 'white'
  width?: number
  height?: number
}
export const Logo = ({ type = 'black', width, height }: LogoProps) => {
  return (
    <div>
      {type === 'black' ? (
        <Image width={width || 156} height={height || 42} src="/black-logo.png" />
      ) : (
        <Image width={width || 218} height={height || 59} src="/white-logo.png" />
      )}
    </div>
  )
}
