'use client'
import CardVoucher from '@/components/cardvoucher'

import {Swiper, SwiperSlide} from 'swiper/react'

export default function VoucherSlide({data = []}) {
  const listItem = new Array(Math.ceil(data?.length / 8)).fill(0)
  return (
    <article className='h-[11.4rem] container tablet:mx-0 tablet:min-w-full tablet:w-full'>
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        grabCursor
        className='size-full'
      >
        {listItem.map((_, index) => (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-4 grid-rows-2 gap-x-[0.79rem] gap-y-[1rem]'>
              {data.slice(index * 8, (index + 1) * 8).map((item, idx) => (
                <CardVoucher
                  key={idx}
                  isPriority={index === 0 ? true : false}
                  item={item}
                />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  )
}
