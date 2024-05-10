'use client'

import CardVoucher from '@/components/cardvoucher'
import {useState} from 'react'

export default function VoucherSlideRes({data = [], className = ''}) {
  const [isIndex, setIsIndex] = useState(false)
  return (
    <div
      className={`${className} relative w-full overflow-x-auto h-[8.8rem] hidden-scrollbar`}
    >
      <div className='absolute top-0 left-0 w-fit px-[0.59rem] h-full flex flex-col justify-between'>
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className='flex flex-nowrap '
            >
              {data
                .slice(
                  index * (data.length / 2),
                  (index + 1) * (data.length / 2),
                )
                .map((item, idx) => (
                  <CardVoucher
                    isIndex={isIndex}
                    setIsIndex={setIsIndex}
                    index={index === 0 ? idx : idx + (data.length / 2) * index}
                    className={idx === 0 ? '!ml-0' : 'ml-[0.59rem]'}
                    key={idx}
                    isPriority={idx < 2 ? true : false}
                    item={item}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  )
}
