'use client'
import {formatToVND, handlePercentSale, renderPriceProduct} from '@/lib/utils'
// import {DialogProduct} from '@/sections/home/components/dialog'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'
import dynamic from 'next/dynamic'
const DialogProduct = dynamic(() =>
  import('@/sections/home/components/dialog').then((mod) => mod.DialogProduct),
)

export default function CardProduct({product, priority = false}) {
  const [isOpen, setIsOpen] = useState(false)
  const percentSale = handlePercentSale(product)
  const price = renderPriceProduct(product)
  return (
    <div className='w-full h-[28.2rem] xmd:h-[23.1rem] first:ml-0 rounded-[0.87848rem] md:border md:border-solid md:border-[#E5E7EB] group shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)] md:hover:shadow-[2px_4px_20px_0px_rgba(12,46,112,0.04),-6px_2px_32px_0px_rgba(12,46,112,0.08)] select-none xmd:shadow-[-6px_2px_28px_0px_rgba(12,46,112,0.08),2px_4px_16px_0px_rgba(12,46,112,0.04)]'>
      <Link
        href={product?.slug || '/'}
        className='h-[16.82284rem] xmd:h-[12.00586rem] w-full rounded-tl-[0.87848rem] rounded-tr-[0.87848rem] overflow-hidden relative block'
      >
        <Image
          className='object-cover size-full'
          src={product?.featuredImage?.url || '/home/item-product.jpg'}
          alt={product?.featuredImage?.alt || product?.name || 'ảnh sản phẩm'}
          width={230}
          height={230}
          priority={priority}
        />
        {percentSale && (
          <div className='bg-[linear-gradient(104deg,#E88B00_-3.95%,#CE7B00_106.72%)] w-[2.78184rem] h-[1.02489rem] rounded-full caption2 font-semibold text-white absolute top-[0.88rem] left-[0.88rem] xmd:top-[0.44rem] xmd:left-[0.44rem] z-10 flex justify-center items-start tracking-normal md:pt-[0.15rem] xmd:tracking-normal pt-[0.14rem]'>
            {percentSale + '%'}
          </div>
        )}
      </Link>
      <div className='p-[0.73206rem] xmd:p-[0.44rem] bg-white rounded-bl-[0.87848rem] rounded-br-[0.87848rem] xmd:h-[calc(23.1rem-12.00586rem)] relative'>
        <Link
          href={product?.slug || '/'}
          className='block w-full h-fit'
        >
          <h2 className='font-medium line-clamp-2 text-greyscale-60 caption1 h-[2.1rem] xmd:h-[2.05rem] xmd:tracking-[0.00439rem]'>
            {product?.name || 'Chưa có thông tin!'}
          </h2>
        </Link>
        {/* {false && <Progress />} */}
        <ul className='mt-[0.4rem] flex flex-wrap *:mt-[0.29rem] *:ml-[0.29rem] *:px-[0.58565rem] *:py-[0.29283rem] *:rounded-[7.5rem] *:bg-[#F6F6F6] max-h-[3.8rem] h-[3.8rem] overflow-hidden md:*:h-fit md:*:whitespace-nowrap'>
          {product?.categories?.slice(0, 4).map((category, index) => (
            <li
              key={index}
              className='font-normal first:ml-0 caption1 text-greyscale-40 h-fit'
            >
              {index === 3 && product?.categories?.length >= 4
                ? `+${product?.categories?.length - 3}`
                : category}
            </li>
          ))}
        </ul>
        <DialogProduct
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          type='add'
          product={product}
        >
          <button className='mt-[0.51rem] w-full h-[2.92826rem] rounded-[0.58565rem] bg-blue-50 md:group-hover:bg-blue-800 transition-all duration-500 py-[0.65886rem] px-[0.58565rem] flex justify-between items-center xmd:bg-[#10273F] xmd:absolute xmd:left-1/2 xmd:w-[calc(100%-0.88rem)] xmd:-translate-x-1/2 xmd:bottom-[0.44rem]'>
            <div className='flex flex-col'>
              <span className='font-semibold text-blue-800 transition-all duration-500 sub2 xmd:caption1 xmd:font-bold xmd:text-white size-full md:group-hover:text-white'>
                {formatToVND(price?.sale) || formatToVND(price?.price)}
              </span>
              {percentSale && (
                <span className='transition-all duration-500 giagoc size-full md:group-hover:text-greyscaletext-5-div xmd:font-workSans xmd:text-greyscaletext-5-div xmd:tracking-[0.00827rem] xmd:leading-[1.2] xmd:font-medium xmd:text-[0.65886rem]'>
                  {formatToVND(price?.price)}
                </span>
              )}
            </div>
            <div className='size-[1.46413rem] relative'>
              <Image
                className='absolute top-0 left-0 object-contain transition-all duration-500 xmd:opacity-0 size-full md:group-hover:opacity-0'
                src={'/home/cart.svg'}
                alt='icon cart'
                width={20}
                height={20}
              />
              <Image
                className='absolute top-0 left-0 object-contain transition-all duration-500 opacity-0 xmd:opacity-100 size-full md:group-hover:opacity-100'
                src={'/home/cart-active.svg'}
                alt='icon cart'
                width={20}
                height={20}
              />
            </div>
          </button>
        </DialogProduct>
      </div>
    </div>
  )
}
