'use client'
import useClickOutSide from '@/hooks/useClickOutSide'
import Link from 'next/link'
import {useParams, useRouter} from 'next/navigation'
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
export default function BoxSort() {
  const router = useRouter()
  const params = useParams()
  const [isOpen, setIsOpen] = useState(false)
  const [sideRef, isOutSide] = useClickOutSide()

  useEffect(() => {
    if (isOutSide) return setIsOpen(false)
  }, [isOutSide])

  const handleSort = (query) => {
    setIsOpen(false)
    if (params?.slug?.length) {
      let pathName = '/san-pham/'
      let paramsNew = [...params?.slug]

      if (paramsNew?.includes('asc')) {
        if (query === 'new') {
          paramsNew.splice(paramsNew?.indexOf('asc'), 1)
        } else {
          paramsNew[paramsNew?.indexOf('asc')] = query
        }
      } else if (paramsNew?.includes('desc')) {
        if (query === 'new') {
          paramsNew.splice(paramsNew?.indexOf('desc'), 1)
        } else {
          paramsNew[paramsNew?.indexOf('desc')] = query
        }
      } else {
        if (query !== 'new') {
          let last = paramsNew[paramsNew?.length - 1]
          paramsNew.shift()
          paramsNew.push(query)
          paramsNew.push(last)
        }
      }

      paramsNew?.map((e, index) => {
        if (index < paramsNew?.length - 1) {
          pathName += e + '/'
        }
      })
      router.push(pathName + paramsNew[paramsNew?.length - 1])
    } else {
      if (query === 'new') {
        router.push('/san-pham/1')
      } else {
        router.push('/san-pham/' + query + '/1')
      }
    }
  }

  const handleIndexSort = () => {
    if (params?.slug?.includes('asc')) return 1
    if (params?.slug?.includes('desc')) return 2
    return 0
  }
  return (
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
          <span className='font-semibold text-blue-800 caption '>SẮP XẾP</span>
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
                  index === handleIndexSort()
                    ? 'bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] text-white pointer-events-none'
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
  )
}
