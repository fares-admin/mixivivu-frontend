import Image from 'next/image'

interface ImageFillProps {
  src: string
  width?: string
  height?: string
  className?: string
}

export const ImageFill = ({ src, width = '100%', height = '100%', className }: ImageFillProps) => {
  return (
    <div
      style={{
        width,
        height,
        position: 'relative',
        overflow: 'hidden',
      }}
      className={className}
    >
      <Image src={src} layout="fill" objectFit="cover" />
    </div>
  )
}
