'use client'

import CheckDefault from '@/components/sheetcategories/CheckDefault'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import {useState} from 'react'

export default function ItemSpecial({item, onMobile}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const type = searchParams.get('type')?.split('--')

  const [isCheck, setIsCheck] = useState(
    type?.includes(item?.slug) ? true : false,
  )

  const handleFilterSpecialPc = () => {
    if (isCheck) {
      const paramNew = new URLSearchParams(searchParams)

      const dataNew = type?.length > 0 && [...type]
      dataNew?.splice(
        dataNew?.findIndex((e) => e === item?.slug),
        1,
      )
      const searchParamsNew =
        dataNew?.length > 1 ? dataNew?.join('--') : dataNew?.[0]
      if (dataNew?.length > 0) {
        paramNew.set('type', searchParamsNew)
      } else {
        paramNew.delete('type', searchParamsNew)
      }
      router.push(pathName + '?' + paramNew, {
        scroll: false,
      })
      return setIsCheck(false)
    } else {
      const paramNew = new URLSearchParams(searchParams)
      const searchParamsNew = type
        ? type?.join('--') + '--' + item?.slug
        : item?.slug
      paramNew.set('type', searchParamsNew)
      router.push(pathName + '?' + paramNew.toString(), {
        scroll: false,
      })
      return setIsCheck(true)
    }
  }

  const handleFilterSpecialMobile = () => {
    if (isCheck) {
      const dataQuery = JSON.parse(localStorage.getItem('dataQuery'))
      if (!dataQuery) return
      const dataDevices = [...dataQuery.type?.split('--')]
      dataDevices?.splice(
        dataDevices?.findIndex((e) => e === item?.slug),
        1,
      )
      const dataNew = dataDevices?.join('--')
      dataQuery.type = dataNew || ''

      localStorage.setItem('dataQuery', JSON.stringify(dataQuery))
      return setIsCheck(false)
    } else {
      const dataQuery = JSON.parse(localStorage.getItem('dataQuery'))
      if (!dataQuery) return

      dataQuery.type = dataQuery.type
        ? dataQuery.type + '--' + item?.slug
        : item?.slug
      localStorage.setItem('dataQuery', JSON.stringify(dataQuery))
      return setIsCheck(true)
    }
  }

  const handleFilterSpecial = () => {
    if (onMobile) {
      return handleFilterSpecialMobile()
    } else {
      return handleFilterSpecialPc()
    }
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
