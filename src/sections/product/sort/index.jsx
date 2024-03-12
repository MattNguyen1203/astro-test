'use client'

import useClickOutSide from '@/hooks/useClickOutSide'
import Link from 'next/link'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import {useEffect, useState} from 'react'

const listSort = [
  {
    title: 'Sản phẩm mới nhất',
    query: 'new',
  },
  {
    title: 'Giá từ thấp đến cao',
    query: 'asc',
  },
  {
    title: 'Giá từ cao đến thấp',
    query: 'desc',
  },
]

export default function Sort() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const sort = searchParams.get('sort') || 'new'
  const [isOpen, setIsOpen] = useState(false)
  const [sideRef, isOutSide] = useClickOutSide()

  useEffect(() => {
    if (isOutSide) return setIsOpen(false)
  }, [isOutSide])

  const handleSort = (query) => {
    const params = new URLSearchParams(searchParams)
    params.set('sort', query)
    router.push(pathName + '?' + params.toString(), {
      scroll: false,
    })
    setIsOpen(false)
  }
  return (
    <div className='h-[5.27086rem] rounded-[0.87848rem] bg-white shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)] px-[1.17rem] flex items-center justify-between mb-[1.17rem] relative z-20'>
      <div className='w-fit'>
        <h2 className='sub2 font-medium text-greyscale-80 mb-[0.44rem]'>
          Bút cảm ứng cho iPad
        </h2>
        <span className='text-[1.02489rem] font-medium leading-[1.2] tracking-[0.01025rem] text-greyscale-20'>
          (222 sản phẩm){' '}
        </span>
      </div>
      <div className='flex'>
        <Link
          href={'/'}
          className='w-fit h-[2.63543rem] bg-[linear-gradient(180deg,#E0B181_0.72%,#BE9367_99.87%)] px-[0.73rem] rounded-[0.43924rem] mr-[0.44rem] text-white flex items-center caption font-semibold'
        >
          FLASHSALE
        </Link>
        <div
          ref={sideRef}
          className='w-[13.98243rem] rounded-[0.43924rem] bg-elevation-20 h-[2.63543rem] relative select-none'
        >
          <div
            onClick={() => setIsOpen(!isOpen)}
            className='flex items-center justify-between pl-[0.73rem] pr-[0.81rem] size-full cursor-pointer'
          >
            <span className='font-semibold text-blue-800 caption '>
              SẮP XẾP
            </span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              className='size-[1.1713rem]'
            >
              <path
                d='M12.6663 6L7.99967 10.6667L3.33301 6'
                stroke='#0D1F33'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          {isOpen && (
            <div className='absolute -bottom-[1.3rem] left-0 z-10 w-full translate-y-full h-fit rounded-[0.87848rem] bg-white shadow-[2px_2px_12px_0px_rgba(0,0,0,0.02),-3px_2px_20px_0px_rgba(0,0,0,0.04)] px-[0.88rem] py-[1.17rem] flex flex-col before:absolute before:w-[1.46413rem] before:h-[1.1713rem] before:-top-[0.4rem] before:right-[0.88rem] before:rotate-45 before:origin-center before:bg-white before:z-10 '>
              {listSort.map((e, index) => (
                <div
                  onClick={() => handleSort(e.query)}
                  className={`${
                    sort === e.query
                      ? 'bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] text-white '
                      : 'text-greyscale-80 hover:bg-greyscale-20/30'
                  } ${
                    index === 0 ? 'mt-0' : 'mt-[0.51rem]'
                  } w-full h-[2.64rem] rounded-[0.58565rem] transition-all duration-200 pl-[0.73rem] flex items-center sub2 cursor-pointer font-semibold`}
                  key={index}
                >
                  {e.title}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
