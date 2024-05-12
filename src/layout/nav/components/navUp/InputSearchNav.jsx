'use client'

import useStore from '@/app/(store)/store'
import Image from 'next/image'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'

export default function InputSearchNav({setValue, value, isMobile, data}) {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()

  const setIsFocusSearchNav = useStore((state) => state.setIsFocusSearchNav)
  const isFocusSearchNav = useStore((state) => state.isFocusSearchNav)

  const handleSubmit = (e) => {
    e.preventDefault()
    const paramNew = new URLSearchParams(searchParams)
    if (value) {
      paramNew.set('search', encodeURI(value))
    } else {
      paramNew.delete('search')
    }
    setTimeout(() => {
      if (value) {
        if (data?.item) {
          if (pathName?.includes('/san-pham')) {
            router.push(pathName + '?' + paramNew.toString())
          } else {
            router.push('/san-pham' + '?' + paramNew.toString())
          }
        } else {
          router.push('/khong-tim-thay')
        }
      }
    }, 1001)
    setIsFocusSearchNav(false)
  }

  return (
    <form
      className='block'
      onSubmit={handleSubmit}
    >
      <label
        id='search_nav'
        htmlFor='search'
        className='w-[21.45rem] xmd:size-[2.34261rem] rounded-[6.5vw] bg-elevation-20 relative h-[2.63543rem] flex items-center transition-all duration-500'
      >
        <div
          id='icon_search_nav'
          className={`${
            value ? 'active' : ''
          } absolute top-1/2 -translate-y-1/2 md:right-[0.88rem] size-[1.46413rem] pointer-events-none xmd:size-[1.1713rem] xmd:-translate-x-1/2 xmd:left-1/2`}
        >
          <Image
            className='object-cover size-full'
            src={
              isMobile
                ? '/layout/nav/search-gold.svg'
                : '/layout/nav/search.svg'
            }
            alt='icon search'
            height={20}
            width={20}
          />
        </div>
        <input
          className='bg-transparent outline-none placeholder:text-greyscale-30 placeholder:font-normal placeholder:leading-[1.2] placeholder:tracking-[0.00878rem] px-[0.88rem] text-greyscale-80 w-full xmd:placeholder:text-greyscale-20 xmd:placeholder:button'
          type='text'
          id='search'
          name='search'
          placeholder={
            isFocusSearchNav
              ? 'Nhập từ bạn muốn tìm kiếm'
              : isMobile
              ? ''
              : 'Tìm kiếm sản phẩm'
          }
          onFocus={() => setIsFocusSearchNav(true)}
          onChange={(e) => {
            setValue(e.target.value)
          }}
          // onBlur={() => setIsFocusSearchNav(false)}
        />
      </label>
    </form>
  )
}
