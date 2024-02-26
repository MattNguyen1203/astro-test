'use client'
import * as React from 'react'
import Image from 'next/image'

const listItem = [
  {
    src: '/home/htmp.svg',
    title: 'HOÀN TRẢ MIỄN PHÍ',
    content: 'Trả hàng miễn phí <br> trong 7 ngày',
  },
  {
    src: '/home/htmp.svg',
    title: 'CAM KẾT CHÍNH HÃNG',
    content: 'Trả hàng miễn phí <br> trong 7 ngày',
  },
  {
    src: '/home/htmp.svg',
    title: 'MIỄN PHÍ VẬN CHUYỂN',
    content: 'Trả hàng miễn phí <br> trong 7 ngày',
  },
  {
    src: '/home/htmp.svg',
    title: 'HỖ TRỢ 24/7',
    content: 'Trả hàng miễn phí <br> trong 7 ngày',
  },
]

export default function Banner() {
  return (
    <section className='bg-elevation-20 h-fit pb-[4.41rem] w-full pt-[10.17rem]'>
      <div className='container select-none rounded-[0.88rem] overflow-hidden'>
        <div className='flex justify-between mt-[1.17rem]'>
          {listItem.map((e, index) => (
            <ItemSupport
              key={index}
              src={e.src}
              title={e.title}
              content={e.content}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const ItemSupport = ({src, alt = '', title, content}) => {
  return (
    <div className='w-[calc((100%-3.51rem)/4)] p-[1.46rem] rounded-[0.586rem] flex items-center justify-between bg-linearSupport'>
      <Image
        className='size-[3.51rem] object-cover'
        src={src}
        alt={alt || 'icon support'}
        width={48}
        height={48}
      />
      <div className='w-full pl-[1rem]'>
        <h2 className='font-semibold text-blue-600 uppercase sub2'>{title}</h2>
        <p
          className='font-normal caption1 text-greyscale-40'
          dangerouslySetInnerHTML={{__html: content}}
        />
      </div>
    </div>
  )
}
ItemSupport.displayName = 'ListItem'
