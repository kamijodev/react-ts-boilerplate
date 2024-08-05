import { useState } from 'react'

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('データがフェッチされました！')
    }, 2000)
  })
}

const Test = () => {
  const [data, setData] = useState<string | null>(null)

  if (data === null) {
    throw fetchData()
  }
  return <div>a</div>
}
