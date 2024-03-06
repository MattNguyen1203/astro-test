'use client'

import useStore from '@/app/(store)/store'
import Image from 'next/image'

export default function InputSearchNav() {
  const setIsFocusSearchNav = useStore((state) => state.setIsFocusSearchNav)
  return (
    <label
      id='search_nav'
      htmlFor='search'
      className='w-[21.45rem] rounded-[6.5vw] bg-elevation-20 relative h-[2.63543rem] flex items-center transition-all duration-500'
    >
      <div className='absolute top-1/2 -translate-y-1/2 right-[0.88rem] size-[1.46413rem]'>
        <Image
          className='object-cover size-full'
          src={'/layout/nav/search.svg'}
          alt='icon search'
          priority
          height={20}
          width={20}
        />
      </div>
      <input
        className='bg-transparent outline-none placeholder:text-greyscale-30 placeholder:font-normal placeholder:leading-[1.2] placeholder:tracking-[0.00878rem] px-[0.88rem]'
        type='text'
        id='search'
        name='search'
        placeholder='Tìm kiếm sản phẩm'
        onFocus={() => setIsFocusSearchNav(true)}
        // onBlur={() => setIsFocusSearchNav(false)}
      />
    </label>
  )
}