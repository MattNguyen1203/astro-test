import getData from '@/lib/getData'
import './style.css'

import Image from 'next/image'

export default async function SlideInfinity() {
  const products = await getData(
    '/okhub/v1/product/allProduct?limit=16&order=desc&page=1',
  )
  return (
    <div
      id='slide_infinity'
      className='relative overflow-hidden size-full'
    >
      <div className='absolute top-0 left-0 flex items-center h-full w-fit'>
        <div
          id='wrapper_infinity'
          className='flex *:mr-[0.59rem] w-fit'
        >
          {products?.item?.map((product, index) => (
            <div
              key={index}
              className='bg-white size-[6.22255rem] rounded-[0.58565rem]'
            >
              <Image
                className='size-full object-cover rounded-[0.58565rem]'
                src={product?.featuredImage?.url || '/no-image.jpg'}
                alt={product?.featuredImage?.alt || product?.name}
                width={85}
                height={85}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
