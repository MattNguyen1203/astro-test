'use client'

import useStore from '@/app/(store)/store'
import Image from 'next/image'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'

const arr = [
  {
    title: 'iPad',
    slug: 'ipad',
  },
  {
    title: 'Android',
    slug: 'android',
  },
  {
    title: 'Surface',
    slug: 'surface',
  },
  {
    title: 'Macbook',
    slug: 'macbook',
  },
]

export default function Device() {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const setIsFilterProduct = useStore((state) => state.setIsFilterProduct)
  const device = searchParams.get('device')

  const handleFilterDevice = (slug) => {
    const paramNew = new URLSearchParams(searchParams)
    setIsFilterProduct(true)
    if (device === slug) {
      paramNew.delete('device')
    } else {
      paramNew.set('device', slug)
    }
    router.push(pathName + '?' + paramNew.toString(), {
      scroll: false,
    })
  }

  return (
    <div className='flex flex-wrap mt-[0.14rem] *:px-[0.73rem] *:py-[0.51rem] *:rounded-[0.43924rem] *:bg-elevation-30 *:size-fit *:mt-[0.59rem] *:mr-[0.59rem] *:caption font-light text-greyscale-30 select-none'>
      {arr.map((e, index) => (
        <div
          key={index}
          className={`flex relative items-center mr-[0.44rem] p-[0.44rem] rounded-[0.29283rem] cursor-pointer border-[2px] border-solid ${
            device === e?.slug ? 'border-blue-500' : 'border-transparent'
          }`}
          onClick={() => handleFilterDevice(e?.slug)}
        >
          <Image
            src={'/components/checkVar.svg'}
            alt=''
            width={12}
            height={12}
            className={`absolute top-[-0.43924rem] right-[-0.36603rem] z-10 ${
              device === e?.slug ? 'flex' : 'hidden'
            }`}
          />
          <span className='font-normal caption1 text-greyscale-40'>
            {e?.title}
          </span>
        </div>
      ))}
    </div>
  )
}
