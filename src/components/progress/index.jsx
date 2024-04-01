import {cn} from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const Progress = ({ordered, totalProd, icon, className}) => {
  const percent = (ordered / totalProd) * 100
  return (
    <div className='h-[1.76rem] rounded-[0.3rem] bg-[#10273F] relative overflow-hidden'>
      <div
        style={{width: (percent || 0) + '%'}}
        className={cn(
          'bg-[linear-gradient(99deg,#FFD99E_-58.6%,#E99207_95.15%)] h-full',
          className,
        )}
      ></div>
      <div className='absolute top-0 left-0 flex items-center justify-center size-full'>
        <Image
          className='size-[1.1713rem] object-contain'
          src={icon || '/components/otherAmount.svg'}
          alt='icon tia set'
          width={16}
          height={16}
        />
        <span className='font-semibold text-white caption1 inline-block ml-[0.29rem]'>
          Số lượng đã đặt {ordered}/{totalProd} sản phẩm
        </span>
      </div>
    </div>
  )
}

export default Progress
