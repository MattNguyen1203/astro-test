'use client'

import Image from 'next/image'
import ProductInfo from './ProductInfo'
import {useEffect, useMemo, useState} from 'react'
import {cn} from '@/lib/utils'

function PopupProduct(props) {
  const {setIsOpen, data = [], activeId} = props

  const listImg = useMemo(() => {
    return data.map((item) => ({
      key: item.id,
      src: item.featuredImage.url || '/no-image.jpg',
    }))
  }, [data])

  const [key, setKey] = useState(activeId || listImg[0].key)
  const [dataActive, setDataActive] = useState({})

  useEffect(() => {
    const activeData = data.find((item) => item.id === activeId)
    setDataActive(activeData)
  }, [activeId])

  const handleActive = (key) => {
    setKey(key)

    const findItem = data.find((item) => item.id === key)
    setDataActive(findItem)
  }

  console.log('dataActive', dataActive)

  return (
    <div className='relative bg-elevation-20 rounded-[0.87848rem] w-[55.49048rem] h-[37.84773rem] xmd:w-screen xmd:h-[35rem] xmd:overflow-y-scroll'>
      <div className='flex xmd:hidden w-full h-[8.05rem] py-[0.87848rem] px-[1.75695rem] bg-white rounded-[0.87848rem]'>
        {listImg?.map((item, index) => {
          return (
            <Image
              key={item.key}
              src={item.src}
              alt='ảnh sp'
              width={200}
              height={200}
              className={cn(
                'h-full w-[6.29575rem] border-[0.61px] border-[#E7E7E7] mr-[0.59rem] rounded-[0.5358rem] object-cover cursor-pointer',
                key === item.key ? 'border-blue-800' : 'border-[#E7E7E7]',
              )}
              onClick={() => handleActive(item.key)}
            />
          )
        })}
      </div>
      <ProductInfo data={dataActive} />

      <Image
        src={'/components/closeIcon.svg'}
        alt='close icon'
        width={12}
        height={12}
        className='size-[2.92826rem] xmd:size-[2rem] object-contain fixed right-[-4rem] top-1/2 cursor-pointer xmd:top-[-3rem] xmd:right-[1rem]'
        onClick={() => setIsOpen(false)}
      />
    </div>
  )
}
export default PopupProduct
