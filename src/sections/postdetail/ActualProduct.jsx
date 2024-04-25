'use client'

import {formatToVND} from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
const ActualProduct = ({relatedProduct}) => {
  console.log('relatedProduct', relatedProduct)
  return (
    <div
      div
      className=' flex items-start flex-col p-[1.75695rem]  rounded-[0.87848rem] bg-white'
    >
      <p className='sub1 font-medium text-[#102841] mb-[1.76rem]'>
        SẢN PHẨM MỚI NHẤT
      </p>
      <ul className='flex flex-col items-center'>
        {relatedProduct?.map((product, index) => {
          const isCombo = product?.type === 'wooco'

          // const isPreOrder =

          return (
            <li
              className='mb-[1.17rem] w-[18.96047rem] flex items-center'
              key={index}
            >
              <div className='mr-[0.73206rem] w-[4.61201rem] h-[4.61201rem] justify-center items-center pr-[0.01603rem] bg-white'>
                <Image
                  className='rounded-[0.29283rem] object-cover'
                  alt={product?.featuredImage?.alt || 'astromazing'}
                  width={63}
                  height={63}
                  src={product?.featuredImage?.url || '/no-image.jpg'}
                />
              </div>
              <div className='flex flex-col items-start flex-1'>
                <Link
                  href={`${isCombo ? '/combo/' : '/'}${product.slug}`}
                  className='flex-1 overflow-hidden font-normal body2 text-ellipsis text-greyscale-60'
                >
                  {product?.name}
                </Link>
                <p className='body2 font-normal text-ellipsis overflow-hidden text-[#F12B2C] flex-1'>
                  {formatToVND(product?.price || '')}
                </p>
              </div>
            </li>
          )
        })}

        <Link
          href='/san-pham'
          className='flex h-[2.63543rem] justify-center py-[0.80527rem] px-[1.46413rem] rounded-[7.32064rem] bg-[#F2F2F2] font-semibold caption text-greyscale-80'
        >
          XEM THÊM
        </Link>
      </ul>
    </div>
  )
}

export default ActualProduct
