'use client'
import useStore from '@/app/(store)/store'
import useClickOutSide from '@/hooks/useClickOutSide'
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
export default function BoxSort() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const sort = searchParams.get('sort')
  const pathName = usePathname()
  const flashsale = searchParams.get('flashsale')
  const [isOpen, setIsOpen] = useState(false)
  const [sideRef, isOutSide] = useClickOutSide()
  const setIsFilterProduct = useStore((state) => state.setIsFilterProduct)

  useEffect(() => {
    if (isOutSide) return setIsOpen(false)
  }, [isOutSide])

  const handleSort = (query) => {
    setIsOpen(false)

    const paramNew = new URLSearchParams(searchParams)
    if (query === 'new') {
      setIsFilterProduct(true)
      paramNew.delete('sort')
      paramNew.delete('orderby')
      router.push(pathName + '?' + paramNew.toString(), {
        scroll: false,
      })
    } else {
      setIsFilterProduct(true)
      paramNew.set('sort', query)
      paramNew.set('orderby', 'price')
      router.push(pathName + '?' + paramNew.toString(), {
        scroll: false,
      })
    }
  }

  const handleIndexSort = () => {
    if (sort?.includes('asc')) return 1
    if (sort?.includes('desc')) return 2
    return 0
  }

  const handleFilterFlashsale = () => {
    const paramNew = new URLSearchParams(searchParams)
    if (flashsale) {
      paramNew.delete('flashsale')
    } else {
      paramNew.set('flashsale', 'true')
    }
    router.push(pathName + '?' + paramNew.toString(), {
      scroll: false,
    })
  }
  return (
    <div className='flex'>
      <button
        onClick={handleFilterFlashsale}
        className={`${
          flashsale
            ? 'bg-[linear-gradient(180deg,#E0B181_0.72%,#BE9367_99.87%)] text-white'
            : 'bg-[#F0F0F0] text-blue-800'
        } w-fit h-[2.63543rem] px-[0.73rem] rounded-[0.43924rem] mr-[0.44rem] flex items-center caption font-semibold`}
      >
        FLASHSALE
      </button>
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
            {listSort?.map((e, index) => (
              <div
                onClick={() => handleSort(e?.query)}
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
