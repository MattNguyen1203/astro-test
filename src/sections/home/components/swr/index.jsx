'use client'
import useDebounce from '@/hooks/useDebounce'
import {useState} from 'react'
import useSWR from 'swr'

export default function IndexSWR() {
  const [value, setValue] = useState('')
  const debouncedValue = useDebounce(value, 500)
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const {data, isLoading, error} = useSWR(
    `https://maps.vietmap.vn/api/search/v3?apikey=c6a8fb5d25f0f32c87d1469f6847388c445850643364b94e${
      debouncedValue ? '&text=' + debouncedValue : ''
    }`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen bg-black'>
      <input
        type='text'
        onChange={(e) => setValue(e.target.value)}
      />
      <div className='text-white'>{JSON.stringify(data)}</div>
    </div>
  )
}
