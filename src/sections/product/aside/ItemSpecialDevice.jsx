'use client'

import CheckDefault from '@/components/sheetcategories/CheckDefault'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import {useState} from 'react'

export default function ItemSpecialDevice({item, onMobile}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const device = searchParams.get('device')?.split('--')

  const [isCheck, setIsCheck] = useState(
    device?.includes(item?.slug) ? true : false,
  )

  const handleFilterDevicePc = () => {
    if (isCheck) {
      const paramNew = new URLSearchParams(searchParams)

      const dataNew = device?.length > 0 && [...device]
      dataNew?.splice(
        dataNew?.findIndex((e) => e === item?.slug),
        1,
      )
      const searchParamsNew =
        dataNew?.length > 1 ? dataNew?.join('--') : dataNew?.[0]
      if (dataNew?.length > 0) {
        paramNew.set('device', searchParamsNew)
      } else {
        paramNew.delete('device', searchParamsNew)
      }
      router.push(pathName + '?' + paramNew, {
        scroll: false,
      })
      return setIsCheck(false)
    } else {
      const paramNew = new URLSearchParams(searchParams)
      const searchParamsNew = device
        ? device?.join('--') + '--' + item?.slug
        : item?.slug
      paramNew.set('device', searchParamsNew)
      router.push(pathName + '?' + paramNew.toString(), {
        scroll: false,
      })
      return setIsCheck(true)
    }
  }

  const handleFilterDeviceMobile = () => {
    if (isCheck) {
      const dataQuery = JSON.parse(localStorage.getItem('dataQuery'))
      if (!dataQuery) return
      const dataDevices = [...dataQuery.device?.split('--')]
      dataDevices?.splice(
        dataDevices?.findIndex((e) => e === item?.slug),
        1,
      )
      const dataNew = dataDevices?.join('--')
      dataQuery.device = dataNew || ''

      localStorage.setItem('dataQuery', JSON.stringify(dataQuery))
      return setIsCheck(false)
    } else {
      const dataQuery = JSON.parse(localStorage.getItem('dataQuery'))
      if (!dataQuery) return

      dataQuery.device = dataQuery.device
        ? dataQuery.device + '--' + item?.slug
        : item?.slug
      localStorage.setItem('dataQuery', JSON.stringify(dataQuery))
      return setIsCheck(true)
    }
  }

  const handleFilterDevice = () => {
    if (onMobile) {
      return handleFilterDeviceMobile()
    } else {
      return handleFilterDevicePc()
    }
  }

  return (
    <div
      onClick={handleFilterDevice}
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
