'use client'
import Image from 'next/image'
import CategoryProduct from '../productnew/CategoryProduct'
import CategoryProductRes from '../productnew/CategoryProductRes'
import SlideProduct from '../productnew/SlideProduct'
import TabCategories from './TabCategories'
import {useState} from 'react'

export default function LevelUpYourTech({isMobile}) {
  const [indexCategory, setIndexCategory] = useState(0)
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
          <TabCategories
            setIndexCategory={setIndexCategory}
            indexCategory={indexCategory}
          />
        </CategoryProduct>
      )}
      <SlideProduct isMobile={isMobile} />
    </>
  )
}
