'use client'

import useStore from '@/app/(store)/store'
import CheckDefault from '@/components/sheetcategories/CheckDefault'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import {useEffect, useState} from 'react'

export default function ItemSpecial({item}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const type = searchParams.get('type')
  const [isCheck, setIsCheck] = useState(type === item?.slug)
  const setIsFilterProduct = useStore((state) => state.setIsFilterProduct)

  useEffect(() => {
    if (type === item?.slug) {
      !isCheck && setIsCheck(true)
    } else {
      isCheck && setIsCheck(false)
    }
  }, [searchParams])

  const handleFilterSpecial = () => {
    const paramNew = new URLSearchParams(searchParams)
    setIsFilterProduct(true)
    if (type === item?.slug) {
      paramNew.delete('type')
    } else {
      if (type) {
        paramNew.delete('type')
      } else {
        paramNew.set('type', item?.slug)
      }
    }
    router.push(pathName + '?' + paramNew.toString(), {
      scroll: false,
    })
  }
  return (
    <div
      onClick={handleFilterSpecial}
      className='mt-[0.73rem] mb-[0.59rem] flex items-center select-none cursor-pointer'
    >
      <CheckDefault
        preventDefault={true}
        isCheck={isCheck}
        setIsCheck={setIsCheck}
        className='size-[1.46413rem]'
      />
      <span className='ml-[0.59rem] inline-block caption font-normal text-greyscale-30'>
        {item?.name}
      </span>
    </div>
  )
}
