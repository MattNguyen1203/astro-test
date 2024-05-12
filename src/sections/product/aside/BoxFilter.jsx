'use client'
import {useEffect, useState} from 'react'
import {useParams} from 'next/navigation'

import useClickOutSide from '@/hooks/useClickOutSide'

import dynamic from 'next/dynamic'
import useStore from '@/app/(store)/store'
const PopupCategories = dynamic(() => import('./PopupCategories'), {ssr: false})

export default function BoxFilter({categories}) {
  const params = useParams()
  const [isOpen, setIsOpen] = useState(false)
  const [sideRef, isOutSide] = useClickOutSide()

  const setProgress = useStore((state) => state.setProgress)

  useEffect(() => {
    return () => {
      setProgress(100)
    }
  }, [])

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
      className='px-[0.88rem] bg-elevation-20 h-[3.51391rem] flex justify-between items-center rounded-[0.29283rem] cursor-pointer relative select-none'
    >
      <span className='font-semibold sub2 text-greyscale-80 '>
        {handleNameCategory(categories, params?.category?.[0])}
      </span>
      <ICMenuCategories className='size-[1.1713rem]' />
      <PopupCategories
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        categories={categories}
        params={params}
      />
    </div>
  )
}

const ICMenuCategories = ({className = ''}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      className={className}
    >
      <path
        d='M3.33301 11.3337H12.6663M3.33301 8.00033H12.6663M3.33301 4.66699H12.6663'
        stroke='#262626'
        strokeWidth='1.33333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

ICMenuCategories.displayName = 'ICMenuCategories'
