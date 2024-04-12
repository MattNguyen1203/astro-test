'use client'

import Image from 'next/image'
import ProductInfo from './ProductInfo'

function PopupProduct(props) {
  const {setIsOpen, data = [], type} = props

  return (
    <>
      <ProductInfo
        data={data}
        type={type}
      />

      <Image
        src={'/components/closeIcon.svg'}
        alt='close icon'
        width={12}
        height={12}
        className='size-[2.92826rem] xmd:size-[2rem] object-contain fixed right-[-4rem] top-1/2 cursor-pointer xmd:top-[-3rem] xmd:right-[1rem]'
        onClick={() => setIsOpen(false)}
      />
    </>
  )
}
export default PopupProduct
