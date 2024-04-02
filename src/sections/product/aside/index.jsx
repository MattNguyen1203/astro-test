'use client'
import './style.css'

import {Input} from '@/components/ui/input'
import SocialProduct from './SocialProduct'
// import PopupCategories from './PopupCategories'
import {useEffect, useState} from 'react'
import useClickOutSide from '@/hooks/useClickOutSide'
import {useParams} from 'next/navigation'
import dynamic from 'next/dynamic'
const PopupCategories = dynamic(() => import('./PopupCategories'))

const arr = [
  {
    title: 'iPad',
  },
  {
    title: 'Android',
  },
  {
    title: 'Surface',
  },
  {
    title: 'Surface',
  },
]

export default function Aside({categories}) {
  const params = useParams()
  const [isOpen, setIsOpen] = useState(false)
  const [indexSelect, setIndexSelect] = useState(0)
  const [sideRef, isOutSide] = useClickOutSide()
  useEffect(() => {
    if (isOutSide) return setIsOpen(false)
  }, [isOutSide])

  function handleNameCategory(categories, slug) {
    return categories?.find((e) => e?.slug === slug)?.name
  }

  return (
    <aside className='w-[16.17862rem] h-fit sticky top-[9.76rem] left-0 z-[99]'>
      <div className='w-full rounded-[0.87848rem] bg-white shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)] p-[0.88rem] h-fit'>
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
            indexSelect={indexSelect}
            setIndexSelect={setIndexSelect}
            categories={categories}
            params={params}
          />
        </div>
        <hr className='w-full h-[0.07321rem] bg-[rgba(236,236,236,0.70)] my-[0.88rem]' />
        <span className='caption1 text-greyscale-80 font-semibold leading-[1.2] block pl-[0.15rem]'>
          Thiết bị
        </span>
        <ul className='flex flex-wrap mt-[0.14rem] *:px-[0.73rem] *:py-[0.51rem] *:rounded-[0.43924rem] *:bg-elevation-30 *:size-fit *:mt-[0.59rem] *:mr-[0.59rem] *:caption font-light text-greyscale-30 select-none'>
          {arr.map((e, index) => (
            <li
              key={index}
              className=''
            >
              {e.title}
            </li>
          ))}
        </ul>
        <hr className='w-full h-[0.07321rem] bg-[rgba(236,236,236,0.70)] my-[0.88rem]' />
        <span className='caption1 text-greyscale-80 font-semibold leading-[1.2] block pl-[0.15rem]'>
          Phân loại
        </span>
        <label
          htmlFor='combo'
          className='mt-[0.73rem] mb-[0.59rem] flex items-center select-none cursor-pointer'
        >
          <Input
            id='combo'
            name='combo'
            type='checkbox'
            className='size-[1.46413rem]'
          />
          <span className='ml-[0.59rem] inline-block caption font-normal text-greyscale-30'>
            Sản phẩm combo
          </span>
        </label>
        <label
          htmlFor='alone'
          className='flex items-center cursor-pointer select-none'
        >
          <Input
            id='alone'
            name='alone'
            type='checkbox'
            className='size-[1.46413rem]'
          />
          <span className='ml-[0.59rem] inline-block caption font-normal text-greyscale-30'>
            Sản phẩm lẻ
          </span>
        </label>
      </div>
      <div className='mt-[1.46rem]'>
        <span className='font-medium text-greyscale-30 block pl-[0.59rem]'>
          Ghé thăm gian hàng tại:
        </span>
        <SocialProduct priority={true} />
      </div>
    </aside>
  )
}
