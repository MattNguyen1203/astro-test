'use client'
import useClickOutSide from '@/hooks/useClickOutSide'
import dynamic from 'next/dynamic'
import {useParams} from 'next/navigation'
import {useEffect, useState} from 'react'
const PopupCategories = dynamic(() => import('./PopupCategories'))

export default function BoxFilter({categories}) {
  const params = useParams()
  const [isOpen, setIsOpen] = useState(false)
  const [sideRef, isOutSide] = useClickOutSide()

  useEffect(() => {
    if (isOutSide) return setIsOpen(false)
  }, [isOutSide])

  function handleNameCategory(categories, slug) {
    return categories?.find((e) => e?.slug === slug)?.name || 'Tất cả sản phẩm'
  }
  return (
    <div
      ref={sideRef}
      onClick={() => setIsOpen(!isOpen)}
      className='px-[0.88rem] bg-elevation-20 h-[3.51391rem] flex justify-between items-center rounded-[0.29283rem] cursor-pointer relative'
    >
      <span className='font-semibold sub2 text-greyscale-80 '>
        {params?.slug?.length > 1
          ? handleNameCategory(categories, params?.slug[0])
          : 'Tất cả sản phẩm'}
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
          d='M3.33301 11.3337H12.6663M3.33301 8.00033H12.6663M3.33301 4.66699H12.6663'
          stroke='#262626'
          strokeWidth='1.33333'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <PopupCategories
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        categories={categories}
        params={params}
      />
    </div>
  )
}
