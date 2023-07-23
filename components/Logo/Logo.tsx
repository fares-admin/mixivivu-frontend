import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  type?: 'black' | 'white'
  width?: number
  height?: number
}
export const Logo = ({ type = 'black', width, height }: LogoProps) => {
  return (
    <Link href="/">
      <a>
        {type === 'black' ? (
          <Image width={width || 156} height={height || 42} src="/black-logo.png" />
        ) : (
          <Image width={width || 218} height={height || 59} src="/white-logo.png" />
        )}
      </a>
    </Link>
  )
}
