import Image from 'next/image'

interface ImageFillProps {
  src: string
  width: string
  height: string
}

export const ImageFill = ({ src, width, height }: ImageFillProps) => {
  return (
    <div
      style={{
        width,
        height,
        position: 'relative',
      }}
    >
      <Image src={src} layout="fill" />
    </div>
  )
}
