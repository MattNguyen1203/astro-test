'use client'

import CardVoucher from '@/components/cardvoucher'
import {useState} from 'react'

const VoucherList = ({voucher}) => {
  const [isIndex, setIsIndex] = useState(false)
  return (
    <>
      <div className='grid grid-cols-1 gap-y-[0.59rem]'>
        {voucher?.coupon_list?.map((voucherItem, index) => (
          <CardVoucher
            key={index}
            item={voucherItem}
            isIndex={isIndex}
            setIsIndex={setIsIndex}
            index={index}
          />
        ))}
      </div>

      {voucher?.coupon_list?.length > 4 && (
        <button className='w-fit py-[0.81rem] px-[1.17rem] rounded-[7.32rem] caption1 text-greyscale-80 font-semibold mt-[1.17rem] bg-[#E9E9E9] mx-auto'>
          +{voucher?.coupon_list?.length - 4} voucher
        </button>
      )}
    </>
  )
}

export default VoucherList
