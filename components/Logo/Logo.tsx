import Image from 'next/image'

interface LogoProps {
  type?: 'black' | 'white'
}
export const Logo = ({ type = 'black' }: LogoProps) => {
  return (
    <>
      {type === 'black' ? (
        <Image width={156} height={42} src="/black-logo.png" />
      ) : (
        <Image width={156} height={42} src="/white-logo.png" />
      )}
    </>
  )
}
