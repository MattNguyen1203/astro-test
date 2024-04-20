'use client'
import Image from 'next/image'
import ButtonChange from './ButtonChange'
import BoxCheck from '../sheetcart/BoxCheck'
import Variantion from './Variantion'
import useStore from '@/app/(store)/store'
import Variation from '../popupproduct/Variation'
import {formatToVND} from '@/lib/utils'
import ChangeQuantity from '../popupproduct/ChangeQuantity'
import {useState} from 'react'

export default function ItemCart({
  cart,
  setCart,
  index,
  isMobile,
  item,
  isAuth = false,
}) {
  const setActionCart = useStore((state) => state.setActionCart)

  const [quantity, setQuantity] = useState(item.quantity || 1)
  const handleDeleteItemCart = () => {
    if (isAuth) {
    } else {
      const localGet = JSON.parse(localStorage.getItem('cartAstro')) || []
      localGet?.splice(localGet?.findIndex((e) => e?.slug === item?.slug))
      localStorage.setItem('cartAstro', JSON.stringify(localGet))
      setActionCart((prev) => !prev)
    }
  }
  return (
    <article className='rounded-[0.58565rem] bg-white shadow-[2px_2px_12px_0px_rgba(0,0,0,0.02),-3px_2px_20px_0px_rgba(0,0,0,0.04)] py-[0.73rem] pl-[0.59rem] pr-[1.17rem] flex xmd:px-[0.73rem] xmd:py-[0.59rem] xmd:shadow-[-3px_2px_20px_0px_rgba(0,0,0,0.04),2px_2px_12px_0px_rgba(0,0,0,0.02)]'>
      <div className='flex flex-col items-center justify-center md:px-[0.59rem] xmd:mr-[0.44rem]'>
        <BoxCheck
          setCart={setCart}
          cart={cart}
          index={index}
        />
      </div>
      <div className='w-[6.44217rem] xmd:w-[6.00293rem] bg-white rounded-[0.48023rem] overflow-hidden flex-shrink-0 xmd:border xmd:border-solid xmd:border-[#F6F6F6]'>
        <Image
          className='object-cover size-full'
          src={item?.product_image || '/no-image.jpg'}
          alt={item?.product_name || 'astromazing'}
          width={82}
          height={82}
        />
      </div>
      <div className='flex justify-between w-full xmd:flex-col'>
        <div className='pl-[0.88rem] flex flex-col justify-center xmd:pl-[0.44rem]'>
          <div>
            <h2 className='capitalize font-medium line-clamp-1 caption1 text-greyscale-40 xmd:text-greyscale-50 xmd:font-semibold leading-[1.2] xmd:tracking-[0.01025rem]'>
              {item?.product_name}
            </h2>

            <div className='flex items-center md:my-[0.5rem] xmd:space-x-[0.29rem]'>
              <span className='font-semibold text-blue-600 sub2 xmd:caption1 md:mr-[0.25rem]'>
                {formatToVND(item?.product_price)}
              </span>
              {item?.regular_price && (
                <span className='font-normal line-through giagoc text-greyscale-40 xmd:tracking-normal'>
                  {formatToVND(item?.regular_price)}
                </span>
              )}
            </div>
          </div>
          <div className='relative flex w-full mt-auto xmd:mt-[0.44rem]'>
            <Variantion className='mr-[0.59rem]' />
            <Variantion />
          </div>
        </div>
        <div className='flex md:h-full justify-between md:flex-col md:items-end xmd:pl-[0.44rem] xmd:mt-[0.59rem]'>
          <button
            onClick={handleDeleteItemCart}
            className='w-[1.45695rem] h-fit block xmd:w-[1.5rem]'
          >
            <Image
              className='w-full h-auto'
              src={'/components/delete.svg'}
              alt='icon delete'
              width={24}
              height={24}
            />
          </button>
          {/* <ChangeQuantity
            quantity={quantity}
            setChangeQty={setQuantity}
            stockQty={item?.stock_quantity}
          /> */}
          <ButtonChange />
        </div>
      </div>
    </article>
  )
}
