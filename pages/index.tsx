import { Button } from '@/components'
import type { NextPage } from 'next'
import Image from 'next/image'

const Dashboard: NextPage = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div>test</div>
      <div style={{ width: '100px', height: '100px', position: 'relative' }}>
        <Image src="/logo.png" layout="fill" />
      </div>
      <Button label="button" />
    </div>
  )
}

export default Dashboard
