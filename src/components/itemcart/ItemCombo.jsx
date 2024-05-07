'use client'

import {formatToVND} from '@/lib/utils'
import {handlePrice} from '@/sections/productDetail/function'
import Image from 'next/image'
import Link from 'next/link'

const ItemCombo = ({data}) => {
  const [regularPriceResult, priceResult] = handlePrice(data)

  const isEqual = Number(regularPriceResult) === Number(priceResult)
  return (
    <div className='relative flex xmd:flex-col xmd:justify-start xmd:items-start justify-between items-center bg-white py-[0.88rem] px-[0.59rem] xmd:p-[0.73rem] rounded-[0.58565rem] shadow-[-3px_2px_20px_0px_rgba(0,0,0,0.04),2px_2px_12px_0px_rgba(0,0,0,0.02)]'>
      <div className='flex items-center relative'>
        <Image
          src={data?.product_image || '/no-image.jpg'}
          alt=''
          width={200}
          height={200}
          className='w-[4.5388rem] h-[4.9rem] mr-[0.88rem] rounded-[0.5rem] xmd:border xmd:border-greyscale-10 xmd:rounded-[0.5rem] xmd:size-[5.27086rem] object-cover'
        />

        <div className='w-full h-[4.9rem]'>
          <Link
            href={`/${data?.slug}`}
            title={data?.name}
            className='caption font-medium text-greyscale-40 line-clamp-1'
          >
            {data?.name}
          </Link>

          <div className='flex items-center mb-[0.44rem] mt-[0.29rem]'>
            <span className='sub2 font-semibold text-blue-600 mr-[0.59rem] xmd:text-[1.1713rem] xmd:leading-normal'>
              {formatToVND(priceResult)}
            </span>

            {!isEqual && regularPriceResult && (
              <span className='caption1 line-through text-greyscale-40 xmd:font-medium xmd:text-greyscale-30 xmd:leading-normal'>
                {formatToVND(regularPriceResult)}
              </span>
            )}
          </div>

          {data?.type === 'variable' && data?.variation && (
            <div className='flex xmd:hidden'>
              {Object.values(data?.variation)?.map((item, index) => (
                <div
                  key={index}
                  className='caption1 text-greyscale-40 py-[0.44rem] px-[0.59rem] rounded-[0.43924rem] bg-elevation-20 mr-[0.59rem]'
                >
                  {item?.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className='flex xmd:justify-between xmd:items-center xmd:w-full xmd:mt-[0.73rem]'>
        {data?.type === 'variable' &&
          data?.variation &&
          data?.variation?.attributes && (
            <div className='hidden xmd:flex'>
              {Object.values(data?.variation?.attributes)?.map(
                (item, index) => (
                  <div
                    key={index}
                    className='caption1 text-greyscale-40 py-[0.44rem] px-[0.59rem] rounded-[0.43924rem] bg-elevation-20 mr-[0.59rem]'
                  >
                    {item?.label}
                  </div>
                ),
              )}
            </div>
          )}
      </div>
    </div>
  )
}

export default ItemCombo