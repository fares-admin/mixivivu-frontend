import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export const useGetBreadCrumb = () => {
  const [result, setResult] = useState<React.ReactNode[]>([])

  const router = useRouter()

  const content = router.pathname.substring(1, router.pathname.length).split('/')

  useEffect(() => {
    const newResult: React.ReactNode[] = []
    content.forEach((item) => {
      if (item === content[content.length - 1]) {
        if (item === '[id]') {
          newResult.push(<div>{router.query.id}</div>)
        } else {
          newResult.push(<div>{item}</div>)
        }
      } else {
        newResult.push(<div>{item}</div>)
      }
      if (content.indexOf(item) !== content.length - 1) {
        newResult.push(<div>_</div>)
      }
    })
    setResult(newResult)
  }, [router])

  return (
    <div style={{ display: 'flex', gap: 10, overflow: 'auto', alignItems: 'center' }}>
      {result.map((item) => item)}
    </div>
  )
}
