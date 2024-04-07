'use client'

import Link from 'next/link'
import InputSearchNav from './InputSearchNav'
import PopupResult from './PopupResult'
import {useState} from 'react'
import useStore from '@/app/(store)/store'
import PopupStore from '../popupstore'
import useSWR from 'swr'
import {fetcher} from '@/lib/utils'

const linkNavUp = [
  {
    title: 'Tra cứu đơn hàng',
    href: '/tra-cuu-don-hang',
  },
  {
    title: 'Góc công nghệ',
    href: '/goc-cong-nghe',
  },
  {
    title: 'Cửa hàng',
    href: '',
  },
  {
    title: 'Chính sách',
    href: '/chinh-sach',
  },
]

export default function BoxSearch({isMobile, productSuggest, categories}) {
  const [isValue, setIsValue] = useState('')
  console.log('🚀 ~ BoxSearch ~ isValue:', isValue)
  const isFocusSearchNav = useStore((state) => state.isFocusSearchNav)
  const isOpenMegaMenuRes = useStore((state) => state.isOpenMegaMenuRes)

  const {data, error, isLoading} = useSWR(
    isValue
      ? process.env.NEXT_PUBLIC_API +
          `/okhub/v1/product/filter/products?limit=10&page=1&keyword=${isValue}`
      : null,
    fetcher,
    {
      refreshInterval: 1000,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )
  console.log('🚀 ~ InputSearchNav ~ data:', data)
  return (
    <div
      id='container_search_nav'
      className={`${
        isOpenMegaMenuRes ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } transition-all duration-200 bg-blue-50 xmd:bg-elevation-20 rounded-[7.5rem] md:p-[0.29rem] flex items-center h-[3.22108rem] xmd:h-[2.34261rem] w-fit relative xmd:-mr-[4.4rem]`}
    >
      <InputSearchNav
        setIsValue={setIsValue}
        isValue={isValue}
        isMobile={isMobile}
      />
      {!isMobile && (
        <ul
          id='categories_nav'
          className='flex ml-[0.58rem]'
        >
          {linkNavUp.map((e, index) => (
            <li
              key={index}
              className={`${index === 2 ? 'relative group' : ''}`}
            >
              {index === 2 ? (
                <>
                  <span className='caption1 font-medium text-blue-800 p-[0.88rem]'>
                    {e.title}
                  </span>
                  <PopupStore />
                </>
              ) : (
                <Link
                  className='caption1 font-medium text-blue-800 p-[0.88rem]'
                  href={e.href}
                >
                  {e.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
      {isFocusSearchNav && (
        <PopupResult
          productSuggest={productSuggest}
          categories={categories}
          isValue={isValue}
          data={data}
        />
      )}
    </div>
  )
}
