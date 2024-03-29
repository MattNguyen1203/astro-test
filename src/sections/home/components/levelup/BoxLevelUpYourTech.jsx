'use client'
import Image from 'next/image'

import {useState} from 'react'
import CategoryProduct from '../productnew/CategoryProduct'
import TabCategories from './TabCategories'
import SlideProduct from '../productnew/SlideProduct'
import CategoryProductRes from '../productnew/CategoryProductRes'
import useSWR from 'swr'
import {fetcher} from '@/lib/utils'

export default function BoxLevelUpYourTech({isMobile, categories = [], data}) {
  const [indexCategory, setIndexCategory] = useState(0)

  const {
    data: dataOfCategory,
    isLoading,
    error,
  } = useSWR(
    indexCategory
      ? process.env.NEXT_PUBLIC_API +
          `/okhub/v1/product/productByCategory/${categories[indexCategory]?.slug}`
      : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )
  return (
    <>
      {isMobile ? (
        <div className='h-[13.6896rem] rounded-[0.87848rem] overflow-hidden relative container'>
          <Image
            className='object-cover size-full'
            src={'/home/banner-level-up.jpg'}
            alt='banner level up'
            width={360}
            height={180}
          />
          <div className='absolute px-[0.88rem] left-0 bottom-[0.88rem] z-10 w-full'>
            <CategoryProductRes
              title='LEVEL UP YOUR TECH'
              href='/'
            />
          </div>
        </div>
      ) : (
        <CategoryProduct
          title='LEVEL UP YOUR TECH'
          href='/'
        >
          {!isMobile && (
            <TabCategories
              setIndexCategory={setIndexCategory}
              indexCategory={indexCategory}
              categories={categories}
            />
          )}
        </CategoryProduct>
      )}
      <SlideProduct
        isMobile={isMobile}
        data={indexCategory ? dataOfCategory : data}
      />
    </>
  )
}
