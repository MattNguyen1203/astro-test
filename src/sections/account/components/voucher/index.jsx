'use client'

import useStore from '@/app/(store)/store'
import CardVoucher from '@/components/cardvoucher'
import Image from 'next/image'
import {useEffect, useState} from 'react'

export default function IndexVoucher({couponRank, couponCategories}) {
  const [isIndex, setIsIndex] = useState(false)

  const setProgress = useStore((state) => state.setProgress)

  useEffect(() => {
    return () => {
      setProgress(100)
    }
  }, [])

  return (
    <section className='p-[1.17rem] rounded-[0.58565rem] bg-white shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)]'>
      <div className='w-full h-[13.5rem] mb-[1.76rem] rounded-[0.58565rem] overflow-hidden'>
        <Image
          className='object-fill size-full'
          src={'/account/bannner-vouchers.jpg'}
          alt='voucher banner'
          width={700}
          height={200}
        />
      </div>
      <div className='grid grid-cols-2 gap-x-[0.84rem]'>
        <div>
          <h3 className='mb-[0.81rem] caption md:text-[1.02489rem] font-medium text-greyscale-80'>
            Voucher thành viên:
          </h3>
          <div className='space-y-[0.59rem]'>
            {couponRank?.coupon_list?.map((item, index) => (
              <CardVoucher
                isIndex={isIndex}
                setIsIndex={setIsIndex}
                index={index}
                noDetail
                className='w-full !bg-elevation-20'
                key={index}
                item={item}
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className='mb-[0.81rem] caption md:text-[1.02489rem] font-medium text-greyscale-80'>
            Voucher ngành hàng:
          </h3>
          <div className='space-y-[0.59rem]'>
            {couponCategories?.coupon_list?.map((item, index) => (
              <CardVoucher
                isIndex={isIndex}
                setIsIndex={setIsIndex}
                index={index + couponRank?.coupon_list?.length}
                noDetail
                className='w-full !bg-elevation-20'
                key={index}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
