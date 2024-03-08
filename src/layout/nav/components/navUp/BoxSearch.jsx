'use client'

import Link from 'next/link'
import InputSearchNav from './InputSearchNav'
import PopupResult from './PopupResult'
import {useState} from 'react'
import useStore from '@/app/(store)/store'

const linkNavUp = [
  {
    title: 'Tra cứu đơn hàng',
    href: '/tra-cuu',
  },
  {
    title: 'Góc công nghệ',
    href: '/goc-cong-nghe',
  },
  {
    title: 'Cửa hàng',
    href: '/cua-hang',
  },
  {
    title: 'Chính sách',
    href: '/chinh-sach',
  },
]

export default function BoxSearch() {
  const [isValue, setIsValue] = useState(false)
  const isFocusSearchNav = useStore((state) => state.isFocusSearchNav)

  return (
    <div
      id='container_search_nav'
      className='bg-blue-50 rounded-[6.5vw] p-[0.29rem] flex items-center h-[3.22108rem] w-fit relative'
    >
      <InputSearchNav
        setIsValue={setIsValue}
        isValue={isValue}
      />
      <ul
        id='categories_nav'
        className='flex ml-[0.58rem]'
      >
        {linkNavUp.map((e, index) => (
          <li key={index}>
            <Link
              className='caption1 font-medium text-blue-800 p-[0.88rem]'
              href={e.href}
            >
              {e.title}
            </Link>
          </li>
        ))}
      </ul>
      {isValue && isFocusSearchNav && <PopupResult />}
    </div>
  )
}
