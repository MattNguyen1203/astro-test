'use client'

import Image from 'next/image'
import ProductInfo from './ProductInfo'
import {useState} from 'react'
import {cn} from '@/lib/utils'

function PopupProduct(props) {
  const {setIsOpen} = props
  const dataArr = [
    {src: '/components/productImg.jpg', key: '1'},
    {src: '/components/productImg.jpg', key: '2'},
    {src: '/components/productImg.jpg', key: '3'},
  ]

  const [key, setKey] = useState('1')

  return (
    <div className='relative bg-elevation-20 rounded-[0.87848rem]'>
      <div className='flex w-full h-[8.05rem] py-[0.87848rem] px-[1.75695rem] bg-white rounded-[0.87848rem]'>
        {dataArr?.map((item, index) => {
          return (
            <Image
              key={item.key}
              src={item.src}
              alt='ảnh sp'
              width={50}
              height={50}
              className={cn(
                'h-full w-[6.29575rem] border-[0.61px] border-[#E7E7E7] mr-[0.59rem] rounded-[0.5358rem] object-cover cursor-pointer',
                key === item.key ? 'border-blue-800' : 'border-[#E7E7E7]',
              )}
              onClick={() => setKey(item.key)}
            />
          )
        })}
      </div>
      <ProductInfo />

      <Image
        src={'/components/closeIcon.svg'}
        alt='close icon'
        width={12}
        height={12}
        className='w-[2.92826rem] h-[2.92826rem] object-contain absolute right-[-4rem] top-1/2 cursor-pointer'
        onClick={() => setIsOpen(false)}
      />
    </div>
  )
}
export default PopupProduct
