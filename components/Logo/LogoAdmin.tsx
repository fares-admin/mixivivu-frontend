import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  type?: 'black' | 'white'
  width?: number
  height?: number
}
export const LogoAdmin = ({ type = 'black', width, height }: LogoProps) => {
  return (
    <Link href="/admin">
      <a>
        {type === 'black' ? (
          <Image width={width || 232} height={height || 62} src="/black-logo.png" />
        ) : (
          <Image width={width || 232} height={height || 62} src="/white-logo.png" />
        )}
      </a>
    </Link>
  )
}
