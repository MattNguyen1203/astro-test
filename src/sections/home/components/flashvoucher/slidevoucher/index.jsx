'use client'
import CardVoucher from '@/components/cardvoucher'

import {Swiper, SwiperSlide} from 'swiper/react'

export default function VoucherSlide({data}) {
  const listItem = new Array(Math.ceil(data?.length / 8)).fill(0)
  return (
    <article className='h-[11.4rem] container'>
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        grabCursor
        className='size-full'
      >
        {listItem.map((e, index) => (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-4 grid-rows-2 gap-x-[0.79rem] gap-y-[1rem]'>
              {data.slice(index * 8, (index + 1) * 8).map((e, idx) => (
                <CardVoucher
                  key={idx}
                  isPriority={index === 0 ? true : false}
                />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  )
}
