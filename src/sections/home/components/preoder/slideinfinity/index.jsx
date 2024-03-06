import './style.css'

import Image from 'next/image'

export default function SlideInfinity() {
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
          {new Array(16).fill(0).map((_, index) => (
            <div
              key={index}
              className='bg-white size-[6.22255rem] rounded-[0.58565rem]'
            >
              <Image
                className='size-full object-contain rounded-[0.58565rem]'
                src={'/home/item-loop.png'}
                alt='item loop'
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
