'use client'

import Link from 'next/link'
import InputSearchNav from './InputSearchNav'
import PopupResult from './PopupResult'
import {useState} from 'react'
import useStore from '@/app/(store)/store'
import PopupStore from '../popupstore'

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

export default function BoxSearch({isMobile}) {
  const [isValue, setIsValue] = useState(false)
  const isFocusSearchNav = useStore((state) => state.isFocusSearchNav)
  const isOpenMegaMenuRes = useStore((state) => state.isOpenMegaMenuRes)
  return (
    <div
      id='container_search_nav'
      className={`${
        isOpenMegaMenuRes ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } transition-all duration-200 bg-blue-50 rounded-[7.5rem] p-[0.29rem] flex items-center h-[3.22108rem] w-fit relative`}
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
      {isValue && isFocusSearchNav && <PopupResult />}
    </div>
  )
}
