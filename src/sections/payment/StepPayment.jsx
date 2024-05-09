'use client'
import {usePathname, useSearchParams} from 'next/navigation'
import ItemStep from './ItemStep'
import {Fragment} from 'react'

const listStepPayment = [
  {
    title: 'Thông tin đặt hàng',
  },
  {
    title: 'Thanh toán',
  },
  {
    title: 'Hoàn tất',
  },
]

export default function StepPayment() {
  const pathName = usePathname()
  const isPayment = pathName?.includes('/payment')
  return (
    <div className='container rounded-[0.58565rem] bg-[#F9F4F0] mt-[1.17rem] flex justify-between items-center h-[4.09956rem] px-[1.46rem] mb-[1.46rem]'>
      {listStepPayment?.map((item, index) => (
        <Fragment key={index}>
          <ItemStep
            item={item}
            status={isPayment}
            index={index}
          />
          {index < listStepPayment?.length - 1 && (
            <div className='border-t border-dashed border-[#45617D] mx-[1.46rem] w-full'></div>
          )}
        </Fragment>
      ))}
    </div>
  )
}
